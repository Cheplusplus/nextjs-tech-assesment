import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import styles from "./product-listings.module.css";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import AddToCartButton from "./CardButtons";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className={styles.product_card}>
      <Image className={styles.product_image} src={product.image} alt={product.title} width={100} height={20} priority />

      <h2 className={styles.product_title_text}>{product.title}</h2>
      <p className={styles.product_category_text}>Category: {product.category}</p>
      <p className={styles.product_price_text}>Price: R {product.price}</p>

      <AddToCartButton productId={product.id} productDescription={product.description} />
    </div>
  );
};

export default ProductCard;
