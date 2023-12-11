import React from "react";
import SliderCard from "../slider/SliderCard";
import { motion } from "framer-motion";

const FramerPractice = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, x: 20 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1  }}
    >
      <h1>Hello this is Sayem</h1>

      <button className="border border-lg">Click here </button>
      <div>
        <SliderCard />
      </div>
    </motion.div>
  );
};

export default FramerPractice;

// 1
// initial={{ x: -40 }}
// animate={{ x: 0 }}
// transition={{ delay: 1, duration: 2 }}
