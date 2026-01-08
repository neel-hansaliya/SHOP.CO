import Hero from "./components/Hero";
import ProductSection from "./components/ProductSection";
import { getAllProducts } from "./api/fakestore";

export default async function HomePage() {
  const products = await getAllProducts();

  return (
    <>
      <Hero />
      <ProductSection title="NEW ARRIVALS" products={products.slice(0, 4)} viewAll />
      <hr className="max-w-7xl mx-auto border-black" />
      <ProductSection title="TOP SELLING" products={products.slice(4, 8)} viewAll />
    </>
  );
}
