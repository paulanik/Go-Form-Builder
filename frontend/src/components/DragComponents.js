import React from 'react';
import { useDrag } from 'react-dnd';

const DragComponent = ({ type, label }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'component',
    item: { type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1, padding: '10px', border: '1px solid black', margin: '5px' }}>
      {label}
    </div>
  );
};

const DragComponents = () => (
  <div style={{ width: '200px', padding: '10px', borderRight: '1px solid gray' }}>
    <h4>Components</h4>
    <DragComponent type="text" label="Text" />
    <DragComponent type="date" label="Date" />
    <DragComponent type="dropdown" label="Dropdown" />
  </div>
);

export default DragComponents;
