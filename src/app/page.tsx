"use client";
import React, { useEffect } from "react";
import Lenis from "lenis";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import SaleCards from "@/components/SaleCards";
import CategorySection from "@/components/CategorySection";
import ProductHighlight from "@/components/ProductHighlight";
import ProductGallery from "@/components/ProductGallery";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8, // Adjust scroll duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing// Vertical
    });
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Time in seconds between children animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, // Adjust duration
        ease: [0.6, 0.6, 0, 1], // Cubic Bezier easing
      },
    },
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      viewport={{ margin: "110px 0px 100px 0px" }}
      className="container max-w-7xl mx-auto tracking-tighter"
    >
      <NavBar />
      <motion.div variants={itemVariants}>
        <HeroSection />
      </motion.div>

      <motion.div variants={itemVariants}>
        <SaleCards />
      </motion.div>

      <CategorySection />
      <ProductHighlight />
      <ProductGallery />
      <Footer />
    </motion.div>
  );
}
