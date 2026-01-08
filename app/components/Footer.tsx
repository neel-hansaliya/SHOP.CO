import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="text-black pt-16 sm:pt-20 pb-8 sm:pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* TOP GRID */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
                    
                    {/* LOGO + SOCIAL */}

                    <div className="sm:col-span-2 md:col-span-1">
                        <h3 className="text-2xl font-black mb-3">SHOP.CO</h3>
                        <p className="text-sm text-gray-600 max-w-sm">
                            We have clothes that suits your style and which you’re proud to wear.
                        </p>

                        <div className="flex gap-4 mt-5 text-lg">
                            <FaTwitter className="cursor-pointer hover:text-black transition" />
                            <FaFacebookF className="cursor-pointer hover:text-black transition" />
                            <FaInstagram className="cursor-pointer hover:text-black transition" />
                        </div>
                    </div>

                    <FooterCol
                        title="COMPANY"
                        items={["About", "Features", "Works", "Career"]}
                    />
                    <FooterCol
                        title="HELP"
                        items={[
                            "Customer Support",
                            "Delivery Details",
                            "Terms & Conditions",
                            "Privacy Policy",
                        ]}
                    />
                    <FooterCol
                        title="FAQ"
                        items={["Account", "Manage Deliveries", "Orders", "Payments"]}
                    />
                    <FooterCol
                        title="RESOURCES"
                        items={[
                            "Free eBooks",
                            "Development Tutorial",
                            "How to - Blog",
                            "Youtube Playlist",
                        ]}
                    />
                </div>

                {/* BOTTOM */}
                <div
                    className="
                            border-t border-gray-300
                            mt-12 sm:mt-16
                            pt-6
                            flex flex-col md:flex-row
                            justify-between
                            items-center
                            gap-4
                            text-sm text-gray-600"
                >
                    <p className="text-center md:text-left">
                        Shop.co © 2000–2023, All Rights Reserved
                    </p>

                    <div className="flex gap-3 font-semibold">
                        <span>VISA</span>
                        <span>MC</span>
                        <span>PayPal</span>
                        <span>ApplePay</span>
                        <span>GPay</span>
                    </div>
                </div>

            </div>
        </footer>
    );
}

function FooterCol({ title, items }: any) {
    return (
        <div>
            <h4 className="font-semibold mb-3">{title}</h4>
            <ul className="space-y-2 text-sm text-gray-600">
                {items.map((i: string) => (
                    <li
                        key={i}
                        className="cursor-pointer hover:text-black transition"
                    >
                        {i}
                    </li>
                ))}
            </ul>
        </div>
    );
}
