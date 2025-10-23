import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import styles from "./product-listings.module.css";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import AddToCartButton from "./CardButtons";

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
      <div className={styles.card_buttons}>
        <HoverCard>
          <HoverCardTrigger>
            <Button variant="outline" size="default">
              More Details
            </Button>
          </HoverCardTrigger>
          <HoverCardContent sideOffset={-300} align="start">
            <div className={styles.hover_card}>{product.description}</div>
          </HoverCardContent>
        </HoverCard>
        <AddToCartButton productId={product.id} />
      </div>
    </div>
  );
};

export default ProductCard;
