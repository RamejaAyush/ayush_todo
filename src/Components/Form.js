import "../styles/Form.css";

const Form = ({ inputText, setInputText, todos, setTodos }) => {
 const inputTextHandler = (e) => {
  setInputText(e.target.value);
 };
 const submitTodohandler = (e) => {
  e.preventDefault();
  setTodos([
   ...todos,
   { text: inputText, completed: false, id: Math.random() * 100 },
  ]);
  setInputText("");
 };

 const statusHandler = (e) => {
  console.log(e.target.value);
 };

 return (
  <div className="form-container">
   <form>
    <div className="input-sub">
     <input
      onChange={inputTextHandler}
      type="text"
      className="todo-input"
      placeholder="Add a Task"
      value={inputText}
     />
     <button className="todo-button" type="submit" onClick={submitTodohandler}>
      Add
     </button>
    </div>
    <div className="select">
     <select onChange={statusHandler} name="todos" className="filter-todo">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="uncompleted">Uncompleted</option>
     </select>
    </div>
   </form>
  </div>
 );
};

export default Form;
