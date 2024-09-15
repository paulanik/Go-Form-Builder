package routes

import (
	"github.com/gorilla/mux"
	"gorm.io/gorm"
)

func SetupRoutes(db *gorm.DB) *mux.Router {
	router := mux.NewRouter()

	// Use db in your route handlers, for example:
	// router.HandleFunc("/api/forms", func(w http.ResponseWriter, r *http.Request) {
	//     // Use db to interact with your database
	// })

	return router
}
