// "use client";
// import ProductCard from "../components/ProductCard";
// import { getAllProducts } from "../api/fakestore";
// import Link from "next/link";
// import { FiArrowLeft } from "react-icons/fi";

// export default async function ProductsPage() {
//     const products = await getAllProducts();

//     return (
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 text-black">

//             {/* BACK + TITLE ROW */}
//             <div className="flex items-center gap-3 mb-6 sm:mb-8">
//                 <Link
//                     href="/"
//                     className="p-2 rounded-full hover:bg-gray-100 transition cursor-pointer"
//                 >
//                     <FiArrowLeft size={18} />
//                 </Link>

//                 <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black">
//                     All Products
//                 </h1>
//             </div>

//             {/* PRODUCTS GRID */}
//             <div
//                 className="
//                         grid grid-cols-2
//                         sm:grid-cols-2
//                         md:grid-cols-3
//                         lg:grid-cols-4
//                         gap-4 sm:gap-6 lg:gap-8">
//                 {products.map((product: any) => (
//                     <ProductCard key={product.id} product={product} />
//                 ))}
//             </div>
//         </div>
//     );
// }
"use client"; // 1. This marks the file as a Client Component

import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getAllProducts } from "../api/fakestore";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export default function ProductsPage() {
    // 2. Use state to store data instead of fetching directly in the component body
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    // 3. Fetch data when the component mounts
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getAllProducts();
                setProducts(data);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // 4. Show a loading state while fetching
    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[50vh]">
                <p className="text-xl font-semibold">Loading Products...</p>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 text-black">
            {/* BACK + TITLE ROW */}
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <Link
                    href="/"
                    className="p-2 rounded-full hover:bg-gray-100 transition cursor-pointer"
                >
                    <FiArrowLeft size={18} />
                </Link>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black">
                    All Products
                </h1>
            </div>

            {/* PRODUCTS GRID */}
            <div className="
                    grid grid-cols-2
                    sm:grid-cols-2
                    md:grid-cols-3
                    lg:grid-cols-4
                    gap-4 sm:gap-6 lg:gap-8">
                {products.map((product: any) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}