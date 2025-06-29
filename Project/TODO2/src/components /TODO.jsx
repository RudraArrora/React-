import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { Contxt } from "../store/contextTodo";
function TODO({ todoname, tododate }) {
  const contextObj = useContext(Contxt);
  const seeting = contextObj.seeting;
  return (
    <div className="container ">
      <div class="row myRow">
        <div class="col-6 col-md-4">{todoname}</div>
        <div class="col-6 col-md-4">{tododate}</div>
        <div class="col-4 col-md-2">
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => seeting(todoname)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TODO;
