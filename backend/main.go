package main

import (
	"fmt"
	"go-form/graph"
	"go-form/models"
	"log"
	"net/http"
)

// main function to start the server
func main() {
	// Create a new form using the models package.
	form := models.NewForm("Sample Form")
	fmt.Println("Form Name:", form.Name)

	// Initialize resolvers.
	resolver := &graph.Resolver{}

	// Define your API routes
	http.HandleFunc("/mutation", func(w http.ResponseWriter, r *http.Request) {
		// Handle mutation logic here
		fmt.Fprintln(w, resolver.Mutation())
	})

	http.HandleFunc("/query", func(w http.ResponseWriter, r *http.Request) {
		// Handle query logic here
		fmt.Fprintln(w, resolver.Query())
	})

	// Start the server
	fmt.Println("Server is running on http://localhost:8080")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal(err)
	}
}
