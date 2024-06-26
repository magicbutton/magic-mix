/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.read.v2
package connection

import (
	"log"
	"strconv"

	"github.com/magicbutton/magic-mix/applogic"
	"github.com/magicbutton/magic-mix/database"
	"github.com/magicbutton/magic-mix/services/models/connectionmodel"
)

func ConnectionRead(arg0 string) (*connectionmodel.Connection, error) {
	id, _ := strconv.Atoi(arg0)
	log.Println("Calling Connectionread")

	return applogic.Read[database.Connection, connectionmodel.Connection](id, applogic.MapConnectionOutgoing)

}
