"use client";

import React, { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";

// Static imports for images
import gridImage0 from "../../public/images/grid-image-0.png";
import gridImage1 from "../../public/images/grid-image-1.png";
import gridImage2 from "../../public/images/grid-image-2.png";
import gridImage3 from "../../public/images/grid-image-3.png";
import gridImage4 from "../../public/images/grid-image-4.png";
import gridImage5 from "../../public/images/grid-image-5.png";
import gridImage6 from "../../public/images/grid-image-6.png";
import gridImage7 from "../../public/images/grid-image-7.png";
import gridImage8 from "../../public/images/grid-image-8.png";
import gridImage9 from "../../public/images/grid-image-9.png";
import gridImage10 from "../../public/images/grid-image-10.png";
import gridImage11 from "../../public/images/grid-image-11.png";
import gridImage12 from "../../public/images/grid-image-12.png";

interface ImageItemProps {
  src: StaticImageData;
  alt: string;
  className?: string;
  index: number;
}

const ImageItem: React.FC<ImageItemProps> = ({
  src,
  alt,
  className = "",
  index,
}) => (
  <motion.div
    className={`overflow-hidden rounded-lg h-full ${className}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Image
      src={src}
      alt={alt}
      className="object-cover w-full h-full"
      placeholder="blur"
    />
  </motion.div>
);

const imageData = [
  { src: gridImage0, alt: "Dining area with wooden table and white chairs" },
  { src: gridImage1, alt: "Minimalist wall shelf with shadows" },
  { src: gridImage2, alt: "White bistro set with plants" },
  { src: gridImage3, alt: "Grey couch with teal accent pillows" },
  { src: gridImage4, alt: "Light grey accent chair" },
  { src: gridImage5, alt: "White chair with basket" },
  { src: gridImage6, alt: "Home office with yellow accent chair" },
  { src: gridImage7, alt: "White side table with alarm clock" },
  { src: gridImage8, alt: "Modern table lamp on grey nightstand" },
  { src: gridImage9, alt: "Minimalist seating area" },
  { src: gridImage10, alt: "Console table with round mirror" },
  { src: gridImage11, alt: "Modern desk setup" },
  { src: gridImage12, alt: "Mint green sofa" },
];

const ProductGallery: React.FC = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { margin: "-10% 0px", once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <section className="my-30">
      {/* Grid Title */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-[40px] tracking-tighter max-w-[600px] leading-tight">
          <motion.span>We meticulously curate our </motion.span>
          <motion.span className="text-[#898989]">
            products selections
          </motion.span>
          <motion.span> to ensure you receive only the best</motion.span>
        </h1>
      </motion.div>

      {/* Product Gallery */}
      <motion.div
        ref={containerRef}
        className="grid grid-cols-2 md:grid-cols-6 gap-4"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* First column */}
        <div className="grid grid-rows-4 gap-4 max-h-[528px]">
          <ImageItem
            src={imageData[0].src}
            alt={imageData[0].alt}
            className="row-span-2"
            index={0}
          />
          <ImageItem
            src={imageData[1].src}
            alt={imageData[1].alt}
            className="row-span-2"
            index={1}
          />
        </div>

        {/* Second column */}
        <div className="grid md:grid-rows-4 gap-4 max-h-[528px]">
          <ImageItem
            src={imageData[2].src}
            alt={imageData[2].alt}
            className="row-span-1"
            index={2}
          />
          <ImageItem
            src={imageData[3].src}
            alt={imageData[3].alt}
            className="row-span-2"
            index={3}
          />
        </div>

        {/* Third column */}
        <div className="grid md:grid-rows-12 gap-4 max-h-[528px]">
          <ImageItem
            src={imageData[4].src}
            alt={imageData[4].alt}
            className="row-span-4"
            index={4}
          />
          <ImageItem
            src={imageData[5].src}
            alt={imageData[5].alt}
            className="row-span-7"
            index={5}
          />
        </div>

        {/* Fourth column */}
        <div className="grid md:grid-rows-12 gap-4 max-h-[528px]">
          <ImageItem
            src={imageData[6].src}
            alt={imageData[6].alt}
            className="row-span-6"
            index={6}
          />
          <ImageItem
            src={imageData[7].src}
            alt={imageData[7].alt}
            className="row-span-4"
            index={7}
          />
        </div>

        {/* Fifth column */}
        <div className="grid md:grid-rows-5 gap-4 max-h-[528px]">
          <ImageItem
            src={imageData[8].src}
            alt={imageData[8].alt}
            className="row-span-3"
            index={8}
          />
          <ImageItem
            src={imageData[9].src}
            alt={imageData[9].alt}
            className="row-span-2"
            index={9}
          />
        </div>

        {/* Sixth column */}
        <div className="grid grid-rows-3 gap-4 max-h-[528px]">
          <ImageItem
            src={imageData[10].src}
            alt={imageData[10].alt}
            index={10}
          />
          <ImageItem
            src={imageData[11].src}
            alt={imageData[11].alt}
            index={11}
          />
          <ImageItem
            src={imageData[12].src}
            alt={imageData[12].alt}
            index={12}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default ProductGallery;
