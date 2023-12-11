import React from "react";
import { motion } from "framer-motion";

const FirstDiv = () => {
  return (
    <div >
      {/* <motion.div
        initial={{ y: -50, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>THis is header </h1>
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-1/2 py-10"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        doloremque asperiores commodi rerum veritatis totam optio vitae,
        accusamus hic maxime repudiandae perferendis at temporibus ex autem
        culpa libero expedita dicta dolorem, facilis voluptatum. Fugiat
        accusantium earum sunt voluptate obcaecati soluta quod voluptatum est,
        fugit sint vitae blanditiis nobis, deleniti a!
      </motion.div> */}
      <div className="flex gap-10">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="h-96 w-96 bg-blue-200 my-10"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="h-96 w-96 bg-blue-200 my-10"
        ></motion.div>
      </div>

      {/* <div className="flex gap-20">
        <motion.div
          initial={{ x: -100, opacity: 0, y: 20 }}
          whileInView={{ x: 0, opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="h-96 w-96 bg-blue-200 my-10"
        ></motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0, y: 20 }}
          whileInView={{ x: 0, opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="h-96 w-96 bg-blue-200 my-10"
        ></motion.div>
      </div> */}
    </div>
  );
};

export default FirstDiv;
