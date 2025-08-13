import { useState } from "react";

export default function useCart() {
  const [cart, setCart] = useState({}); // { productId: quantity }

  const addItem = (id, qty = 1) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + qty }));
  };

  const removeItem = (id, qty = 1) => {
    setCart((prev) => {
      const newQty = (prev[id] || 0) - qty;
      if (newQty <= 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: newQty };
    });
  };

  const setQuantity = (id, qty) => {
    if (qty <= 0) {
      const { [id]: _, ...rest } = cart;
      setCart(rest);
    } else {
      setCart((prev) => ({ ...prev, [id]: qty }));
    }
  };

  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  return { cart, addItem, removeItem, setQuantity, totalItems };
}
