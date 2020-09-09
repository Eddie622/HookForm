import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';
import FormResult from './components/FormResult';

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  return (
    <div className="App">
      <UserForm inputs={state} setInputs={setState}/>
      <FormResult data={state}/>
    </div>
  );
}

export default App;
