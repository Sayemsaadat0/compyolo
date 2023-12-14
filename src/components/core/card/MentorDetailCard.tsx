import Image from "next/image";
import React from "react";

const MentorDetailCard = () => {
  return (
    <div>
      <div className="w-80 border overflow-hidden h-96 bg-blue-100 rounded-2xl group relative">
        <div className="w-full h-36 bg-blue-400 rounded-2xl" />
        <div className="text-center flex flex-col absolute -translate-x-1/2 left-1/2 top-20  items-center  gap-4 w-full">
          <Image
            className="z-10 w-36 rounded-full "
            src="https://images.pexels.com/photos/4147623/pexels-photo-4147623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="car"
            width={400}
            height={400}
          />

          <div>
            <h3 className="text-xl font-bold">This is Name</h3>
            <p className="text-sm py-1">Lorem ipsum dolor Lorem ipsum</p>
            <p className="text-sm">date date </p>

            <div className="-bottom-[100px] group-hover:-bottom-10 duration-700 absolute -translate-x-1/2 left-1/2">
              <div className="flex justify-center  gap-6  pt-2   ">
                <p className="border bg-blue-500 p-1 text-white rounded-full">
                  FB
                </p>
                <p className="border bg-blue-500 p-1 text-white rounded-full">
                  FB
                </p>
                <p className="border bg-blue-500 p-1 text-white rounded-full">
                  FB
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorDetailCard;
