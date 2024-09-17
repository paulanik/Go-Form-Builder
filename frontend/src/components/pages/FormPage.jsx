import React from 'react';
import { createForm } from '@formily/core';
import { FormProvider, Field } from '@formily/react';
import { Input, FormButtonGroup, Submit } from '@formily/antd';
import { gql, useMutation } from '@apollo/client';

const CREATE_FORM_MUTATION = gql`
  mutation CreateForm($input: NewForm!) {
    createForm(input: $input) {
      id
      title
      content
    }
  }
`;

const form = createForm();

const FormPage = () => {
  const [createForm] = useMutation(CREATE_FORM_MUTATION);

  const handleSubmit = async (values) => {
    try {
      const { data } = await createForm({ variables: { input: values } });
      alert('Form created: ' + data.createForm.id);
    } catch (error) {
      console.error('Error creating form', error);
    }
  };

  return (
    <FormProvider form={form}>
      <Field name="title" title="Title" required decorator={[Input]} />
      <Field name="content" title="Content" required decorator={[Input.TextArea]} />
      <FormButtonGroup>
        <Submit onSubmit={handleSubmit}>Submit</Submit>
      </FormButtonGroup>
    </FormProvider>
  );
};

export default FormPage;
