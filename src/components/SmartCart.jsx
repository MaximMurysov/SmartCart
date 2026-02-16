import { useState, useEffect } from "react";
import styles from "./products.module.css";
import Products from "./Products";
import ProductsInCard from "./ProductsInCard";
import ButtonClear from "./ButtonClear";
function SmartCart() {
  const [cardItems, setCardItems] = useState(() => {
    const saved = localStorage.getItem("card");
    if (!saved) return [];
    try {
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }, []);
  const [isDark, setIsDark] = useState(false);

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

  useEffect(() => {
    localStorage.setItem("card", JSON.stringify(cardItems));
  }, [cardItems]);

  return (
    <div className={styles.selectProducts}>
      <div
        className={`${!isDark ? styles.selectProductsContainer : styles.selectProductsContainerDark}`}
      >
        <Products
          cardItems={cardItems}
          addProduct={addProduct}
          isDark={isDark}
          setIsDark={setIsDark}
        />
        <ProductsInCard cardItems={cardItems} deleteProduct={deleteProduct} />
        <ButtonClear cardItems={cardItems} clearCard={clearCard} />
      </div>
    </div>
  );
}
export default SmartCart;
