// -------------------------------------------------------------------
// Generated by 365admin-publish/api/20 makeschema.ps1
// -------------------------------------------------------------------
/*
---
title: Ping
---
*/
package endpoints

import (
	"context"
	"log"

	"github.com/swaggest/usecase"
)

func HealthPingPost() usecase.Interactor {
	type Request struct {
		Pong string `query:"pong" binding:"required"`
	}
	u := usecase.NewInteractor(func(ctx context.Context, input Request, output *string) error {
		log.Printf("Ping: %s", input.Pong)
		*output = input.Pong

		return nil

	})
	u.SetTitle("Ping")
	u.SetTags("Health")
	return u
}
