import './App.css';
import InputBox from "./InputBox";
import React from 'react';
import {useState} from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const addItem = text => setTodos([...todos,text]) ;
  
  return (
    <div className="App">
      <InputBox addItem={addItem}/>
      
    </div>
  );
}

export default App;
