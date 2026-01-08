"use client";

import Image from "next/image";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }: any) {
    const { addToCart } = useCart();

    return (
        <div className="flex flex-col h-full text-black">
            <div className="bg-[#F3F0EE] rounded-2xl p-4 sm:p-6
                      flex items-center justify-center
                      h-[220px] sm:h-[260px] md:h-[300px]">
                <Image
                    src={product.image}
                    alt={product.title}
                    width={160}
                    height={200}
                    className="object-contain max-h-full"
                />
            </div>
            <h3 className="mt-4 text-sm sm:text-base font-semibold line-clamp-2">
                {product.title}
            </h3>
            <p className="font-bold mt-2 text-sm sm:text-base mb-4">
                ${product.price}
            </p>
            <button
                onClick={() => addToCart(product)}
                className="mt-auto 
                   border rounded-full
                   py-2 sm:py-2.5
                   text-xs sm:text-sm
                   hover:bg-black hover:text-white
                   transition cursor-pointer w-full"
            >
                Add to Cart
            </button>
        </div>
    );
}