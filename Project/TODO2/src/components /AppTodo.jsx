import { useState } from "react";

function AppTodo({ onAdding }) {
  let [initName, setName] = useState();
  let [initDate, setDate] = useState();
  let onEnteringName = (event) => {
    setName(event.target.value);
  };
  let onEnteringDate = (event) => {
    setDate(event.target.value);
  };
  let passTheValue  = (event)=>{
    onAdding(initName, initDate, event);
    setName(" ")
    setDate(" ")
  }
  return (
    <div class="container item-container">
      <div class="row myRow">
        <div class="col-6 col-md-4">
          <input
            type="text"
            placeholder="Enter The ToDo Work"
            onChange={onEnteringName}
          ></input>
        </div>
        <div class="col-6 col-md-4">
          <input type="date" onChange={onEnteringDate}></input>
        </div>
        <div class="col-4 col-md-2">
          <button
            type="button"
            class="btn btn-success"
            onClick={passTheValue}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AppTodo;
