import { motion } from "framer-motion";
import React from "react";

const ThirDiv = () => {
  return (
    <div className="h-[100vh] w-[1530px] border mx-auto flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, x: 200, scale: 0.75 }}
        whileInView={{ opacity: 1, x: 0, scale: 1                                                                                                                                         }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="w-72 h-72 bg-red-100"
      ></motion.div>
    </div>
  );
};

export default ThirDiv;
