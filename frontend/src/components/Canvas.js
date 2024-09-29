import React, { useContext } from 'react';
import { useDrop } from 'react-dnd';
import FormElement from './FormElement.js';
import { useMutation, gql } from '@apollo/client';
import { FormContext } from '../FormContext';

const CREATE_FORM = gql`
  mutation CreateForm($input: NewForm!) {
    createForm(input: $input) {
      id
      title
    }
  }
`;

function Canvas() {
  const { elements, setElements, formTitle, setFormTitle } = useContext(FormContext);
  const [, drop] = useDrop(() => ({
    accept: 'FORM_ELEMENT',
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      const canvasRect = document.querySelector('.canvas').getBoundingClientRect();
      const x = offset.x - canvasRect.left;
      const y = offset.y - canvasRect.top;

      const element = {
        id: Date.now(),
        type: item.type,
        left: x,
        top: y,
        properties: {},
      };
      setElements((prevElements) => [...prevElements, element]);
    },
  }));

  const [createForm] = useMutation(CREATE_FORM);

  const handleSave = () => {
    const content = JSON.stringify(elements);
    createForm({
      variables: {
        input: {
          title: formTitle,
          content,
        },
      },
    })
      .then(() => {
        alert('Form saved successfully!');
      })
      .catch((error) => {
        console.error('Error saving form:', error);
        alert('Error saving form.');
      });
  };

  return (
    <div className="canvas-container">
      <div className="canvas-header">
        <input
          type="text"
          placeholder="Form Title"
          value={formTitle}
          onChange={(e) => setFormTitle(e.target.value)}
        />
        <button onClick={handleSave}>Save Form</button>
      </div>
      <div ref={drop} className="canvas">
        {elements.map((element) => (
          <FormElement key={element.id} element={element} />
        ))}
      </div>
    </div>
  );
}

export default Canvas;
