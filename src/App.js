import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';

const Input = styled.input`
  padding: 15px;
  width: 200px;
  border: 2px solid black;
  border-radius: 5px;
  font-size: 1.1rem;
  margin-right: 50px; 
`;

const Btn = styled.button`
  border-radius: 50px;
  font-size: 1.1rem;
  padding: 10px;
  margin-right: 25px; 
`;

const App = () => {
  const [ inputFeilds, setInputFeilds] = useState([{firstName: '', lastName: ''}]);

  const handleChange = (e, index) => {
    const values = [...inputFeilds];
    values[index][e.target.name] = e.target.value;
    setInputFeilds(values);
  }

  const handleNewFeilds = () => {
    setInputFeilds(preVal => [...preVal, {firstName: '', lastName: ''}]);
  }

  const removeNewFeilds = (e, index) => {
    console.log('i', index);
    if (index === 0) {
      return;
    }
    const copyInputFeilds = [...inputFeilds];
    copyInputFeilds.pop();
    setInputFeilds(copyInputFeilds);
  }

  const handleSave = () => {
    console.log('name', inputFeilds);
  }

  return (
    <div className='main'>
    {inputFeilds.map((inputFeild, index) => (
      <div style={{ marginTop: '20px'}} key={index}>
        <Input placeholder='First Name' name='firstName' value={inputFeild.firstName} onChange={(e) => handleChange(e, index)} />
        <Input placeholder='Last Name' name='lastName' value={inputFeild.lastName} onChange={(e) => handleChange(e, index)} />
        <Btn onClick={e => removeNewFeilds(e, index)}>-</Btn>
        <Btn onClick={handleNewFeilds}>+</Btn>
      </div>
    ))}
      <div style={{ marginTop: '40px'}}>
      <Btn onClick={handleSave}>Save</Btn>
      </div>
    </div>
  )
};

export default App;
