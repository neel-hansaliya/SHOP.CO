'use client';
import Image from "next/image";

import casual from "../assets/men1.png";
import formal from "../assets/Formal.png";
import party from "../assets/party.png";
import gym from "../assets/gym.png";

export default function BrowseByDressStyle() {
    return (
        <section className="py-12 sm:py-16 lg:py-20 text-black">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="bg-[#F3F0EE] rounded-3xl p-6 sm:p-10 shadow-sm">

                    {/* TITLE */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-8 sm:mb-12">
                        BROWSE BY DRESS STYLE
                    </h2>

                    {/* GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">

                        {/* CASUAL */}
                        <div className="relative bg-white rounded-2xl shadow-md overflow-hidden h-[180px] sm:h-[220px]">
                            <Image
                                src={casual}
                                alt="Casual"
                                fill
                                className="object-cover ml-30 object-right md:object-center"
                            />
                            <p className="absolute top-4 left-4 text-lg sm:text-xl font-semibold z-10">
                                Casual
                            </p>
                        </div>

                        {/* FORMAL */}
                        <div className="relative bg-white rounded-2xl shadow-md overflow-hidden h-[180px] sm:h-[220px] md:col-span-2">
                            <Image
                                src={formal}
                                alt="Formal"
                                fill
                                className="object-cover ml-30 object-right md:object-center"
                            />
                            <p className="absolute top-4 left-4 text-lg sm:text-xl font-semibold z-10">
                                Formal
                            </p>
                        </div>

                        {/* PARTY */}
                        <div className="relative bg-white rounded-2xl shadow-md overflow-hidden h-[180px] sm:h-[220px] md:col-span-2">
                            <Image
                                src={party}
                                alt="Party"
                                fill
                                className="object-cover object-right md:object-center"
                            />
                            <p className="absolute top-4 left-4 text-lg sm:text-xl font-semibold z-10">
                                Party
                            </p>
                        </div>

                        {/* GYM */}
                        <div className="relative bg-white rounded-2xl shadow-md overflow-hidden h-[180px] sm:h-[220px]">
                            <Image
                                src={gym}
                                alt="Gym"
                                fill
                                className="object-cover object-right md:object-center"
                            />
                            <p className="absolute top-4 left-4 text-lg sm:text-xl font-semibold z-10">
                                Gym
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
