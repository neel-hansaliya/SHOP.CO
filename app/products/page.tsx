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

import ProductCard from "../components/ProductCard";
import { getAllProducts } from "../api/fakestore";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export default async function ProductsPage() {
    let products = [];
    let error = null;

    try {
        products = await getAllProducts();
    } catch (e: any) {
        error = e.message;
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

            {/* ERROR STATE */}
            {error ? (
                <div className="bg-red-50 p-4 rounded-lg text-red-600">
                    <p>Failed to load products: {error}</p>
                    <p className="text-sm mt-2">Please try refreshing the page.</p>
                </div>
            ) : (
                /* PRODUCTS GRID */
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    {products.map((product: any) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
}