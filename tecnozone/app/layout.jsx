import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TecnoZone",
  description: "Ecommerce de ropa y tecnología. Innovadora, Moderna y Actual. ",
  author: 'Ivan Lezcano', 
  keywords: 'Ecommerce, Compras, Ropa, Tecnología, Techno, web, Buenos Aires.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
        <link rel="stylesheet" href="https://bootswatch.com/5/morph/bootstrap.min.css" />
      </head>
      <body>
        <div className="container">
        <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
