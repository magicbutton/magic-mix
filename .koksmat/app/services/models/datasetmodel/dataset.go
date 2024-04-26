/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
//GenerateGoModel v1
package datasetmodel
import (
	"encoding/json"
	"time"
    "github.com/magicbutton/magic-mix/database/databasetypes"
)

func UnmarshalDataset(data []byte) (Dataset, error) {
	var r Dataset
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *Dataset) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type Dataset struct {
    ID        int    `json:"id"`
    CreatedAt time.Time `json:"created_at"`
    UpdatedAt time.Time `json:"updated_at"`
        Tenant string `json:"tenant"`
    Name string `json:"name"`
    Description string `json:"description"`
    Connection databasetypes.Reference `json:"connection"`
    Transformer databasetypes.Reference `json:"transformer"`

}

