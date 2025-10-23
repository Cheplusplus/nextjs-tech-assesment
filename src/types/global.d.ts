declare global {
  interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  }

  type Cart = Record<string, number>;
  type CartAction = "increment" | "decrement";
}

// If the file doesn't export anything else,
// add an empty export to ensure it's treated as a module.
export {};
