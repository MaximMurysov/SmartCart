import { products } from "./main";
import styles from "./products.module.css";
function Products({ cardItems, addProduct }) {
  return (
    <>
      <div className={styles.productsContainer}>
        {products.map((elem, index) => (
          <div key={index} className={`${styles.productItem} `}>
            <p
              className={`${styles.elemItem} ${cardItems.includes(elem) ? styles.inCard : ""}`}
              onClick={() => addProduct(elem)}
            >
              {elem}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
export default Products;
