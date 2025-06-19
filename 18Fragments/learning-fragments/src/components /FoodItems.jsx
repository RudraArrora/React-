import Item from "./listitem";

function Fooditem(props) {
  return (
    <>
      <ul className="list-group">
        {props.itemsnew.map((item) => (
          <Item key={item} foodItems={item} itemHandler={()=>console.log(`${item} bought *`)}></Item>
        ))}
      </ul>
    </>
  );
}

export default Fooditem;
