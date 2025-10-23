import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold mb-4 text-gray-800">Next.js Product Listings & Shopping Cart</h1>
        <p className="text-lg text-gray-600 mb-6">
          A modern e-commerce demo built with <strong>Next.js 13</strong>, <strong>Tailwind CSS</strong>, and <strong>ShadCN UI</strong> components. Features dynamic product pages, a responsive product grid, and a fully client-side shopping cart
          using localStorage.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/product-listings" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium">
            View Products
          </Link>
          <a href="https://fakestoreapi.com/" target="_blank" className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md font-medium">
            FakeStore API
          </a>
        </div>

        <section className="mt-12 text-left space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Project Highlights</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Responsive product grid with auto-adjusting columns</li>
            <li>Dynamic product detail pages with full information</li>
            <li>Shopping cart with increment/decrement and total calculation</li>
            <li>Persistent cart using localStorage</li>
            <li>Styled with Tailwind CSS and Roboto font</li>
          </ul>
        </section>

        <section className="mt-8 text-left">
          <p className="text-gray-500">This project is a demonstration of modern Next.js features including server components, client interactivity, and dynamic routing. Perfect for learning full-stack React concepts.</p>
        </section>
      </div>
    </div>
  );
}
