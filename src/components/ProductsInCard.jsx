import { MdDelete } from "react-icons/md";
import styles from "./products.module.css";
function ProductsInCard({ cardItems, deleteProduct }) {
  return (
    <div>
      {cardItems.map((elem) => (
        <div className={styles.delete}>
          <p>{elem}</p>
          <button
            onClick={() => deleteProduct(elem)}
            className={styles.deleteBtn}
          >
            <MdDelete />
          </button>
        </div>
      ))}
    </div>
  );
}
export default ProductsInCard;
