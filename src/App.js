import { useState } from "react";
import Nav from "./Components/Nav";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";
import "./styles/App.css";

function App() {
 const [inputText, setInputText] = useState("");
 const [todos, setTodos] = useState([]);
 const [status, setStatus] = useState("all");
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
   <TodoList todos={todos} setTodos={setTodos} />
  </>
 );
}

export default App;
