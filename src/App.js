//!| ▼▼▼ Import ▼▼▼
import React, { useState, useEffect } from 'react';
import './App.css';
import Form from "./components/Form"
import ToDoList from "./components/ToDoList"
// import Nav from "./components/Nav"
// import Video from "./video.mp4"

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  //// Filter
  const filterHandler = () => {
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
      }
  }

  //// Local Storage
  const saveTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
  };
  
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal)
    }
  };
  
  //// Use Effect
  useEffect(() =>{
    getLocalTodos();
  }, []);

  useEffect(() =>{
    saveTodos();
    filterHandler();
  }, [todos, status]);

  return (
    <div className="App">
      <Form 
        setStatus={setStatus} 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}  
      />
      <ToDoList 
        filteredTodos={filteredTodos} 
        todos={todos} 
        setTodos={setTodos} 
      />
    </div>
  );
}

export default App;
