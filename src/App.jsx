import React, { useState } from "react";
import { PRODUCTS } from "./data/products";
import ProductCard from "./components/ProductCard";
import CartIcon from "./components/CartIcon";
import "./styles.css";

export default function App() {
  const [cart, setCart] = useState({});

  const updateCart = (productId, qty) => {
    setCart((prev) => ({
      ...prev,
      [productId]: qty,
    }));
  };

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <div className="app-container">
      <CartIcon count={totalItems} />
      <div className="product-grid">
        {PRODUCTS.map((p) => (
          <ProductCard key={p.id} product={p} updateCart={updateCart} />
        ))}
      </div>
    </div>
  );
}
