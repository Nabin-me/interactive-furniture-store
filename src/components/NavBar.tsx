"use client";

import React, { useState, useEffect } from "react";
import { Heart, ShoppingCart, User, Menu } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, LayoutGroup } from "framer-motion";
import { X } from "@phosphor-icons/react";

const NavBar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 20);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-4 py-4">
      <LayoutGroup>
        {/* Mobile Navigation */}
        <div className="flex items-center justify-between w-full md:hidden">
          {/* Mobile Logo */}
          <Link href="/" className="flex items-center">
            <svg
              width="30"
              height="30"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 0C8.9543 0 0 8.9543 0 20C11.0457 20 20 11.0457 20 0Z"
                fill="#FFA589"
              />
              <path
                d="M20 40C31.0457 40 40 31.0457 40 20C28.9543 20 20 28.9543 20 40Z"
                fill="#FFA589"
              />
              <path
                d="M20 0C31.0457 0 40 8.9543 40 20C28.9543 20 20 11.0457 20 0Z"
                fill="#5A5A5A"
              />
              <path
                d="M20 40C8.9543 40 -9.65645e-07 31.0457 0 20C11.0457 20 20 28.9543 20 40Z"
                fill="#5A5A5A"
              />
            </svg>
          </Link>

          {/* Hamburger Menu */}
          <button
            className="p-2 bg-gray-100 rounded-full"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-[#F7F7F7] flex flex-col items-center justify-center gap-6 z-50"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: "0%" }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.5, ease: [0.6, 0.6, 0, 1] }}
            >
              <div
                className="absolute top-20 right-20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-7 h-7" />
              </div>
              {["Home", "Cataloge", "About Us", "FAQ", "Contact"].map(
                (item) => (
                  <Link
                    key={item}
                    href={`/`}
                    className=" text-xl"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between w-full">
          {/* Logo - Fixed position */}
          <motion.div
            layout
            className="flex-shrink-0 absolute left-4"
            initial={{ opacity: 1, x: 0 }}
            animate={{
              opacity: isScrolled ? 0 : 1,
              x: isScrolled ? 40 : 0,
            }}
            transition={{ duration: 0.6, ease: [0.6, 0.6, 0, 1] }}
          >
            <Link href="/" className="text-xl font-semibold">
              Furniche
            </Link>
          </motion.div>

          {/* Navigation Links - With fixed width and centered */}
          <motion.div
            layout
            className={`relative mx-auto flex items-center px-2 py-2 gap-6 rounded-full bg-[#F7F7F7]/80 backdrop-blur-lg ${
              isScrolled
                ? "w-[500px] duration-300"
                : "w-[410px] transition-all duration-500 delay-300"
            } max-w-[90vw]`}
          >
            <div className="flex items-center justify-center w-full">
              <AnimatePresence>
                {isScrolled && (
                  <motion.div
                    layout
                    initial={{ opacity: 0, left: -20 }}
                    animate={{ opacity: 1, left: 20 }}
                    exit={{ opacity: 0, left: -20 }}
                    transition={{ duration: 0.6, ease: [0.6, 0.6, 0, 1] }}
                    className="absolute left-4"
                  >
                    <Link href="/">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 0C8.9543 0 0 8.9543 0 20C11.0457 20 20 11.0457 20 0Z"
                          fill="#FFA589"
                        />
                        <path
                          d="M20 40C31.0457 40 40 31.0457 40 20C28.9543 20 20 28.9543 20 40Z"
                          fill="#FFA589"
                        />
                        <path
                          d="M20 0C31.0457 0 40 8.9543 40 20C28.9543 20 20 11.0457 20 0Z"
                          fill="#5A5A5A"
                        />
                        <path
                          d="M20 40C8.9543 40 -9.65645e-07 31.0457 0 20C11.0457 20 20 28.9543 20 40Z"
                          fill="#5A5A5A"
                        />
                      </svg>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex items-center gap-6">
                <Link
                  href="/"
                  className="flex items-center gap-2 px-3 py-2 bg-white rounded-full text-black"
                >
                  <span className="w-1.5 h-1.5 bg-black rounded-full" />
                  <span className="pl-1">Home</span>
                </Link>
                {["Cataloge", "About Us", "FAQ", "Contact"].map((item) => (
                  <Link
                    key={item}
                    href={`/`}
                    className={`text-[#484848] hover:text-black transition-colors ${
                      item === "Contact" ? "mr-1" : ""
                    }`}
                  >
                    {item}
                  </Link>
                ))}
              </div>
              <AnimatePresence>
                {isScrolled && (
                  <motion.button
                    layout
                    className="absolute right-4 p-2 bg-white hover:bg-black hover:text-white rounded-full transition-colors"
                    initial={{ opacity: 0, right: -20 }}
                    animate={{ opacity: 1, right: 10 }}
                    exit={{ opacity: 0, right: -20 }}
                    transition={{ duration: 0.6, ease: [0.6, 0.6, 0, 1] }}
                  >
                    <User className="w-5 h-5" />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Icons - Fixed position */}
          <motion.div
            layout
            className="flex items-center gap-4 absolute right-4"
            initial={false}
            animate={{
              opacity: isScrolled ? 0 : 1,
              x: isScrolled ? -40 : 0,
            }}
            transition={{ duration: 0.6, ease: [0.6, 0.6, 0, 1] }}
          >
            <AnimatePresence>
              {!isScrolled && (
                <>
                  {[Heart, ShoppingCart, User].map((Icon, index) => (
                    <motion.button
                      key={index}
                      layout
                      className="p-2 bg-gray-100 hover:bg-black hover:text-white rounded-full transition-colors"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.6, 0.6, 0, 1] }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.button>
                  ))}
                </>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </LayoutGroup>
    </nav>
  );
};

export default NavBar;
