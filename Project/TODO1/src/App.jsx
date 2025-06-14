import AppName from "./components /AppName";
import AppTodo from "./components /AppTodo";
import TODO1 from "./components /TODO1";
import TODO2 from "./components /TODO2";
import "./App.css";
function App() {
  return (
    <center class="todo-container">
      <AppName />
      <AppTodo></AppTodo>
      <div className="item-container">
        <TODO1></TODO1>
        <TODO2></TODO2>
      </div>
    </center>
  );
}

export default App;
