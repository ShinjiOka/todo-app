import React from "react";
import './App.css';
import Form from './components/Form/Form.jsx';
import Filter from './components/Filter/Filter.jsx';
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="App">
      <h1 className="App-title">Todoアプリ</h1>
      <Form />
      <Filter />
      <TodoList />
    </div>
  );
}

export default App;
