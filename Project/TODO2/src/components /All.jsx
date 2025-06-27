import { Contxt } from "../store/contextTodo";
import { useContext, useState } from "react";
import TODO from "./TODO";

function All({ seeting }) {
  const contextObj = useContext(Contxt);
  const todoItems = contextObj.todoItem;

  // console.log("00000",todoItems)
  return (
    <>
      <div className="item-container">
        {todoItems.map((item) => (
          <TODO
            todoname={item.name}
            tododate={item.duedate}
            seeting={seeting}
          ></TODO>
        ))}
      </div>
    </>
  );
}
export default All;
