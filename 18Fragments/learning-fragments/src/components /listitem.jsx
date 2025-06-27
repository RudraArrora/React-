import styles from "./listitem.module.css";
console.log(styles);
function Item(props) {
  return (
    <>
      <li className={`list-group-item kg-item ${props.bought && "active"}`}>
        <span className={styles["kg-span"]}>{props.foodItems}</span>
        <button
          className={`${styles.butt} btn btn-info`}
          onClick={props.itemHandler}
        >
          Buy
        </button>
      </li>
    </>
  );
}

export default Item;
