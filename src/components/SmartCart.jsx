import { useState, useEffect } from "react";
import styles from "./products.module.css";
import Products from "./Products";
import ProductsInCard from "./ProductsInCard";
import ButtonClear from "./ButtonClear";
import { products } from "./main";
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
    const existing = cardItems.find((item) => item.id === elem.id);

    if (existing) {
      setCardItems(
        cardItems.map((item) =>
          item.id === elem.id ? { ...item, quantity: item.quantity + 1 } : item,
        ),
      );
    } else {
      const newProduct = {
        id: elem.id,
        title: elem.title,
        price: elem.price,
        quantity: 1,
      };

      setCardItems([...cardItems, newProduct]);
    }
  };
  const deleteProduct = (id) => {
    const existing = cardItems.find((item) => item.id === id);
    if (existing.quantity > 1) {
      setCardItems(
        cardItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        ),
      );
    } else {
      setCardItems(cardItems.filter((item) => item.id !== id));
    }
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
