"use client";

import { useCart } from "../context/CartContext";
import Image from "next/image";
import { FiTrash2, FiArrowLeft } from "react-icons/fi";
import Link from "next/link";

export default function CartPage() {
    const { cart, removeFromCart } = useCart();

    const total = cart.reduce(
        (sum: number, item: any) => sum + item.price,
        0
    );

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 text-black">

            {/* HEADER ROW */}
            <div className="flex items-center gap-4 mb-6 sm:mb-8">
                <Link
                    href="/"
                    className="p-2 rounded-full hover:bg-gray-100 transition cursor-pointer"
                >
                    <FiArrowLeft size={20} />
                </Link>

                <h1 className="text-xl sm:text-2xl font-bold">
                    Your Cart
                </h1>
            </div>

            {/* EMPTY STATE */}
            {cart.length === 0 ? (
                <p className="text-gray-500 ml-12 sm:ml-14">
                    Your cart is empty.
                </p>
                ) : (
                <>
            {/* CART ITEMS */}
                    <div className="space-y-4">
                        {cart.map((item: any) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between gap-4 border-b py-4">
                                <div className="flex items-center gap-4">
                                    <Image
                                        src={item.image}
                                        width={64}
                                        height={64}
                                        alt={item.title}
                                        className="object-contain"
                                    />

                                    <div className="max-w-[180px] sm:max-w-xs">
                                        <p className="font-semibold text-sm sm:text-base line-clamp-2">
                                            {item.title}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            ${item.price}
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-red-500 hover:text-red-700 cursor-pointer transition"
                                    title="Remove item"
                                >
                                    <FiTrash2 size={18} />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* TOTAL */}
                    <div className="flex justify-end mt-6 sm:mt-8">
                        <div className="bg-gray-100 px-5 sm:px-6 py-4 rounded-lg w-full sm:w-80">
                            <div className="flex justify-between text-base sm:text-lg font-semibold">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
