"use client";
import { useRef } from "react";

const customers = [
    {
        name: "Sarah M.",
        review:
            "I'm blown away by the quality and style of the clothes I received from Shop.co.",
    },
    {
        name: "Alex K.",
        review:
            "Finding clothes that align with my personal style used to be a challenge.",
    },
    {
        name: "James L.",
        review:
            "As someone who's always on the lookout for unique fashion pieces.",
    },
    {
        name: "Moon S.",
        review: "Amazing quality and fast delivery. Totally recommended!",
    },
    {
        name: "Riya P.",
        review: "Premium look and feel. Loved the collection.",
    },
    {
        name: "Daniel R.",
        review: "Very stylish clothes and reasonable prices.",
    },
    {
        name: "Aman T.",
        review: "Best online shopping experience so far.",
    },
];

export default function FeedBack() {
    const ref = useRef<HTMLDivElement>(null);

    const scroll = (dir: "left" | "right") => {
        ref.current?.scrollBy({
            left: dir === "left" ? -420 : 420,
            behavior: "smooth",
        });
    };

    return (
        <section className="pt-12 sm:pt-16 lg:pt-20 text-black">
            {/* HEADER */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 mb-8 sm:mb-12">

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center sm:text-left">
                    OUR HAPPY CUSTOMERS
                </h2>

                {/* ARROWS (hidden on mobile) */}
                <div className="hidden sm:flex gap-4 text-xl">
                    <button
                        onClick={() => scroll("left")}
                        className="w-10 h-10 rounded-full cursor-pointer border flex items-center justify-center hover:bg-black hover:text-white transition"
                    >
                        ←
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="w-10 h-10 rounded-full cursor-pointer border flex items-center justify-center hover:bg-black hover:text-white transition"
                    >
                        →
                    </button>
                </div>
            </div>

            {/* CARDS */}
            <div
                ref={ref}
                className="
                    flex
                    gap-4
                    overflow-x-auto
                    scroll-smooth
                    scrollbar-hide
                    px-4 sm:px-6
                "
            >
                {customers.map((c, i) => (
                    <div
                        key={i}
                        className="
                            flex-shrink-0
                            w-[85vw]
                            sm:w-[360px]
                            md:w-[420px]
                            bg-white
                            rounded-2xl
                            border
                            p-5
                        "
                    >
                        <div className="text-yellow-400 mb-2">★★★★★</div>

                        <h4 className="font-semibold flex items-center gap-2">
                            {c.name}
                            <span className="text-green-500 text-sm">✔</span>
                        </h4>

                        <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                            “{c.review}”
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
