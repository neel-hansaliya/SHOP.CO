import ProductCard from "./ProductCard";
import Link from "next/link";

export default function ProductSection({ title, products, viewAll }: any) {
    return (
        <section className="py-10 sm:py-14 text-black">

            {/* TITLE */}
            <h2 className="text-2xl sm:text-3xl font-black
                     text-center mb-8 sm:mb-10">
                {title}
            </h2>

            {/* RESPONSIVE GRID */}
            <div
                className="
                    max-w-7xl mx-auto px-4 sm:px-6
                    grid grid-cols-2
                    sm:grid-cols-2
                    md:grid-cols-3
                    lg:grid-cols-4
                    gap-4 sm:gap-6 lg:gap-8">
                {products.map((p: any) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>

            {/* VIEW ALL */}
            {viewAll && (
                <div className="text-center mt-8 sm:mt-10">
                    <Link href="/products">
                        <button
                            className="border px-8 sm:px-10 py-2.5 sm:py-3
                                    rounded-full text-sm
                                    hover:bg-black hover:text-white
                                    transition cursor-pointer">
                            View All
                        </button>
                    </Link>
                </div>
            )}
        </section>
    );
}
