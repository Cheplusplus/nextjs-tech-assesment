"use client";

import { Button } from "@/components/ui/button";
import { updateCartItem } from "@/lib/helpers";
import { Section } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import styles from "./cart.module.css";

interface QuantitySelectorProps {
  productId: string;
  quantity: number;
  setCart: Dispatch<SetStateAction<Cart>>;
}
const QuantitySelector = ({ productId, quantity, setCart }: QuantitySelectorProps) => {
  return (
    <div className={styles.quantity_selector}>
      <Button
        variant="outline"
        size="default"
        onClick={() => {
          updateCartItem(productId, "decrement");
          setCart((prev) => {
            const newQuantity = Math.max(0, (prev[productId] || 0) - 1);

            // If quantity is 0, remove it entirely
            if (newQuantity === 0) {
              const updatedCart = { ...prev };
              delete updatedCart[productId];
              return updatedCart;
            }

            // Otherwise, update normally
            return { ...prev, [productId]: newQuantity };
          });
        }}
      >
        -
      </Button>
      <p>Amount: {quantity}</p>
      <Button
        variant="outline"
        size="default"
        onClick={() => {
          updateCartItem(productId, "increment");
          setCart((prev) => {
            return { ...prev, [productId]: prev[Number(productId)] + 1 };
          });
        }}
      >
        +
      </Button>
    </div>
  );
};

export default QuantitySelector;
