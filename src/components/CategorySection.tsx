import React from "react";
import { BentoGridDemo } from "./ui/bento";

const CategorySection = () => {
  return (
    <section className="my-20 tracking-tighter">
      <div>
        <h6 className="tracking-widest uppercase">Category</h6>
        <h1 className="text-4xl tracking-tighter font-medium mt-1">
          Choose your perfect home
        </h1>

        <div className="mt-5">
          <BentoGridDemo />
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
