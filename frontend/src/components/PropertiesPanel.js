import React, { useContext } from 'react';
import { FormContext } from '../FormContext';

function PropertiesPanel() {
  const { elements, setElements, selectedElementId } = useContext(FormContext);
  const selectedElement = elements.find((el) => el.id === selectedElementId);

  const handlePropertyChange = (e) => {
    const { name, value } = e.target;
    setElements((prevElements) =>
      prevElements.map((el) =>
        el.id === selectedElementId
          ? { ...el, properties: { ...el.properties, [name]: value } }
          : el
      )
    );
  };

  if (!selectedElement) {
    return (
      <div className="properties-panel">
        <h2>Properties</h2>
        <p>Select an element to edit its properties.</p>
      </div>
    );
  }

  return (
    <div className="properties-panel">
      <h2>Properties</h2>
      <div>
        <label>Label:</label>
        <input
          type="text"
          name="label"
          value={selectedElement.properties.label || ''}
          onChange={handlePropertyChange}
        />
      </div>
      {/* Add more properties based on element type */}
    </div>
  );
}

export default PropertiesPanel;
