import './App.css';
import React, {useState} from 'react';
import Display from "./Components/Display";
import Form from "./Components/Form";

function App() {
  const [value, setValue] = useState([]);
  const addValue = (newValue)=>{
    setValue((prev)=>{
      return[...prev, newValue]
    })
  }
  return (
    <div className="App">
      <Form className="" addValue={addValue}/>
      <Display className="" value={value}/>
    </div>
  );
}

export default App;
