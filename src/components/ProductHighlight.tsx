"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react";
import cta from "/public/images/image-cta.png";
const ProductHighlight = () => {
  return (
    <section className="flex flex-col gap-5 md:flex-row md:justify-between my-20 ">
      {/* CTA HIGHLIGHT IMAGE */}
      <div className="rounded-xl max-w-[600px] max-h-[490px]">
        <Image
          src={cta}
          alt="image of a furnished bathroom"
          className="rounded-xl w-full h-full object-cover"
          objectFit="cover"
        />
      </div>
      {/* CTA HIGHLIGHT COPY */}
      <div className="flex flex-col justify-center gap-5">
        <h6 className="tracking-widest uppercase">Our Ambitions</h6>
        <h1 className="text-[40px] max-w-lg leading-10">
          Pioneering innovation and excellence in furniture
        </h1>
        <p className="max-w-[538px]">
          Striving for excellence in every deal, we are committed to
          revolutionizing the online shopping experience. Our ambition is to set
          new standards in quality, customer satisfaction, and sustainability
        </p>
        <button className="flex items-center gap-4 bg-[#F6F6F6] text-black px-6 py-3 rounded-xl w-fit hover:bg-gray-200 transition-colors font-medium">
          Shop now
          <ArrowRight />
        </button>
      </div>
    </section>
  );
};

export default ProductHighlight;
