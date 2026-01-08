"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";
import { FiSearch, FiShoppingCart, FiUser, FiMenu } from "react-icons/fi";
import { useState } from "react";

export default function Header() {
    const { cart } = useCart();
    const [showBar, setShowBar] = useState(true);
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            {/* TOP ANNOUNCEMENT BAR */}
            {showBar && (
                <div className="bg-black text-white text-xs py-2 relative text-center px-4">
                    <span>
                        Sign up and get 20% off your first order{" "}
                        <Link href="/login" className="underline font-medium">
                            Sign Up Now
                        </Link>
                    </span>

                    <button
                        onClick={() => setShowBar(false)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-sm cursor-pointer"
                    >
                        ✕
                    </button>
                </div>
            )}

            {/* MAIN HEADER */}
            <header className="bg-white text-black border-b sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

                    {/* LOGO */}
                    <Link href="/" className="text-xl sm:text-2xl font-black tracking-tight">
                        SHOP.CO
                    </Link>

                    {/* DESKTOP NAV */}
                    <nav className="hidden lg:flex gap-6 text-sm font-medium text-gray-700">
                        <Link href="/products" className="hover:text-black">Shop</Link>
                        <Link href="/products" className="hover:text-black">On Sale</Link>
                        <Link href="/products" className="hover:text-black">New Arrivals</Link>
                        <Link href="/products" className="hover:text-black">Brands</Link>
                    </nav>

                    {/* DESKTOP SEARCH */}
                    <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 w-72">
                        <FiSearch className="text-gray-400 text-sm" />
                        <input
                            placeholder="Search for products..."
                            className="bg-transparent outline-none ml-2 text-sm w-full"
                        />
                    </div>

                    {/* ICONS */}
                    <div className="flex items-center gap-4 sm:gap-5">
                        {/* CART */}
                        <Link href="/cart" className="relative cursor-pointer">
                            <FiShoppingCart className="text-xl" />
                            {cart.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                    {cart.length}
                                </span>
                            )}
                        </Link>

                        {/* PROFILE */}
                        <Link href="/login" className="cursor-pointer">
                            <FiUser className="text-xl" />
                        </Link>

                        {/* MOBILE MENU BUTTON */}
                        <button
                            className="lg:hidden cursor-pointer"
                            onClick={() => setOpenMenu(!openMenu)}
                        >
                            <FiMenu size={22} />
                        </button>
                    </div>
                </div>

                {/* MOBILE MENU */}
                {openMenu && (
                    <div className="lg:hidden border-t bg-white">
                        <nav className="flex flex-col px-6 py-4 gap-4 text-sm font-medium text-gray-700">
                            <Link href="/products" onClick={() => setOpenMenu(false)}>Shop</Link>
                            <Link href="/products" onClick={() => setOpenMenu(false)}>On Sale</Link>
                            <Link href="/products" onClick={() => setOpenMenu(false)}>New Arrivals</Link>
                            <Link href="/products" onClick={() => setOpenMenu(false)}>Brands</Link>

                            {/* MOBILE SEARCH */}
                            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 mt-2">
                                <FiSearch className="text-gray-400 text-sm" />
                                <input
                                    placeholder="Search..."
                                    className="bg-transparent outline-none ml-2 text-sm w-full"
                                />
                            </div>
                        </nav>
                    </div>
                )}
            </header>
        </>
    );
}
