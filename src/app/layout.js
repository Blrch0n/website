"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./header-footer/Footer";
import Header from "./header-footer/Header";
import { createContext, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const someContext = createContext();

export default function RootLayout({ children }) {
  const [search, setSearch] = useState("");
  return (
    <someContext.Provider value={{ search, setSearch }}>
      <html lang="en">
        <body className={inter.className}>
          <Footer />
          {children}
          <Header />
        </body>
      </html>
    </someContext.Provider>
  );
}
