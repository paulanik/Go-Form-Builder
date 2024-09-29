import React from 'react';
import { useDrag } from 'react-dnd';

function DraggableElement({ type, label }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'FORM_ELEMENT',
    item: { type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className="draggable-element"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {label}
    </div>
  );
}

export default DraggableElement;
