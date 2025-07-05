import { useDispatch } from "react-redux";
import { useRef } from "react";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();
  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        num: inputElement.current.value,
      },
    });
  inputElement.current.value = "";
  };
    const handleSub = () => {
      dispatch({
        type: "SUB",
        payload: {
          num: inputElement.current.value,
        },
      });
inputElement.current.value =""
    };
      const toggle = () => {
        dispatch({ type: "TOGGLE" });
      };
  return (
    <>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        {" "}
        <button type="button" class="btn btn-primary" onClick={handleIncrement}>
          +1
        </button>
        <button type="button" class="btn btn-success" onClick={handleDecrement}>
          -1
        </button>
        <button type="button" class="btn btn-success" onClick={toggle}>
         Priavacy toggle
        </button>
      </div>{" "}
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center control">
        {" "}
        <input type="text" ref={inputElement} placeholder="Enter The Number" />
        <button type="button" class="btn btn-info" onClick={handleAdd}>
          ADD
        </button>
        <button type="button" class="btn btn-danger" onClick={handleSub}>
          Subtract
        </button>
      </div>{" "}
    </>
  );
};

export default Controls;
