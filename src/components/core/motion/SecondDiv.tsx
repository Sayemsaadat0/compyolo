import React from "react";
import { motion } from "framer-motion";

const SecondDiv = () => {
  return (
    <div className="h-[100vh] w-[1530px] border mx-auto flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 500 }}
        whileInView={{opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: [0.1, 0, 0, 1.01] }}
        className="w-72 h-72 bg-red-100"
      ></motion.div>
    </div>
  );
};

export default SecondDiv;
