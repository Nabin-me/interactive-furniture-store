"use client";

import { motion } from "framer-motion";

export default function Marquee() {
  const MARQUEE_ITEMS = ["NEW ARRIVALS", "•", "NEW ARRIVALS"];

  return (
    <div className="relative flex w-full overflow-hidden rounded-full border border-gray-200 px-6 py-4">
      <div className="absolute left-0 top-0 z-10 w-full h-full  bg-gradient-to-r from-white/80 via-transparent to-white/80" />
      <motion.div
        className="flex whitespace-nowrap items-center"
        animate={{
          x: ["0%", "-33.33%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center">
            {MARQUEE_ITEMS.map((item, index) => (
              <span
                key={index}
                className={`mx-2 text-sm font-medium ${
                  item === "•" ? "text-gray-400" : ""
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
