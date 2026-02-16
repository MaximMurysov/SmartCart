import { products } from "./main";
import { useState } from "react";
import styles from "./products.module.css";
import { ImCheckboxChecked } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";
function SmartCart() {
  const [cardItems, setCardItems] = useState([]);

  const addProduct = (elem) => {
    if (cardItems.includes(elem)) return;
    setCardItems([...cardItems, elem]);
  };
  const deleteProduct = (product) => {
    setCardItems(cardItems.filter((elem) => elem !== product));
  };
  const isInCart = (elem) => cardItems.includes(elem);

  return (
    <div className={styles.selectProducts}>
      <div className={styles.selectProductsContainer}>
        <div className={styles.productsContainer}>
          {products.map((elem, index) => (
            <div key={index} className={styles.productItem}>
              <p className={styles.elemItem}>{elem}</p>
              <button
                className={styles.buttonDelete}
                onClick={() => addProduct(elem)}
              >
                {isInCart(elem) ? <RxCross2 /> : <ImCheckboxChecked />}
              </button>
            </div>
          ))}
        </div>
        <div>
          {cardItems.map((elem) => (
            <div className={styles.delete}>
              <p>{elem}</p>
              <button onClick={() => deleteProduct(elem)}>X</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default SmartCart;
