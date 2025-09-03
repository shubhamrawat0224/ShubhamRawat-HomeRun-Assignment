import React, { useState } from "react";
import "../styles.css";
export default function ProductCard({ product, updateCart }) {
  const [qty, setQty] = useState(0);
  const MAX_QTY = 20;

  const handleAdd = () => {
    setQty(1);
    updateCart(product.id, 1);
  };

  const inc = (val) => {
    const newQty = Math.min(MAX_QTY, qty + val);
    setQty(newQty);
    updateCart(product.id, newQty);
  };

  const dec = (val) => {
    const newQty = Math.max(0, qty - val);
    setQty(newQty);
    updateCart(product.id, newQty);
  };

  const isMax = qty >= MAX_QTY;

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-img" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-mrp">
        MRP: <span className="strikethrough">₹{product.mrp}</span>
      </p>
      <p className="product-price">₹{product.price}</p>

      {qty === 0 ? (
        <button className="add-btn" onClick={handleAdd}>
          Add
        </button>
      ) : (
        <div className="qty-controls">
          <button onClick={() => dec(5)} disabled={qty === 0}>
            {"<<"}
          </button>
          <button onClick={() => dec(1)} disabled={qty === 0}>
            -
          </button>
          <span>{qty}</span>
          <button onClick={() => inc(1)} disabled={isMax}>
            +
          </button>
          <button onClick={() => inc(5)} disabled={isMax}>
            {">>"}
          </button>
        </div>
      )}

      {isMax && (
        <p className="error-msg">
          Maximum 20 allowed per order. Please place another order if required.
        </p>
      )}
    </div>
  );
}
