import styles from "./Display.module.css";
const Display = ({ activeState }) => {
  return (
    <>
      <input
        id="display"
        type="text"
        className={styles.display}
        value={activeState}
        readOnly
      ></input>
    </>
  );
};

export default Display;
