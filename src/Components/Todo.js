import "../styles/Todo.css";

const Todo = ({ text, todo, todos, setTodos }) => {
 const deletehandler = () => {
  setTodos(todos.filter((el) => el.id !== todo.id));
 };
 const completeHandler = () => {
  setTodos(
   todos.map((item) => {
    if (item.id === todo.id) {
     return {
      ...item,
      completed: !item.completed,
     };
    }
    return item;
   })
  );
 };
 return (
  <div className="todo">
   <p className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</p>
   <button className="complete-btn" onClick={completeHandler}>
    <i className="fas fa-check"></i>
   </button>
   <button className="trash-btn" onClick={deletehandler}>
    <i className="fas fa-trash"></i>
   </button>
  </div>
 );
};

export default Todo;
