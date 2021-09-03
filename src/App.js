import { useState, useEffect } from "react";
import Nav from "./Components/Nav";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";
import "./styles/App.css";

function App() {
 // states
 const [inputText, setInputText] = useState("");
 const [todos, setTodos] = useState([]);
 const [status, setStatus] = useState("all");
 const [filteredTodos, setFilteredTodos] = useState([]);

 // useeffect
 useEffect(() => {
  filterHandler();
 }, [todos, status]);

 //  functions
 const filterHandler = () => {
  switch (status) {
   case "completed":
    setFilteredTodos(todos.filter((todo) => todo.completed === true));
    break;
   case "uncompleted":
    setFilteredTodos(todos.filter((todo) => todo.completed === false));
    break;
   default:
    setFilteredTodos(todos);
    break;
  }
 };
 return (
  <>
   <Nav />
   <Form
    inputText={inputText}
    setInputText={setInputText}
    todos={todos}
    setTodos={setTodos}
    setStatus={setStatus}
   />
   <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
  </>
 );
}

export default App;
