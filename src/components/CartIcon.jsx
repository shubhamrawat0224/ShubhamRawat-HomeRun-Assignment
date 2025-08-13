import React from "react";

export default function CartIcon({ count }) {
  return (
    <div className="cart-icon">
      🛒
      {count > 0 && <span className="cart-count">{count}</span>}
    </div>
  );
}
