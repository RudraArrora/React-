import { useRef } from "react";
import { RiApps2AddFill } from "react-icons/ri";
import { useContext } from "react";
import { Contxt } from "../store/contextTodo";
function AppTodo() {
  const contextObj = useContext(Contxt);
  const onAdding = contextObj.onAdding;

  const todoElement = useRef();
  const dueDateElement = useRef();

  let passTheValue = (event) => {
    event.preventDefault();
    const initName = todoElement.current.value;
    const initDate = dueDateElement.current.value;
    todoElement.current.value = 0;
    dueDateElement.current.value = 0;
    onAdding(initName, initDate, event);
  };
  return (
    <div class="container item-container">
      <form class="row myRow" onSubmit={passTheValue}>
        <div class="col-6 col-md-4">
          <input
            ref={todoElement}
            type="text"
            placeholder="Enter The ToDo Work"
          ></input>
        </div>
        <div class="col-6 col-md-4">
          <input type="date" ref={dueDateElement}></input>
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
