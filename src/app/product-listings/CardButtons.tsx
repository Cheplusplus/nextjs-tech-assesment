"use client";
import { Button } from "@/components/ui/button";

function updateCartItem(productId: number, action: CartAction) {
  if (!productId) return;

  // Get current cart or initialize
  const cartString = localStorage.getItem("cart");
  let cart: Cart = cartString ? JSON.parse(cartString) : {};

  // Perform the action
  if (action === "increment") {
    cart[productId] = (cart[productId] || 0) + 1;
  } else if (action === "decrement") {
    if (cart[productId]) {
      cart[productId] -= 1;
      if (cart[productId] <= 0) {
        delete cart[productId]; // remove item if quantity is 0
      }
    }
  }

  // Save back to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
}

interface AddToCartButtonProps {
  productId: number;
}

const AddToCartButton = ({ productId }: AddToCartButtonProps) => {
  return (
    <Button
      variant="outline"
      size="default"
      onClick={() => {
        updateCartItem(productId, "increment");
      }}
    >
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;
