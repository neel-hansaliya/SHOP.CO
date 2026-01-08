'use client';

import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import ProductSection from "./components/ProductSection";
import Box from "../app/components/Box";
import { getAllProducts } from "./api/fakestore";
import FeedBack from "./components/FeedBack";

export default function HomePage() {
  // Initialize state for data and loading
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch data when the component mounts (in the browser)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Show a loading indicator (or empty div) while fetching
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p>Loading...</p>
      </div>
    );
  }

  // 4. Render the page once data is available
  return (
    <>
      <Hero />
      <ProductSection title="NEW ARRIVALS" products={products.slice(0, 4)} viewAll />
      <hr className="max-w-7xl mx-auto border-black" />
      <ProductSection title="TOP SELLING" products={products.slice(4, 8)} viewAll />
      <Box />
      <FeedBack />
    </>
  );
}