import styles from "./Finput.module.css"

const Finput = ({ handleKeyDown }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter Food Item Here "
        className={styles.fooditem}
        onKeyDown={handleKeyDown}
      ></input>
    </>
  );
};
export default Finput;