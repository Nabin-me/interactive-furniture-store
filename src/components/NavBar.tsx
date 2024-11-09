"use client";
import React from "react";
import { Heart, ShoppingCart, User } from "@phosphor-icons/react";
import Link from "next/link";
const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-4 bg-white">
      {/* Logo */}
      <Link href="/" className="text-xl">
        Furniche
      </Link>

      {/* Desktop Navigation Links */}
      <div className="hidden md:inline-flex items-center gap-6 p-2 bg-[#F7F7F7] rounded-full">
        <Link
          href="/"
          className="flex gap-2 items-center px-3 py-2 bg-white rounded-full text-black"
        >
          <span className="w-1.5 h-1.5 bg-black rounded-full" />
          <span className="pl-1">Home</span>
        </Link>
        <Link
          href="/cataloge"
          className="text-[#484848] hover:text-black transition-colors"
        >
          Cataloge
        </Link>
        <Link
          href="/about"
          className="text-[#484848] hover:text-black transition-colors"
        >
          About Us
        </Link>
        <Link
          href="/faq"
          className="text-[#484848] hover:text-black transition-colors"
        >
          FAQ
        </Link>
        <Link
          href="/contact"
          className="text-[#484848] hover:text-black transition-colors mr-2"
        >
          Contact
        </Link>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-4">
        <button
          className="p-2 bg-gray-100 hover:bg-black hover:text-white  rounded-full transition-colors"
          aria-label="Wishlist"
        >
          <Heart className="w-5 h-5" />
        </button>
        <button
          className="p-2 bg-gray-100 hover:bg-black hover:text-white  rounded-full transition-colors"
          aria-label="Shopping Cart"
        >
          <ShoppingCart className="w-5 h-5" />
        </button>
        <button
          className="p-2 bg-gray-100 hover:bg-black hover:text-white rounded-full transition-colors"
          aria-label="User Profile"
        >
          <User className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
