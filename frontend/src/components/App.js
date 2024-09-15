import React from 'react';
import FormBuilder from './pages/Forms/FormBuilder';
import './styles/App.css';

const App = () => {
    return (
        <div className="app-container">
            <h1>Form Builder</h1>
            <FormBuilder />
        </div>
    );
};

export default App;