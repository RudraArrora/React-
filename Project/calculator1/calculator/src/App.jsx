import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./components /Display";
import ButtonCont from "./components /ButtonCont";
import  styles  from "./App.module.css";

function App() {
  return (
    <>
      <div id="calculator" className={styles.calculator}>
       <Display></Display>
   <ButtonCont></ButtonCont>
      </div>
    </>
  );
}

export default App;
