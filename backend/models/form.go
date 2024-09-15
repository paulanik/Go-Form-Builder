package models

import "gorm.io/gorm"

type Form struct {
	gorm.Model
	Title   string `json:"title"`
	Content string `json:"content"` // This can be JSON for the form structure
}
