import Image from "next/image";
import React from "react";
import { easeInOut, motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div className="">
      <div className="absolute bg-purple-500 -top-10 left-20 w-[600px] h-[300px] blur-[150px] opacity-25" />
      <div className="absolute bg-cyan-500 -bottom-10  right-20 w-[600px] h-[300px] blur-[200px] opacity-25" />
      <div className="max-w-[1530px] h-[100vh] mx-auto  flex justify-center items-center relative">
        {/* <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
          }}
          className="absolute top-44 h-20 w-20 -z-10 right-80 "
        >
          <Image
            className="w-full animate-spin"
            src="https://i.ibb.co/yqnGrtV/circular-text-3674.jpg"
            alt="spin"
            width={400}
            height={400}
          />
        </motion.div> */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            staggerChildren: 0.2,
          }}
        >
          <div className="absolute left-40 z-10">
            {Array.from("Gallary-Art").map((letter, i) => (
              <>
                <motion.span
                  className="text-7xl font-bold  text-yellow-500 "
                  initial={{ y: -100 }}
                  animate={{ y: 0 }}
                  transition={{
                    ease: easeInOut,
                    duration: 4,
                  }}
                  key={Math.random()}
                >
                  {letter}
                </motion.span>
              </>
            ))}
          </div>
        </motion.div> */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.75 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            delay: 0.5,
          }}
          className="text-7xl font-bold  absolute text-yellow-500 left-40 z-10"
        >
          Gallary Art
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.8,
            ease: easeInOut,
          }}
        >
          <Image
            src="https://images.pexels.com/photos/19284601/pexels-photo-19284601/free-photo-of-a-street-in-a-city-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="sdsd"
            width={800}
            height={200}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            ease: easeInOut,
            delay: 1,
          }}
          className="bg-black text-white w-96 absolute right-28 bottom-60"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus,
            maxime quas doloribus nihil totam optio reiciendis voluptas quae
            iure fugiat harum consequuntur facere accusantium quis quos
            asperiores suscipit in eius nam eum numquam reprehenderit unde quam
            fuga? Deserunt, sunt odit?
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
