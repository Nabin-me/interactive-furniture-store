"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";

// Type Definitions
type CardPosition = "left" | "center" | "right";

interface CardStyles {
  rotate: number;
  scale: number;
  zIndex: number;
  opacity: number;
  [key: string]: string | number;
}

interface CardProps {
  position: CardPosition;
  imageSrc: string;
}

interface SaleCardData {
  title: string;
  description: string;
  price: number;
  imageSrc: string;
}

const CARD_DATA: Record<CardPosition, SaleCardData> = {
  left: {
    title: "Modern Sofa",
    description:
      "Sleek, minimalist design for ultimate productivity and comfort",
    price: 250.0,
    imageSrc: "/images/hero-2.jpg",
  },
  center: {
    title: "Modern Sofa",
    description:
      "Sleek, minimalist design for ultimate productivity and comfort",
    price: 250.0,
    imageSrc: "/images/hero-2.jpg",
  },
  right: {
    title: "Modern Sofa",
    description:
      "Sleek, minimalist design for ultimate productivity and comfort",
    price: 250.0,
    imageSrc: "/images/hero-2.jpg",
  },
};

const SaleCards: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<CardPosition | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const getCardStyles = (position: CardPosition): CardStyles => {
    if (isMobile) {
      return { rotate: 0, scale: 1, zIndex: 0, opacity: 1 };
    }

    const baseRotation =
      position === "left" ? -2 : position === "right" ? 2 : 0;

    if (hoveredCard === null) {
      return {
        rotate: baseRotation,
        scale: position === "center" ? 1.05 : 1,
        zIndex: position === "center" ? 10 : 0,
        opacity: position === "center" ? 1 : 0.9,
      };
    }

    if (hoveredCard === position) {
      return {
        rotate: 0,
        scale: position === "center" ? 1.05 : 1.1, // Maintain scale for center card
        zIndex: 20,
        opacity: 1,
      };
    }

    return {
      rotate: position === "center" ? 0 : baseRotation,
      scale: 0.95,
      zIndex: 0,
      opacity: 0.8,
    };
  };

  // Animated Card Component
  const Card: React.FC<CardProps> = ({ position, imageSrc }) => {
    const cardData = CARD_DATA[position];
    return (
      <motion.div
        className="bg-[#E8E8E8] rounded-2xl flex flex-col gap-6 p-6"
        animate={getCardStyles(position)}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.8, 0.25, 1], // Smooth easing for all transitions
        }}
        onHoverStart={() => !isMobile && setHoveredCard(position)}
        onHoverEnd={() => !isMobile && setHoveredCard(null)}
        style={{
          boxShadow:
            hoveredCard === position ||
            (hoveredCard === null && position === "center")
              ? "0 20px 30px rgba(0, 0, 0, 0.15)"
              : "none",
        }}
      >
        <span className="bg-[#F4F4F4] w-fit px-3 py-2 rounded-full">
          Exclusive
        </span>
        <div className="flex flex-col gap-6">
          <Image
            src={cardData.imageSrc}
            alt={cardData.title}
            width={450}
            height={300}
            className="rounded-2xl w-full h-auto"
          />
          <div>
            <h2 className="text-3xl">{cardData.title}</h2>
            <p className="max-w-56 mt-2">{cardData.description}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <h4 className="text-xl text-[#494949]">
            ${cardData.price.toFixed(2)}
          </h4>
          <button
            className="p-2 bg-gray-100 hover:bg-black hover:text-white rounded-full transition-colors"
            aria-label="View Details"
          >
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="px-4 md:px-0 my-30">
      {/* Sale Title Area */}
      <div className="flex flex-col items-center my-10">
        <h6 className="text-base tracking-widest uppercase">Popular</h6>
        <h1 className="text-4xl tracking-tighter font-medium text-center">
          Furniture sales now on!
        </h1>
      </div>

      {/* Sale Cards Stack */}
      <div
        className={`flex ${
          isMobile ? "flex-col" : "-space-x-3.5"
        } justify-center items-center`}
      >
        {(Object.keys(CARD_DATA) as CardPosition[]).map((position) => (
          <Card
            key={position}
            position={position}
            imageSrc={CARD_DATA[position].imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default SaleCards;
