import AppName from "./components /AppName";
import AppTodo from "./components /AppTodo";
import All from "./components /All";
import "./App.css";
function App() {
  const todoItem = [
    {
      name: "Milk",
      duedate: "10/02/2006",
    },
    {
      name: "Fal",
      duedate: "10/02/2007",
    },
    {
      name: "Fruits",
      duedate: "10/02/2008",
    },
  ];
  return (
    <center class="todo-container">
      <AppName />
      <AppTodo></AppTodo>
     <All todoItems={todoItem}></All>
    </center>
  );
}

export default App;
