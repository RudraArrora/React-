import "bootstrap/dist/css/bootstrap.min.css";
import Fooditem from "./components /FoodItems";
import Error from "./components /Error";
import Container from "./components /container";
import "./App.css";

function App() {
  let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad"];

  return (
    <>
      <Container>
        <h1 className="kg-span">Healthy Foods</h1>
        <Error itemsnew={foodItems}></Error>
        <Fooditem itemsnew={foodItems}></Fooditem>
      </Container>
      <Container>
        <p>Above are the healthy food all should eat, It is important for eating good food , good food means good gut health , good glowing skin  </p>
      </Container>
    </>
  );
}

export default App;
