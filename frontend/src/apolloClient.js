// src/apolloClient.js
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:8080/query', // Make sure this matches the backend's GraphQL endpoint
  }),
  cache: new InMemoryCache(),
});

export default client;
