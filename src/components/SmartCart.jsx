import { useState } from "react";
import styles from "./products.module.css";
import { MdDelete } from "react-icons/md";
import Products from "./Products";
import ProductsInCard from "./ProductsInCard";
function SmartCart() {
  const [cardItems, setCardItems] = useState([]);

  const addProduct = (elem) => {
    if (cardItems.includes(elem)) return;
    setCardItems([...cardItems, elem]);
  };

  const deleteProduct = (product) => {
    setCardItems(cardItems.filter((elem) => elem !== product));
  };

  const clearCard = () => {
    setCardItems([]);
  };

  return (
    <div className={styles.selectProducts}>
      <div className={styles.selectProductsContainer}>
        <Products cardItems={cardItems} addProduct={addProduct} />
        <ProductsInCard cardItems={cardItems} deleteProduct={deleteProduct} />

        {cardItems.length > 1 && (
          <button
            onClick={clearCard}
            style={{ width: "120px" }}
            className={styles.deleteBtn}
          >
            Clear All
          </button>
        )}
      </div>
    </div>
  );
}
export default SmartCart;
