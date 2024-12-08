"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";

// Card Data Type
interface CardData {
  id: string;
  title: string;
  description: string;
  price: number;
  imageSrc: string;
}

// Card Configuration
const CARD_DATA: CardData[] = [
  {
    id: "left",
    title: "Lounge Special Furniture",
    description: "Elegant, modern design for unmatched comfort and style.",
    price: 550.0,
    imageSrc: "/images/hero-2.jpg",
  },
  {
    id: "center",
    title: "Urban Chic Chair",
    description:
      "Bold, contemporary design crafted for elegance and modern versatility.",
    price: 999.0,
    imageSrc: "/images/feature-card-3.png",
  },
  {
    id: "right",
    title: "Modern Sofa",
    description:
      "Sleek, minimalist design for ultimate productivity and comfort",
    price: 390.0,
    imageSrc: "/images/feature-card.png",
  },
];

const SaleCards: React.FC = () => {
  const [focusedCard, setFocusedCard] = useState<string | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // Handle resizing for responsive logic
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Variant configuration for animations
  const cardVariants = {
    initial: (cardId: string) => ({
      scale: cardId === "center" ? 1.025 : 0.9,
      rotate: cardId === "left" ? -2 : cardId === "right" ? 2 : 0,
      zIndex: cardId === "center" ? 10 : 1,
      boxShadow:
        cardId === "center" ? "0px 0px 35px 0px rgba(0, 0, 0, 0.15)" : "0",
    }),
    hover: {
      scale: 1.025,
      rotate: 0,
      zIndex: 20,
      boxShadow: "0px 0px 35px 0px rgba(0, 0, 0, 0.15)",
    },
    nonFocused: (cardId: string) => ({
      scale: 0.9,
      rotate: cardId === "left" ? -2 : cardId === "right" ? 2 : 0,
      zIndex: cardId === "center" ? 10 : 1,
      boxShadow:
        cardId === "center" ? "0px 0px 35px 0px rgba(0, 0, 0, 0.15)" : "0",
    }),
    mobile: {
      scale: 1,
      rotate: 0,
      zIndex: 1,
      boxShadow: "0",
    },
  };

  return (
    <div className="mx-auto mt-20">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h6 className="text-sm tracking-widest uppercase mb-3">Popular</h6>
        <h1 className="text-4xl font-medium">Furniture sales now on!</h1>
      </div>

      {/* Card Container */}
      <div className="flex flex-col gap-6 md:gap-0 md:flex-row justify-center items-center md:space-x-[-4rem] relative">
        {CARD_DATA.map((card) => (
          <motion.div
            key={card.id}
            className="relative p-6 bg-[#fafafa] rounded-2xl cursor-pointer flex-shrink-0"
            initial="initial"
            animate={
              isDesktop
                ? focusedCard === card.id
                  ? "hover"
                  : focusedCard
                  ? "nonFocused"
                  : "initial"
                : "mobile"
            }
            transition={{
              duration: 0.8,
              ease: [0.6, 0.6, 0, 1],
            }}
            variants={cardVariants}
            custom={card.id}
            onHoverStart={() => setFocusedCard(card.id)}
            onHoverEnd={() => setFocusedCard(null)}
          >
            {/* Card Content */}
            <div className="space-y-6 w-full md:w-[400px]">
              <span className="inline-block bg-white px-3 py-1 rounded-full text-sm">
                Exclusive
              </span>

              <Image
                src={card.imageSrc}
                alt={card.title}
                width={450}
                height={300}
                className="rounded-2xl w-full object-cover"
              />

              <div>
                <h2 className="text-2xl">{card.title}</h2>
                <p className="max-w-56 mt-2 text-gray-600">
                  {card.description}
                </p>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-xl text-[#494949]">
                  ${card.price.toFixed(2)}
                </span>
                <button className="p-2 bg-white hover:bg-black hover:text-white rounded-full transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SaleCards;
