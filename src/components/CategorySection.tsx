"use client";
import React from "react";
import { motion } from "framer-motion";
import { BentoGridLayout } from "./ui/bento";

const CategorySection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger the animation of child elements
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
    <motion.section
      className="my-20 tracking-tighter"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }} // Trigger animation when 20% of the component is visible
      variants={containerVariants}
    >
      <motion.div>
        {/* Title */}
        <motion.h6
          className="tracking-widest uppercase"
          variants={itemVariants}
        >
          Category
        </motion.h6>
        <motion.h1
          className="text-4xl tracking-tighter font-medium mt-1"
          variants={itemVariants}
        >
          Choose your perfect home
        </motion.h1>

        {/* Content */}
        <motion.div className="mt-5" variants={itemVariants}>
          <BentoGridLayout />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default CategorySection;
