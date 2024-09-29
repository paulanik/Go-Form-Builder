import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import PropertiesPanel from './components/PropertiesPanel';

function App() {
  return (
    <div className="App">
      <div className="layout">
        <Sidebar />
        <Canvas />
        <PropertiesPanel />
      </div>
    </div>
  );
}

export default App;
