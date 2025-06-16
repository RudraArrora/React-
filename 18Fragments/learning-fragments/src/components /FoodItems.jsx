import Item from "./listitem";

function Fooditem(props) {
  return (
    <>
      <ul className="list-group">
        {props.itemsnew.map((item) => (
          <Item key={item} foodItems={item}></Item>
        ))}
      </ul>
    </>
  );
}

export default Fooditem;
