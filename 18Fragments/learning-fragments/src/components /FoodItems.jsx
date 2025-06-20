import { useState } from "react";
import Item from "./listitem";

function Fooditem(props) {

  let[activeState,setItems] = useState([" "]);

  let onBuy = (item , event ) => {
    let newItems = [...activeState , item];
    setItems(newItems)
  }
  
  return (
    <>
      <ul className="list-group">
        {props.itemsnew.map((item) => (
          <Item
            key={item}
            foodItems={item}
            bought = {activeState.includes(item)}
            itemHandler={(event) => {
             onBuy(item,event);
            } }
          ></Item>
        ))
    }
      </ul>
    </>
  );
}

export default Fooditem;
