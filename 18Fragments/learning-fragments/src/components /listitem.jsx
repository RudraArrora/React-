import styles from "./listitem.module.css"
  console.log(styles);
function Item(props) {
  return (
    <>
    
      <li className="list-group-item kg-item">
        <span className={styles["kg-span"]}>{props.foodItems}</span>
      </li>
    </>
  );
}

export default Item;
