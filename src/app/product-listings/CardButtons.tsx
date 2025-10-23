"use client";
import { Button } from "@/components/ui/button";
import { updateCartItem } from "@/lib/helpers";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import styles from "./product-listings.module.css";
import { useRouter } from "next/navigation";

interface AddToCartButtonProps {
  productId: string;
  productDescription: string;
}

const AddToCartButton = ({ productId, productDescription }: AddToCartButtonProps) => {
  const router = useRouter();
  return (
    <div className={styles.card_buttons}>
      <HoverCard>
        <HoverCardTrigger>
          <Button
            variant="outline"
            size="default"
            onClick={() => {
              router.push(`/single-product/${productId}`);
            }}
          >
            More Details
          </Button>
        </HoverCardTrigger>
        <HoverCardContent sideOffset={-300} align="start">
          <div className={styles.hover_card}>{productDescription}</div>
        </HoverCardContent>
      </HoverCard>
      <Button
        variant="outline"
        size="default"
        onClick={() => {
          updateCartItem(productId, "increment");
        }}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default AddToCartButton;
