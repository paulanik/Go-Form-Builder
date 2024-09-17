import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './ApolloClient';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormPage from './components/pages/FormPage';
import FormsList from './components/pages/FormList';

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <Routes>
        <Route path="/" element={<FormsList />} />
        <Route path="/new-form" element={<FormPage />} />
      </Routes>
    </Router>
  </ApolloProvider>
);

export default App;
