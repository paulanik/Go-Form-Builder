// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { FormProvider } from './FormContext'; // Import FormProvider

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql', // Update with your GraphQL endpoint
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <FormProvider>
      <DndProvider backend={HTML5Backend}>
        <App />
      </DndProvider>
    </FormProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
