/*
   File have been automatically created. To prevent the file from getting overwritten
   set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
   ---
   keep: false
   ---
*/
//generator:  noma3.delete.v2
package sql

import (
	"log"
	"strconv"

	"github.com/magicbutton/magic-mix/applogic"
	"github.com/magicbutton/magic-mix/database"
	"github.com/magicbutton/magic-mix/services/models/sqlmodel"
)

func SQLDelete(arg0 string) error {
	id, _ := strconv.Atoi(arg0)
	log.Println("Calling SQLdelete")

	return applogic.Delete[database.SQL, sqlmodel.SQL](id)

}
