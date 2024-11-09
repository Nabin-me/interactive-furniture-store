import React from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import SaleCards from "@/components/SaleCards";
import CategorySection from "@/components/CategorySection";
import ProductHighlight from "@/components/ProductHighlight";
import ProductGallery from "@/components/ProductGallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="container max-w-7xl mx-auto tracking-tighter">
      <NavBar />
      <HeroSection />
      <SaleCards />
      <CategorySection />
      <ProductHighlight />
      <ProductGallery />
      <Footer />
    </main>
  );
}
