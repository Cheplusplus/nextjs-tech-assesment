import { Button } from "@/components/ui/button";
import Image from "next/image";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

async function getProductById(id: string | number): Promise<Product> {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch product with id ${id}`);
    }

    // Try parsing JSON
    let product: Product;
    try {
      console.log(res);
      product = await res.json();
    } catch (err) {
      console.error("Failed to parse JSON", err);
      throw new Error("Empty or invalid response from API");
    }

    return product;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

interface ProductPageProps {
  params: { id: string } | Promise<any>;
}

const page = async ({ params }: ProductPageProps) => {
  console.log(params);
  const { id } = await params;

  const product = await getProductById(id);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Product Image */}
        <div className="flex justify-center">
          <Image src={product.image} alt={product.title} width={400} height={400} className="rounded-lg shadow-lg" />
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-700 text-lg">{product.description}</p>
          <p className="text-xl font-semibold">${product.price}</p>
          <p className="text-gray-500 capitalize">{product.category}</p>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <span className="font-medium">Rating:</span>
            <span>{product.rating.rate} / 5</span>
            <span className="text-gray-500">({product.rating.count} reviews)</span>
          </div>

          {/* Add to Cart Button */}
          <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default page;
