package models

// Form represents a form structure.
type Form struct {
	Name string
}

// NewForm creates a new Form instance.
func NewForm(name string) *Form {
	return &Form{Name: name}
}
