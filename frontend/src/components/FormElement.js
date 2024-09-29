import React, { useContext } from 'react';
import { useDrag } from 'react-dnd';
import { FormContext } from '../FormContext';

function FormElement({ element }) {
  const { selectedElementId, setSelectedElementId } = useContext(FormContext);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'FORM_ELEMENT',
    item: { id: element.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const style = {
    position: 'absolute',
    left: element.left,
    top: element.top,
    cursor: 'move',
    opacity: isDragging ? 0.5 : 1,
    border: selectedElementId === element.id ? '2px solid blue' : 'none',
  };

  let content;
  switch (element.type) {
    case 'TextField':
      content = (
        <div>
          <label>{element.properties.label || 'Text Field'}</label>
          <input type="text" />
        </div>
      );
      break;
    case 'DateField':
      content = (
        <div>
          <label>{element.properties.label || 'Date Field'}</label>
          <input type="date" />
        </div>
      );
      break;
    case 'Dropdown':
      content = (
        <div>
          <label>{element.properties.label || 'Dropdown'}</label>
          <select>
            {/* For now, hardcoded options */}
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
      );
      break;
    default:
      content = null;
  }

  return (
    <div
      ref={drag}
      style={style}
      onClick={() => setSelectedElementId(element.id)}
    >
      {content}
    </div>
  );
}

export default FormElement;
