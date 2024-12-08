import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import Image from "next/image";
import living from "/public/images/category-living.png";
import dining from "/public/images/category-dining.png";
import bedroom from "/public/images/category-bed.png";
import office from "/public/images/category-office.png";
import { ArrowRight } from "@phosphor-icons/react";

export function BentoGridLayout() {
  return (
    <BentoGrid className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          header={item.header}
          className="relative overflow-hidden"
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    title: "Living Room",
    header: (
      <div className="w-full h-full">
        <Image
          src={living}
          alt="image of living room"
          className="rounded-xl object-cover w-full h-full"
        />
      </div>
    ),
  },
  {
    title: "Bedroom",
    header: (
      <div className="w-full h-full">
        <Image
          src={bedroom}
          alt="image of bedroom furniture"
          className="rounded-2xl object-cover w-full h-full"
        />
      </div>
    ),
  },
  {
    title: "Dining Room",
    header: (
      <div className="w-full h-full">
        <Image
          src={dining}
          alt="image of dining furniture"
          className="rounded-2xl object-cover w-full h-full"
        />
      </div>
    ),
  },
  {
    title: "Office",
    header: (
      <div className="w-full h-full">
        <Image
          src={office}
          alt="image of office furniture"
          className="rounded-2xl object-cover w-full h-full"
        />
      </div>
    ),
  },
];
