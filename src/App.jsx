import React, { useState } from "react";
import { PRODUCTS } from "./data/products";
import ProductCard from "./components/ProductCard";
import CartIcon from "./components/CartIcon";
import useCart from "./hooks/useCart";
import "./styles.css";

export default function App() {
  const { cart, updateCart, totalItems } = useCart();

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
