import { useState } from "react";
import { RiApps2AddFill } from "react-icons/ri";

function AppTodo({ onAdding }) {
  let [initName, setName] = useState();
  let [initDate, setDate] = useState();
  let onEnteringName = (event) => {
    setName(event.target.value);
  };
  let onEnteringDate = (event) => {
    setDate(event.target.value);
  };
  let passTheValue = (event) => {
    event.preventDefault();
    onAdding(initName, initDate, event);
    setName(" ");
    setDate(" ");
  };
  return (
    <div class="container item-container">
      <form class="row myRow" 
      onSubmit={passTheValue}>
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
          <button class="btn btn-success">
            <RiApps2AddFill />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AppTodo;
