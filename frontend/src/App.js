import React from 'react';
import DragComponents from './components/DragComponents';
import FormBuilder from './components/FormBuilder';
import FormOptions from './components/FormOptions';
import './App.css';

const App = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <DragComponents />
      <FormBuilder />
      <FormOptions />
    </div>
  );
};

export default App;
