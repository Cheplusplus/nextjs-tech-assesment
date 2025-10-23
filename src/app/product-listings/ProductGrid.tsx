import styles from "./product-listings.module.css";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
}
const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className={styles.grid_container}>
      {products?.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </div>
  );
};

export default ProductGrid;
