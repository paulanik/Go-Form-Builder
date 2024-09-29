// src/components/Sidebar.js

import React, { useContext } from 'react';
import { useQuery, gql, useApolloClient } from '@apollo/client';
import DraggableElement from './DraggableElement';
import { FormContext } from '../FormContext'; // Import the context

// Define the GraphQL query to get all forms
const GET_FORMS = gql`
  query GetForms {
    forms {
      id
      title
    }
  }
`;

// Define the GraphQL query to get a single form by ID
const GET_FORM = gql`
  query GetForm($id: ID!) {
    form(id: $id) {
      id
      title
      content
    }
  }
`;

function Sidebar() {
  const { loading, error, data } = useQuery(GET_FORMS);
  const client = useApolloClient();

  // Extract setFormTitle and setElements from the context
  const { setFormTitle, setElements } = useContext(FormContext);

  // Function to load a form by ID
  const loadForm = (formId) => {
    client
      .query({
        query: GET_FORM,
        variables: { id: formId },
      })
      .then((response) => {
        const { title, content } = response.data.form;
        setFormTitle(title);
        setElements(JSON.parse(content));
      })
      .catch((error) => {
        console.error('Error loading form:', error);
      });
  };

  if (loading) return <p>Loading forms...</p>;
  if (error) return <p>Error loading forms.</p>;

  return (
    <div className="sidebar">
      <h2>Components</h2>
      <DraggableElement type="TextField" label="Text Field" />
      <DraggableElement type="DateField" label="Date Field" />
      <DraggableElement type="Dropdown" label="Dropdown" />
      {/* Add more draggable components as needed */}

      <h2>Forms</h2>
      <ul>
        {data.forms.map((form) => (
          <li key={form.id} onClick={() => loadForm(form.id)}>
            {form.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
