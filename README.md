# Next.js Product Listings & Shopping Cart

A modern, responsive e-commerce product listing application built with **Next.js 13**, **Tailwind CSS**, and **ShadCN UI components**. This project demonstrates dynamic routing, product detail pages, and a fully functional client-side shopping cart stored in localStorage.

Time Spent: 5 hours
Trade-offs: Styling for functionality.
AI assistance used when blocked.

Vercel Link:

## Features

- **Product Listings Page**

  - Fetches products from [FakeStore API](https://fakestoreapi.com/).
  - Responsive grid layout that automatically adjusts column count based on screen width.
  - Card-based design with image, title, price, and category.

- **Single Product Page**

  - Dynamic routes (`/products/[id]`).
  - Displays full product details: image, title, description, price, category, and rating.
  - Add-to-cart button with interactive client-side functionality.

- **Shopping Cart**

  - Stored in **localStorage**, persists across page reloads.
  - Increment and decrement product quantities.
  - Prevents negative quantities.
  - Calculates total price automatically.

- **UI & Styling**
  - Tailwind CSS for rapid styling and responsive layouts.
  - ShadCN components for buttons, hover cards, and interactive UI elements.
  - Roboto font for clean typography.

### Running Locally

```bash
npm run dev
```

Open http://localhost:3000

### Technologies Used

Next.js (App Router) – Server-side rendering and client-side interactivity.

Tailwind CSS – Utility-first styling framework.

ShadCN UI Components – Accessible and composable React components.

TypeScript – Strongly typed codebase.

localStorage – Persisting shopping cart data on the client.

FakeStore API – Dummy product data for demonstration.

## Features in Detail

### Product Listing

Responsive grid layout with auto-fill columns.

Card displays product image, title, price, and category.

Clicking a card navigates to the product detail page.

### Product Page

Displays all product details fetched from API.

Shows image, title, description, price, category, and rating.

“Add to Cart” button adds the product to the localStorage cart.

### Shopping Cart

Increment/decrement product quantities.

Auto-calculates total price.

Prevents negative quantities.

Fully reactive using React state.

License

MIT License © 2025 Che Fidel Overmeyer
