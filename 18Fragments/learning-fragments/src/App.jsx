import "bootstrap/dist/css/bootstrap.min.css";
import Fooditem from "./components /FoodItems";
import Error from "./components /Error";
import "./App.css";

function App() {
  let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad"];

  return (
    <>
      <h1 className="kg-span">Healthy Foods</h1>
      <Error itemsnew={foodItems}></Error>
      <Fooditem itemsnew={foodItems}></Fooditem>
    </>
  );
}

export default App;
