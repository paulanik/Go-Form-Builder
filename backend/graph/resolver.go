package graph

// ResolverRoot defines the interface that the Resolver must implement.
type ResolverRoot interface {
	Mutation() string
	Query() string
}

// Resolver implements the ResolverRoot interface.
type Resolver struct{}

// Mutation method implementation for the Resolver.
func (r *Resolver) Mutation() string {
	return "Mutation response"
}

// Query method implementation for the Resolver.
func (r *Resolver) Query() string {
	return "Query response"
}
