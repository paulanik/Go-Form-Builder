import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [elements, setElements] = useState([]);
  const [formTitle, setFormTitle] = useState('');
  const [selectedElementId, setSelectedElementId] = useState(null);

  return (
    <FormContext.Provider
      value={{
        elements,
        setElements,
        formTitle,
        setFormTitle,
        selectedElementId,
        setSelectedElementId,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
