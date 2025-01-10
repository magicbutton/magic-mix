package powershell

import (
	"bufio"
	"embed"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"log"
	"os"
	"os/exec"
	"path"

	"github.com/google/uuid"
	"github.com/magicbutton/magic-mix/audit"
	"github.com/magicbutton/magic-mix/sharepoint"
	"github.com/spf13/viper"
)

//go:embed scripts
var scripts embed.FS

type Setup func(workingDirectory string) (string, []string, error)

func PwshCwd(appId string) string {

	dir := ".koksmat/powershell"
	os.MkdirAll(dir, os.ModePerm)
	dir = path.Join(dir, fmt.Sprintf("%s-%s", appId, uuid.New()))
	os.MkdirAll(dir, os.ModePerm)

	return dir
}

type Callback func(workingDirectory string)

func CallbackMockup(workingDirectory string) {}
func Execute(appId string, fileName, args string, setEnvironment Setup, src string, callback Callback) (output []byte, err error, console string,
) {
	cmd := exec.Command("pwsh", "-nologo", "-noprofile")
	workingDirectory := PwshCwd(appId)
	initScript, environment, err := setEnvironment(workingDirectory)
	if err != nil {
		return nil, err, ""
	}

	cmd.Env = environment

	stdin, err := cmd.StdinPipe()
	if err != nil {
		log.Fatal(err)
	}

	cmd.Dir = workingDirectory

	os.Remove(path.Join(cmd.Dir, "output.json"))
	ps1Code, err := scripts.ReadFile(fmt.Sprintf("scripts/connectors/%s.ps1", initScript))
	if err != nil {

		return nil, err, ""
	}

	ps2Code := []byte(src)
	if src == "" {
		ps2Code, err = scripts.ReadFile(fileName)
		if err != nil {
			return nil, err, ""
		}
	}

	err = os.WriteFile(path.Join(cmd.Dir, "run.ps1"), ps2Code, 0644)
	if err != nil {
		return nil, err, ""
	}
	err = os.WriteFile(path.Join(cmd.Dir, "init.ps1"), ps1Code, 0644)
	if err != nil {
		return nil, err, ""
	}

	pipe, _ := cmd.StdoutPipe()
	combinedOutput := []byte{}

	script := fmt.Sprintf(`
	$ErrorActionPreference = "Stop"
	. ./run.ps1  %s`, args)
	go func() {
		defer stdin.Close()
		fmt.Fprintln(stdin, ". ./init.ps1")
		fmt.Fprintln(stdin, script)

	}()

	srcCode := fmt.Sprintf("[%s]", ps2Code)
	err = cmd.Start()
	go func(p io.ReadCloser) {
		reader := bufio.NewReader(pipe)
		line, err := reader.ReadString('\n')
		for err == nil {
			log.Print(line)
			combinedOutput = append(combinedOutput, []byte(line)...)
			line, err = reader.ReadString('\n')
		}
	}(pipe)
	err = cmd.Wait()

	if err != nil {
		audit.LogPowerShell(appId, fileName, srcCode, args, "", true, string(combinedOutput))
		log.Println(fmt.Sprint(err) + ": " + string(combinedOutput))
		return nil, errors.New("Could not run PowerShell script"), string(combinedOutput)
	}

	outputJson, err := os.ReadFile(path.Join(cmd.Dir, "output.json"))

	os.WriteFile(path.Join(cmd.Dir, "output.txt"), []byte(string(combinedOutput)), 0644)
	if callback != nil {
		callback(cmd.Dir)
	}
	audit.LogPowerShell(appId, fileName, srcCode, args, fmt.Sprintf("[%s]", outputJson), false, string(combinedOutput))

	return outputJson, nil, string(combinedOutput)
}

func Run[R any](appId string, fileName string, args string, setup Setup, src string, callback Callback) (result *R, err error) {

	output, err, _ := Execute(appId, fileName, args, setup, src, callback)
	dataOut := new(R)
	textOutput := fmt.Sprintf("%s", output)
	if (output != nil) && (textOutput != "") {

		jsonErr := json.Unmarshal(output, &dataOut)
		if jsonErr != nil {
			s := fmt.Sprintf("[%s]", output)
			outArray := []byte(s)
			jsonErr := json.Unmarshal(outArray, &dataOut)
			if jsonErr != nil {
				log.Println("Error parsing output: ", jsonErr)
			}
		}
	}
	result = *&dataOut // fmt.Sprintf("%s", outputJson)
	return result, err
}
func RunRaw(appId string, fileName string, args string, setup Setup, src string, callback Callback) (result string, err error) {

	output, err, _ := Execute(appId, fileName, args, setup, src, callback)
	result = fmt.Sprintf("%s", output)

	return result, err
}

var SetupExchange = func(workingDirectory string) (string, []string, error) {
	env := os.Environ()

	env = append(env, fmt.Sprintf("EXCHCERTIFICATEPASSWORD=%s", viper.GetString("EXCHCERTIFICATEPASSWORD")))
	env = append(env, fmt.Sprintf("EXCHAPPID=%s", viper.GetString("EXCHAPPID")))
	env = append(env, fmt.Sprintf("EXCHORGANIZATION=%s", viper.GetString("EXCHORGANIZATION")))
	env = append(env, fmt.Sprintf("EXCHCERTIFICATE=%s", viper.GetString("EXCHCERTIFICATE")))
	return "exchange", env, nil

}

var SetupPNP = func(workingDirectory string) (string, []string, error) {

	ps2Code, err := sharepoint.Assets.ReadFile("assets/template-filtered.xml")
	if err != nil {
		return "", []string{}, err
	}
	err = os.WriteFile(path.Join(workingDirectory, "template.xml"), ps2Code, 0644)
	if err != nil {
		return "", []string{}, err
	}
	env := os.Environ()

	env = append(env, fmt.Sprintf("PNPAPPID=%s", viper.GetString("PNPAPPID")))
	env = append(env, fmt.Sprintf("PNPTENANTID=%s", viper.GetString("PNPTENANTID")))
	env = append(env, fmt.Sprintf("PNPSITE=%s", viper.GetString("PNPSITE")))
	env = append(env, fmt.Sprintf("PNPCERTIFICATE=%s", viper.GetString("PNPCERTIFICATE")))
	return "pnp", env, nil

}

func RunExchange[R any](appId string, fileName string, args string, src string, callback Callback) (result *R, err error) {

	return Run[R](appId, fileName, args, SetupExchange, src, callback)
}

func RunPNP[R any](appId string, fileName string, args string, src string, callback Callback) (result *R, err error) {

	return Run[R](appId, fileName, args, SetupPNP, src, callback)
}

func RunRawExchange(appId string, fileName string, args string, src string, callback Callback) (result string, err error) {

	return RunRaw(appId, fileName, args, SetupExchange, src, callback)
}

func RunRawPNP(appId string, fileName string, args string, src string, callback Callback) (result string, err error) {

	return RunRaw(appId, fileName, args, SetupPNP, src, callback)
}
