import styles from "./AppName.module.css";
function AppName() {
  console.log(styles);
  return <h1 className={styles.head}>ToDo List</h1>;
}

export default AppName;
