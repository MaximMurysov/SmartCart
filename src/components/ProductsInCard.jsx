import { MdDelete } from "react-icons/md";
import styles from "./products.module.css";

function ProductsInCard({ cardItems, deleteProduct }) {
  return (
    <div>
      {cardItems.map((elem) => (
        <div className={styles.delete}>
          <p>{elem.title}</p>
          <p>{elem.price} $</p>
          <p>{elem.quantity}</p>
          <button
            onClick={() => deleteProduct(elem.id)}
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
