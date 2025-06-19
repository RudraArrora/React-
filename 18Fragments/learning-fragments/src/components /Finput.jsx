import styles from "./Finput.module.css"

const Finput = ({ handleonChange }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter Food Item Here "
        className={styles.fooditem}
        onChange={handleonChange}
      ></input>
    </>
  );
};
export default Finput;