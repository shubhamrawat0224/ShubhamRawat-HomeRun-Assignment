import React from "react";
import "../styles.css";
export default function CartIcon({ count }) {
  return (
    <div className="cart-icon">
      🛒
      {count > 0 && <span className="cart-count">{count}</span>}
    </div>
  );
}
