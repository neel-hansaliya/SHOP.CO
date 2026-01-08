"use client";

import Image from "next/image";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }: any) {
    const { addToCart } = useCart();

    return (
        <div className="flex flex-col h-full text-black">

            {/* IMAGE */}
            <div className="bg-[#F3F0EE] rounded-2xl p-4 sm:p-6
                      flex items-center justify-center
                      h-[220px] sm:h-[260px] md:h-[300px]">
                <Image
                    src={product.image}
                    alt={product.title}
                    width={160}
                    height={200}
                    className="object-contain"
                />
            </div>

            {/* TITLE */}
            <h3 className="mt-4 text-sm sm:text-base font-semibold
                     min-h-[40px] sm:min-h-[48px]">
                {product.title}
            </h3>

            {/* PRICE */}
            <p className="font-bold mt-2 text-sm sm:text-base">
                ${product.price}
            </p>

            {/* BUTTON */}
            <button
                onClick={() => addToCart(product)}
                className="mt-auto sm:mt-5
                   border rounded-full
                   py-2 sm:py-2.5
                   text-xs sm:text-sm
                   hover:bg-black hover:text-white
                   transition cursor-pointer"
            >
                Add to Cart
            </button>
        </div>
    );
}
