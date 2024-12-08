"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import cta from "/public/images/image-cta.png";

const ProductHighlight = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.6, 0, 1],
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col gap-5 md:flex-row md:justify-between my-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* CTA HIGHLIGHT IMAGE */}
      <motion.div
        className="rounded-xl max-w-[600px] max-h-[490px]"
        variants={itemVariants}
      >
        <Image
          src={cta}
          alt="image of a furnished bathroom"
          className="rounded-xl w-full h-full object-cover"
          objectFit="cover"
          quality={90}
        />
      </motion.div>

      {/* CTA HIGHLIGHT COPY */}
      <motion.div
        className="flex flex-col justify-center gap-5"
        variants={itemVariants}
      >
        <motion.h6
          className="tracking-widest uppercase"
          variants={itemVariants}
        >
          Our Ambitions
        </motion.h6>
        <motion.h1
          className="text-[40px] font-medium max-w-lg leading-10 tracking-[-1.6px] mt-1"
          variants={itemVariants}
        >
          Leading the way in furniture design and quality
        </motion.h1>
        <motion.p className="max-w-[538px] text-black" variants={itemVariants}>
          Committed to delivering excellence in every interaction, we aim to
          revolutionize the online shopping experience. Our goal is to set new
          standards in quality, customer satisfaction, and sustainability.
        </motion.p>
        <motion.button
          className="flex items-center gap-4 bg-[#F6F6F6] text-black px-6 py-3 rounded-xl w-fit hover:bg-gray-200 transition-colors font-medium"
          variants={itemVariants}
        >
          Learn more
          <ArrowRight />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ProductHighlight;
