// Sample run-helloworld is a minimal Cloud Run service.
package main

import (
	"context"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"

	"cloud.google.com/go/datastore"
)

type Env struct {
	client *datastore.Client
	ctx    context.Context
}

func main() {
	ctx := context.Background()

	// Set your Google Cloud Platform project ID.
	projectID := "home-dashboard-304114"

	// Creates a client.
	client, err := datastore.NewClient(ctx, projectID)
	if err != nil {
		log.Fatalf("Failed to create client: %v", err)
	}

	env := &Env{client: client, ctx: ctx}

	// Determine port for HTTP service.
	port := os.Getenv("PORT")
	if port == "" {
		port = "8010"
		log.Printf("defaulting to port %s", port)
	}

	// Start HTTP server.
	log.Printf("listening on port %s", port)
	Router := mux.NewRouter()
	Router.HandleFunc("/add-food", env.AddFood).Methods("PUT")
	Router.HandleFunc("/get-food", env.GetFoods).Methods("GET")
	Router.HandleFunc("consume-food/{id}", env.ConsumeFood).Methods("POST")
	http.ListenAndServe(":"+port, Router)
}
