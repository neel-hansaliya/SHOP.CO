import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import Newsletter from "../app/components/Newsletter";

export default function RootLayout({ children }: any) {
  return (
    <html>
      <body>
        <AuthProvider>
          <CartProvider>
            <Header />
            {children}
            <Newsletter />
            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
