import { useState } from "react";
import { products } from "./main";
import styles from "./products.module.css";
function Products({ cardItems, addProduct, isDark, setIsDark }) {
  return (
    <div className={styles.productsContainer}>
      <input
        type="checkbox"
        className={styles.toggleTheme}
        checked={isDark}
        onChange={() => setIsDark(!isDark)}
      />
      {products.map((elem) => (
        <div key={elem} className={`${styles.productItem} `}>
          <p
            className={`${styles.elemItem} ${cardItems.includes(elem) ? styles.inCard : ""}`}
            onClick={() => addProduct(elem)}
          >
            {elem}
          </p>
        </div>
      ))}
    </div>
  );
}
export default Products;
