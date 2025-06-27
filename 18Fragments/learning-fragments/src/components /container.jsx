import styles from "./container.module.css";

const Container = (props) => {
  return (
    <>
      <div className={styles.cont}>{props.children}</div>
    </>
  );
};

export default Container;
