package main

import (
	"log"
	"net/http"

	"go-form/config"
	"go-form/routes"

	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	db, err := config.ConnectDatabase()
	if err != nil {
		log.Fatal("Failed to connect to database:", err)
	}

	router := routes.SetupRoutes(db) // Pass db to the route setup
	log.Fatal(http.ListenAndServe(":8080", router))
}
