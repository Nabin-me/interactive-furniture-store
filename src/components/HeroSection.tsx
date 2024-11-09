"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft } from "@phosphor-icons/react";
import Marquee from "./ui/marquee";

const HeroSection = () => {
  const images = [
    "/images/hero-chair.png",
    "/images/hero-2.jpg",
    "/images/hero-3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const updateViewport = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    updateViewport(); // Initial check
    window.addEventListener("resize", updateViewport);

    return () => {
      window.removeEventListener("resize", updateViewport);
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[632px]">
      <div className="absolute hidden md:block top-3 w-[295px] -z-10">
        <Marquee />
      </div>
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="hero-mask-desktop" clipPathUnits="objectBoundingBox">
            <path d="M0 0.954114V0.172185C0 0.146842 0.010607 0.126297 0.023693 0.126297H0.231209C0.244295 0.126297 0.254902 0.105752 0.254902 0.080409V0.047209C0.254902 0.021866 0.265509 0.001323 0.278595 0.001323H0.976307C0.989393 0.001323 1 0.021866 1 0.047209V0.817758C1 0.843101 0.989393 0.863644 0.976307 0.863644H0.873366C0.86028 0.863644 0.849673 0.884187 0.849673 0.909530V0.954114C0.849673 0.979457 0.843077 1 0.829991 1H0.023693C0.010607 1 0 0.979457 0 0.954114Z" />
          </clipPath>
          <clipPath id="hero-mask-mobile" clipPathUnits="userSpaceOnUse">
            <path d="M0 384.296V60.3071C0 51.3623 6.64373 44.1112 14.8392 44.1112H27.1199C35.3153 44.1112 41.9591 36.86 41.9591 27.9153V16.1959C41.9591 7.25115 48.6028 0 56.7982 0H305.161C313.356 0 320 7.25115 320 16.1959V336.169C320 345.114 313.356 352.365 305.161 352.365H291.857C283.661 352.365 277.018 359.616 277.018 368.561V384.296C277.018 393.241 272.89 400.492 264.694 400.492H14.8392C6.64371 400.492 0 393.241 0 384.296Z" />
          </clipPath>
        </defs>
      </svg>

      <div
        className="w-full h-full rounded-3xl overflow-hidden"
        style={{
          clipPath: `url(#${
            isMobile ? "hero-mask-mobile" : "hero-mask-desktop"
          })`,
          background: "#F5F5F5",
        }}
      >
        <div className="relative h-full p-6 flex items-end">
          <div className="flex flex-col gap-6 max-w-[194px]  md:max-w-xs z-20">
            <h1 className="text-2xl leading-6 md:text-4xl  md:leading-9">
              A perfect blend of softness and style for any corner of your home.
            </h1>
            <button className="flex items-center gap-4 bg-white text-black px-6 py-3 rounded-xl w-fit hover:bg-gray-100 transition-colors font-medium">
              Shop now
              <ArrowRight />
            </button>
          </div>
          <div className="absolute right-0 top-0 z-10 w-full h-full overflow-hidden bg-gradient-to-tr from-[#FFF8E7] via-[#FFF8E7]/20 to-transparent"></div>
          <div className="absolute right-0 top-0 w-full h-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative w-full h-full"
              >
                <Image
                  src={images[currentIndex]}
                  alt="Image of Furniture"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={currentIndex === 0}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="absolute hidden md:block bottom-0 right-0 w-[170px] h-[71px]">
        <div className="bg-[#ededed] rounded-3xl p-4 flex items-center justify-around gap-3 h-full mx-auto">
          <button onClick={handlePrevious} aria-label="Previous image">
            <ArrowLeft weight="bold" className="w-4 h-4" />
          </button>

          <span className="font-medium min-w-[20px] text-center">
            {currentIndex + 1}
          </span>

          <button onClick={handleNext} aria-label="Next image">
            <ArrowRight weight="bold" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
