"use client";

import { getCart } from "@/lib/helpers";
import QuantitySelector from "./QuantitySelector";
import { useEffect, useState } from "react";
import styles from "./cart.module.css";

const CartItemList = () => {
  const [cart, setCart] = useState<Cart>({});
  useEffect(() => {
    const cart = getCart();
    setCart(cart);
  }, []);
  return (
    <div>
      {Object.entries(cart).map(([productId, quantity]) => (
        <div className={styles.cart_item_list} key={productId}>
          <p>Product ID: {productId}</p>
          <QuantitySelector productId={productId} quantity={quantity} setCart={setCart} />
        </div>
      ))}
    </div>
  );
};

export default CartItemList;
