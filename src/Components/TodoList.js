import "../styles/TodoList.css";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
 return (
  <div className="todo-container">
   <div className="todo-list">
    {filteredTodos.map((todo) => (
     <Todo
      todo={todo}
      todos={todos}
      setTodos={setTodos}
      text={todo.text}
      key={todo.id}
     />
    ))}
   </div>
  </div>
 );
};

export default TodoList;
