import React from "react";
import Image, { StaticImageData } from "next/image";

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
}

const ImageItem: React.FC<ImageItemProps> = ({ src, alt, className = "" }) => (
  <div className={`overflow-hidden rounded-lg h-full  ${className}`}>
    <Image
      src={src}
      alt={alt}
      className="object-cover w-full h-full"
      placeholder="blur"
    />
  </div>
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
  return (
    <section className="my-40">
      {/* Grid Title */}
      <div className="mb-6">
        <h1 className="text-[40px] tracking-tighter max-w-[600px] leading-tight">
          We meticulously curate our{" "}
          <span className="text-[#898989]">products selections</span> to ensure
          you receive only the best
        </h1>
      </div>

      {/* Product Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        {/* First column */}
        <div className="grid grid-rows-4 gap-4 max-h-[528px]">
          <ImageItem
            src={imageData[0].src}
            alt={imageData[0].alt}
            className="row-span-2"
          />
          <ImageItem
            src={imageData[1].src}
            alt={imageData[1].alt}
            className="row-span-2"
          />
        </div>

        {/* Second column */}
        <div className="grid md:grid-rows-4 gap-4 max-h-[528px]">
          <ImageItem
            src={imageData[2].src}
            alt={imageData[2].alt}
            className="row-span-1"
          />
          <ImageItem
            src={imageData[3].src}
            alt={imageData[3].alt}
            className="row-span-2"
          />
        </div>

        {/* Third column */}
        <div className="grid md:grid-rows-12 gap-4 max-h-[528px]">
          <ImageItem
            src={imageData[4].src}
            alt={imageData[4].alt}
            className="row-span-4"
          />
          <ImageItem
            src={imageData[5].src}
            alt={imageData[5].alt}
            className="row-span-7"
          />
        </div>

        {/* Fourth column */}
        <div className="grid md:grid-rows-12 gap-4 max-h-[528px]">
          <ImageItem
            src={imageData[6].src}
            alt={imageData[6].alt}
            className="row-span-6"
          />
          <ImageItem
            src={imageData[7].src}
            alt={imageData[7].alt}
            className="row-span-4"
          />
        </div>

        {/* Fifth column */}
        <div className="grid md:grid-rows-5 gap-4 max-h-[528px]">
          <ImageItem
            src={imageData[8].src}
            alt={imageData[8].alt}
            className="row-span-3"
          />
          <ImageItem
            src={imageData[9].src}
            alt={imageData[9].alt}
            className="row-span-2"
          />
        </div>

        {/* Sixth column */}
        <div className="grid grid-rows-3 gap-4 max-h-[528px]">
          <ImageItem src={imageData[10].src} alt={imageData[10].alt} />
          <ImageItem src={imageData[11].src} alt={imageData[11].alt} />
          <ImageItem src={imageData[12].src} alt={imageData[12].alt} />
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
