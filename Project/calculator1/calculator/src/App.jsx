import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./components /Display";
import ButtonCont from "./components /ButtonCont";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  let [activeState, setItems] = useState([""]);

  let onButtonPress = (item) => {
    if (item === "C") {
    } else if (item === "=") {
      const result = eval(activeState);
      setItems(result);
    } else {
      let newItem = activeState + item;
      setItems(newItem);
    }
  };
  return (
    <>
      <div id="calculator" className={styles.calculator}>
        <Display activeState={activeState}></Display>
        <ButtonCont onButtonPress={onButtonPress}></ButtonCont>
      </div>
    </>
  );
}

export default App;
