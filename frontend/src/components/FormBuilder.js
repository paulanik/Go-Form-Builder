import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { createForm } from '@formily/core';
import { FormProvider, createSchemaField } from '@formily/react';

const SchemaField = createSchemaField({
  components: {
    Input: (props) => <input {...props} />,
    Date: (props) => <input type="date" {...props} />,
    Dropdown: (props) => (
      <select {...props}>
        <option value="Option1">Option 1</option>
        <option value="Option2">Option 2</option>
      </select>
    ),
  },
});

const FormBuilder = () => {
  const [components, setComponents] = useState([]);
  const form = createForm();

  const [{ isOver }, drop] = useDrop({
    accept: 'component',
    drop: (item) => setComponents([...components, item.type]),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const renderComponent = (type, index) => {
    switch (type) {
      case 'text':
        return <SchemaField.Input key={index} name={`input${index}`} />;
      case 'date':
        return <SchemaField.Date key={index} name={`date${index}`} />;
      case 'dropdown':
        return <SchemaField.Dropdown key={index} name={`dropdown${index}`} />;
      default:
        return null;
    }
  };

  return (
    <div ref={drop} style={{ width: '100%', minHeight: '400px', background: isOver ? 'lightyellow' : 'white', padding: '20px', border: '1px solid gray' }}>
      <FormProvider form={form}>
        {components.map((type, index) => renderComponent(type, index))}
      </FormProvider>
    </div>
  );
};

export default FormBuilder;
