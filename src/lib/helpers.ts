"use client";

export function getCart(): Cart {
  try {
    const cartString = localStorage.getItem("cart");
    if (!cartString) return {}; // no cart yet
    const cart = JSON.parse(cartString);

    // Ensure it’s actually an object and not something invalid
    if (typeof cart === "object" && cart !== null) {
      return cart as Cart;
    }

    return {}; // fallback if somehow corrupted
  } catch (error) {
    console.error("Error reading cart from localStorage:", error);
    return {};
  }
}

export function updateCartItem(productId: string, action: CartAction) {
  if (!productId) return;

  // Get current cart or initialize
  const cartString = localStorage.getItem("cart");
  let cart: Cart = cartString ? JSON.parse(cartString) : {};

  // Initialize item if it doesn't exist
  if (!cart[productId]) {
    cart[productId] = 0;
  }

  // Perform the action safely
  if (action === "increment") {
    cart[productId] += 1;
  } else if (action === "decrement") {
    cart[productId] = Math.max(0, cart[productId] - 1);
    // Optionally remove item if it reaches 0
    if (cart[productId] === 0) {
      delete cart[productId];
    }
  }

  // Save back to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
}
