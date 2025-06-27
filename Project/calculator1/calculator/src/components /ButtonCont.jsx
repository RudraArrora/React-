import styles from "./ButtonCont.module.css";
const ButtonCont = ({ onButtonPress }) => {
  const buttonName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div id="buttons" className={styles.displayButtons}>
        {buttonName.map((item) => (
          <button
            className={styles.displaybutton}
            onClick={() => onButtonPress(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
};
export default ButtonCont;
