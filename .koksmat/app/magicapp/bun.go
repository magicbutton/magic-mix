package magicapp

import (
	"log"

	pgx "github.com/jackc/pgx/v4"
	"github.com/jackc/pgx/v4/stdlib"
	"github.com/spf13/viper"
	"github.com/uptrace/bun"
	"github.com/uptrace/bun/dialect/pgdialect"

	"github.com/magicbutton/magic-mix/utils"
)

func OpenDatabase() {
	//dir, _ := os.Getwd()
	//log.Println("Current directory", dir)
	utils.Setup("./.env")

	dsn := viper.GetString("POSTGRES_DB")
	config, err := pgx.ParseConfig(dsn)
	if err != nil {
		log.Fatal(err)

	}
	config.PreferSimpleProtocol = true
	sqldb := stdlib.OpenDB(*config)
	utils.Db = bun.NewDB(sqldb, pgdialect.New())
	//utils.Db.AddQueryHook(bundebug.NewQueryHook(bundebug.WithVerbose(true)))

}
