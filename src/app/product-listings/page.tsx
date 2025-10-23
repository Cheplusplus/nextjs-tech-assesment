import ProductGrid from "./ProductGrid";

const fetchProducts = async () => {
  return fetch("https://fakestoreapi.com/products")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data: Product[]) => {
      return data;
    })
    .catch((error) => {
      console.error("Failed to fetch products:", error);
      // TODO: Add toast notification here.
      return [];
    });
};

const page = async () => {
  const products = await fetchProducts();
  return (
    <div>
      <ProductGrid products={products} />
    </div>
  );
};

export default page;
