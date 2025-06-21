import { useState } from "react";
import TODO from "./TODO";


function All({ todoItems ,seeting}) {


  console.log("00000",todoItems)
  return (
    <>
      <div className="item-container">
        {todoItems.map((item) => (
          <TODO todoname={item.name} tododate={item.duedate} seeting={seeting}></TODO>
        ))}
      </div>
    </>
  );
   
}
export default All;