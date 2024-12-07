"use client";
import React, { useState } from "react";
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
    title: "Modern Sofa",
    description:
      "Sleek, minimalist design for ultimate productivity and comfort",
    price: 250.0,
    imageSrc: "/images/hero-2.jpg",
  },
  {
    id: "center",
    title: "Modern Sofa",
    description:
      "Sleek, minimalist design for ultimate productivity and comfort",
    price: 250.0,
    imageSrc: "/images/hero-2.jpg",
  },
  {
    id: "right",
    title: "Modern Sofa",
    description:
      "Sleek, minimalist design for ultimate productivity and comfort",
    price: 250.0,
    imageSrc: "/images/hero-2.jpg",
  },
];

const SaleCards: React.FC = () => {
  const [focusedCard, setFocusedCard] = useState<string | null>(null);

  // Variant configuration for animations
  const cardVariants = {
    initial: (cardId: string) => ({
      scale: cardId === "center" ? 1.025 : 0.9,
      rotate: cardId === "left" ? -2 : cardId === "right" ? 2 : 0,
      opacity: 1,
      zIndex: cardId === "center" ? 10 : 1,
      boxShadow: "0",
    }),
    hover: (cardId: string) => {
      const rotateValue = cardId === "left" ? 0 : cardId === "right" ? 0 : 0;
      return {
        scale: 1.025,
        rotate: rotateValue,
        opacity: 1,
        zIndex: 20,
        boxShadow: "soft-lg",
      };
    },
    nonFocused: (cardId: string) => {
      let rotateValue;
      switch (focusedCard) {
        case "left":
          rotateValue = 2;
          break;
        case "right":
          rotateValue = -2;
          break;
        default:
          rotateValue = cardId === "left" ? -2 : cardId === "right" ? 2 : 0;
      }

      return {
        scale: 0.9,
        rotate: rotateValue,
        opacity: 0.7,
        zIndex: 1,
        boxShadow: "0",
      };
    },
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h6 className="text-sm tracking-widest uppercase text-gray-500">
          Popular
        </h6>
        <h1 className="text-4xl font-medium">Furniture Sales Now On!</h1>
      </div>

      {/* Card Container */}
      <div className="flex justify-center items-center space-x-[-2rem] relative">
        {CARD_DATA.map((card) => (
          <motion.div
            key={card.id}
            className="relative p-6 bg-[#E8E8E8] rounded-2xl"
            initial="initial"
            animate={
              focusedCard === card.id
                ? "hover"
                : focusedCard
                ? "nonFocused"
                : "initial"
            }
            variants={cardVariants}
            custom={card.id}
            onHoverStart={() => setFocusedCard(card.id)}
            onHoverEnd={() => setFocusedCard(null)}
          >
            {/* Card Content */}
            <div className="space-y-6">
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
                <h2 className="text-3xl">{card.title}</h2>
                <p className="max-w-56 mt-2 text-gray-600 ">
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
