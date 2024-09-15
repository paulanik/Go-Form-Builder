import React from 'react';
import { createForm } from '@formily/core';
import { FormProvider, Form, Field } from '@formily/react';
import { Input, Submit } from '@formily/antd';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

const SUBMIT_FORM = gql`
    mutation SubmitForm($data: YourFormDataType!) {
        submitForm(data: $data) {
            success
            message
        }
    }
`;

const FormBuilder = () => {
    const form = createForm();
    const [submitForm] = useMutation(SUBMIT_FORM);

    const onSubmit = async (values) => {
        try {
            const response = await submitForm({ variables: { data: values } });
            alert(response.data.submitForm.message);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <FormProvider form={form}>
            <Form onSubmit={onSubmit}>
                <Field name="name" title="Name" required>
                    <Input />
                </Field>
                <Field name="email" title="Email" required>
                    <Input />
                </Field>
                {/* Add more fields as needed */}
                <Submit>Submit</Submit>
            </Form>
        </FormProvider>
    );
};

export default FormBuilder;