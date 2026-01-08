export default function Newsletter() {
    return (
        <section className="py-12 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div
                    className="
                        bg-black rounded-3xl
                        px-6 sm:px-10
                        py-10 sm:py-14
                        flex flex-col md:flex-row
                        items-start md:items-center
                        justify-between
                        gap-6 md:gap-10">

                    {/* TEXT */}
                    <h3
                        className="
                            text-white
                            text-xl sm:text-2xl md:text-3xl
                            font-black
                            max-w-lg">
                        STAY UP TO DATE ABOUT OUR LATEST OFFERS
                    </h3>

                    {/* INPUT + BUTTON */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                        <input
                            placeholder="Enter your email address"
                            className="
                                rounded-full
                                px-5 sm:px-6
                                py-2.5 sm:py-3
                                w-full sm:w-72
                                border border-gray-300
                                outline-none
                                focus:border-white
                                focus:ring-2 focus:ring-white
                                transition"/>
                        
                        <button className="
                                bg-white text-black
                                px-6 sm:px-8
                                py-2.5 sm:py-3
                                rounded-full
                                font-medium
                                cursor-pointer
                                hover:bg-gray-200
                                transition">
                            Subscribe to Newsletter
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
