'use client';
import Image from "next/image";
import img from "../assets/style.jpg";
import Link from "next/link";

export default function Hero() {
    return (
        <>
            {/* HERO SECTION */}
            <section className="bg-[#F4F1EF] overflow-hidden -mt-6 sm:-mt-10 lg:-mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 lg:py-10">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20 items-center">

                        {/* LEFT CONTENT */}
                        <div className="text-center md:text-left">
                            <h1
                                className="
                                    mt-6 sm:mt-0
                                    text-[28px]
                                    sm:text-[40px]
                                    md:text-[48px]
                                    lg:text-[64px]
                                    font-black
                                    leading-tight
                                    text-black">
                                FIND CLOTHES <br />
                                THAT MATCHES <br />
                                YOUR STYLE
                            </h1>

                            <p className="text-gray-600 mt-4 sm:mt-6 max-w-md mx-auto md:mx-0 text-sm sm:text-base">
                                Browse through our diverse range of meticulously crafted garments,
                                designed to bring out your individuality and cater to your sense of style.
                            </p>

                            <Link href="/products">
                                <button
                                    className="
                                        mt-6 sm:mt-8
                                        w-full sm:w-auto
                                        bg-black hover:bg-gray-800
                                        text-white
                                        px-8 sm:px-10
                                        py-2.5 sm:py-3
                                        rounded-full
                                        cursor-pointer
                                        text-sm sm:text-base
                                        font-medium
                                        transition">
                                    Shop Now
                                </button>
                            </Link>

                            {/* STATS */}
                            <div
                                className="
                                    grid grid-cols-2
                                    sm:flex sm:flex-row
                                    justify-center md:justify-start
                                    gap-6 sm:gap-10
                                    mt-6 sm:mt-8 lg:mt-12
                                    text-black">

                                <div className="text-center">
                                    <p className="text-2xl sm:text-4xl font-bold">200+</p>
                                    <p className="text-sm text-gray-500 mt-1">
                                        International Brands
                                    </p>
                                </div>

                                <div className="text-center sm:border-l sm:border-gray-300 sm:pl-10">
                                    <p className="text-2xl sm:text-4xl font-bold">2,000+</p>
                                    <p className="text-sm text-gray-500 mt-1">
                                        High-Quality Products
                                    </p>
                                </div>

                                {/* (mobile: center in second row) */}
                                <div className="col-span-2 justify-self-center sm:border-l sm:border-gray-300 sm:pl-10 text-center">
                                    <p className="text-2xl sm:text-4xl font-bold">30,000+</p>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Happy Customers
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* DESKTOP / TABLET IMAGE */}
                        <div className="relative hidden md:flex justify-center lg:justify-end">
                            <Image
                                src={img}
                                alt="Fashion Models"
                                width={600}
                                height={600}
                                priority
                                className="object-contain scale-90 md:scale-95 lg:scale-100"
                            />
                        </div>
                    </div>

                    {/* MOBILE IMAGE (JUST ABOVE BRAND STRIP) */}
                    <div className="md:hidden mt-8 flex justify-center">
                        <Image
                            src={img}
                            alt="Fashion Models"
                            width={300}
                            height={300}
                            className="object-contain w-[220px]"
                        />
                    </div>
                </div>
            </section>

            {/* BRAND STRIP */}
            <section className="bg-black -mt-6 sm:-mt-8 lg:-mt-10 py-6 sm:py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div
                        className="
                            flex flex-wrap
                            justify-center sm:justify-between
                            gap-6 sm:gap-10
                            items-center
                            text-white
                            text-base sm:text-xl md:text-2xl
                            font-semibold
                            tracking-wide">

                        <span className="font-serif">VERSACE</span>
                        <span>ZARA</span>
                        <span className="font-serif">GUCCI</span>
                        <span className="font-black">PRADA</span>
                        <span className="font-light">Calvin Klein</span>
                    </div>
                </div>
            </section>
        </>
    );
}
