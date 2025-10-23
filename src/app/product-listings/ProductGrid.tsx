"use client";
import { useEffect, useState } from "react";
import styles from "./product-listings.module.css";
import { Spinner } from "@/components/ui/spinner";
import ProductCard from "./ProductCard";

//Fetch the products here in a useEffect???

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Failed to fetch products:", error);
        // TODO: Add toast notification here.
      });
    setLoading(false);
  }, []);
  return (
    <div className={styles.grid_container}>
      {loading && <Spinner />}
      {products?.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </div>
  );
};

export default ProductGrid;
