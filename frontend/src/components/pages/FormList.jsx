import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_FORMS_QUERY = gql`
  query GetForms {
    forms {
      id
      title
      content
    }
  }
`;

const FormsList = () => {
  const { data, loading, error } = useQuery(GET_FORMS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Forms List</h1>
      {data.forms.map((form) => (
        <div key={form.id}>
          <h2>{form.title}</h2>
          <p>{form.content}</p>
        </div>
      ))}
    </div>
  );
};

export default FormsList;
