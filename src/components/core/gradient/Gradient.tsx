import Image from "next/image";
import React from "react";

const Gradient = () => {
  return (
    <div className="max-w-[1300px] mx-auto ">
      <div className=" border h-96 slanted bg-red-100"></div>
      <div className="relative border w-[500px]">
        <div className="gradient1 absolute "></div>
        <Image
          className="object-cover w-[500px]"
          src="https://images.pexels.com/photos/19314983/pexels-photo-19314983/free-photo-of-red-jeep-wrangler-rubicon-on-the-road-in-the-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="sdsd"
          width={400}
          height={400}
        />
      </div>
      <br />
      <br />


    </div>
  );
};

export default Gradient;
