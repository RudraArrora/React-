import AppName from "./components /AppName";
import AppTodo from "./components /AppTodo";
import All from "./components /All";
import { Contxt } from "./store/contextTodo";
import { useState, useReducer } from "react";
import "./App.css";

const todoReducer = (currentTodo, action) => {
  let newItem = currentTodo;
  if (action.type === "New_Item") {
    newItem = [
      ...currentTodo,
      {
        name: action.payload.itemName,
        duedate: action.payload.itemDueDate,
      },
    ];
  } else if (action.type === "Delete_Item") {
        const newItem = currentTodo.filter((item) => item.name !== action.payload.itemName);
     
  }
  return newItem;
};

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
  // let [todoItem, setState] = useState(inittodoItem);

  const [todoItem, dispatchToDo] = useReducer(todoReducer, []);
  let onAdding = (itemName, itemDueDate, event) => {
    const newItemReducer = {
      type: "New_Item",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchToDo(newItemReducer);
    //   const  newItem =  [...todoItem,{
    //     name:itemName,
    //     duedate:itemDueDate
    //   }
    // ];
    //   setState(newItem);
  };

  let seeting = (toname) => {


        const DeleteItemReducer = {
          type: "Delete_Item",
          payload: {
            itemName:toname,
          },
        };
        dispatchToDo(DeleteItemReducer);
  };

  return (
    <Contxt.Provider
      value={{ todoItem: todoItem, onAdding: onAdding, seeting: seeting }}
    >
      <center class="todo-container">
        <AppName />
        <AppTodo></AppTodo>
        <All></All>
      </center>
    </Contxt.Provider>
  );
}

export default App;
