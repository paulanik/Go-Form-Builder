package routes

import (
	"encoding/json"
	"net/http"

	"go-form/models"

	"github.com/gorilla/mux"
	"gorm.io/gorm"
)

func SetupRoutes(db *gorm.DB) *mux.Router {
	router := mux.NewRouter()

	router.HandleFunc("/api/forms", func(w http.ResponseWriter, r *http.Request) {
		if r.Method == http.MethodPost {
			var form models.Form
			if err := json.NewDecoder(r.Body).Decode(&form); err != nil {
				http.Error(w, err.Error(), http.StatusBadRequest)
				return
			}
			db.Create(&form)
			w.WriteHeader(http.StatusCreated)
			json.NewEncoder(w).Encode(form)
		} else if r.Method == http.MethodGet {
			var forms []models.Form
			db.Find(&forms)
			json.NewEncoder(w).Encode(forms)
		}
	}).Methods(http.MethodPost, http.MethodGet)

	return router
}
