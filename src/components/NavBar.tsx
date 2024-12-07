"use client";

import React, { useState, useEffect } from "react";
import { Heart, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, LayoutGroup } from "framer-motion";

const NavBar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 20);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-4 py-4">
      <LayoutGroup>
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
          <Link href="/" className="text-xl">
            Furniche
          </Link>
        </motion.div>

        {/* Navigation Links - With fixed width and centered */}
        <motion.div
          layout
          className={`
            relative mx-auto flex items-center px-2 py-2 gap-6 
            rounded-full bg-[#F7F7F7]/80 backdrop-blur-lg 
           ${
             isScrolled ? "w-[500px]" : "w-[400px]"
           } max-w-[90vw] transition-all duration-300 transition-cubic-in
            
          `}
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
                    <div className="py-0">
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.0004 0C31.0464 0 40.0004 8.954 40.0004 20V34C40.0004 35.5913 39.3683 37.1174 38.2431 38.2426C37.1178 39.3679 35.5917 40 34.0004 40H21.0004V31.226C21.0004 29.224 21.1224 27.15 22.1724 25.446C22.9242 24.2248 23.9297 23.1796 25.121 22.3813C26.3122 21.5829 27.6612 21.0501 29.0764 20.819L29.4594 20.757C29.6173 20.703 29.7544 20.601 29.8514 20.4653C29.9485 20.3296 30.0007 20.1669 30.0007 20C30.0007 19.8331 29.9485 19.6704 29.8514 19.5347C29.7544 19.399 29.6173 19.297 29.4594 19.243L29.0764 19.181C27.0086 18.8432 25.0991 17.8644 23.6175 16.3829C22.136 14.9013 21.1572 12.9918 20.8194 10.924L20.7574 10.541C20.7034 10.3831 20.6014 10.246 20.4657 10.149C20.33 10.0519 20.1673 9.99975 20.0004 9.99975C19.8335 9.99975 19.6709 10.0519 19.5351 10.149C19.3994 10.246 19.2974 10.3831 19.2434 10.541L19.1814 10.924C18.9503 12.3393 18.4176 13.6883 17.6192 14.8795C16.8209 16.0707 15.7756 17.0763 14.5544 17.828C12.8504 18.878 10.7764 19 8.77441 19H0.0244141C0.547414 8.419 9.29041 0 20.0004 0Z"
                          fill="#000"
                        />
                      </svg>
                    </div>
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
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="text-[#484848] hover:text-black transition-colors"
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
      </LayoutGroup>
    </nav>
  );
};

export default NavBar;
