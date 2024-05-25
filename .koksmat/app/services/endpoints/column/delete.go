            /*
            File have been automatically created. To prevent the file from getting overwritten
            set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
            ---
            keep: false
            ---
            */
            //generator:  noma3.delete.v2
            package column
            
            import (
                "log"
                "strconv"
                "github.com/magicbutton/magic-mix/applogic"
                "github.com/magicbutton/magic-mix/database"
                "github.com/magicbutton/magic-mix/services/models/columnmodel"
            
            )
            
            func ColumnDelete(arg0 string) ( error) {
                id,_ := strconv.Atoi(arg0)
                log.Println("Calling Columndelete")
            
                return applogic.Delete[database.Column, columnmodel.Column](id)
            
            }
