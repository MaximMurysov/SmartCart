import styles from "./products.module.css";

function ButtonClear({ cardItems, clearCard }) {
  return (
    <>
      {cardItems.length > 1 && (
        <button
          onClick={clearCard}
          style={{ width: "120px" }}
          className={styles.deleteBtn}
        >
          Clear All
        </button>
      )}
    </>
  );
}

export default ButtonClear;
