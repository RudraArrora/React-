import AppName from "./components /AppName";
import AppTodo from "./components /AppTodo";
import All from "./components /All";
import { useState } from "react";
import "./App.css";

function App() {
  const inittodoItem = [
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
  let [todoItem, setState] = useState(inittodoItem);
  let onAdding = (itemName,itemDueDate,event) => {
    console.log(itemName,itemDueDate,"are Added to the list");
    const  newItem =  [...todoItem,{
      name:itemName,
      duedate:itemDueDate
    }
  ];
    setState(newItem);
  };

let seeting = (toname) => {
  console.log("Deleted Item Is" ,toname);
  const newFood = todoItem.filter(item =>item.name!==toname);
  setState(newFood);

};
  return (
    <center class="todo-container">
      <AppName />
      <AppTodo onAdding={onAdding}></AppTodo>
      <All todoItems={todoItem} onAdding={onAdding} seeting={seeting}></All>
    </center>
  );
}

export default App;
