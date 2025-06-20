import "bootstrap/dist/css/bootstrap.min.css";
import Fooditem from "./components /FoodItems";
import Error from "./components /Error";
import Container from "./components /container";
import Finput from "./components /Finput";
import "./App.css";
import { useState } from "react";

function App() {
  let [foodItems, Setfooditem] = useState(["Dal"
  , "Green Vegetables"
  , "Roti"]);
      const handleKeyDown = (event) => {
        if (event.key==='Enter'){
          let newfood = event.target.value;
          let newItems =[...foodItems,newfood];
          Setfooditem(newItems);
          console.log("************",newfood,"************")
        }
      };

  return (
    <>
      <Container>
        <h1 className="kg-span">Healthy Foods</h1>
        <Finput handleKeyDown={handleKeyDown}></Finput>
        <Error itemsnew={foodItems}></Error>
        <Fooditem itemsnew={foodItems}></Fooditem>
      </Container>
      {/* <Container>
        <p>Above are the healthy food all should eat, It is important for eating good food , good food means good gut health , good glowing skin  </p>
      </Container> */}
    </>
  );
}

export default App;
