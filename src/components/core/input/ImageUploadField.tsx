"use client";
import { getImgToB64 } from "@/lib/getImgToB64";
import Image from "next/image";

import React, { FC, useState } from "react";
type ImageUploadFileProps = {
  setValue: any;
  error?: any;
  value?: any;
};

const ImageUploadField: FC<ImageUploadFileProps> = ({
  setValue,
  error,
  value,
}) => {
  const [prevImg, setPrevImg] = useState<string>();
  console.log(prevImg);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (e.target.files && e.target.files[0]) {
        const selectedFile = e.target.files[0];
        setValue(selectedFile);
        const convertedImage = await getImgToB64(selectedFile);
        setPrevImg(convertedImage);
      }
    } catch (error) {}
  };

  return (
    <div>
      <p className="py-20">image upload</p>

      <label htmlFor="dropFile">
        <div className="">
          {value && !prevImg && (
            <Image
              className=""
              src={value ? value : "imgIcon"}
              width={200}
              height={200}
              alt="icon"
            />
          )}
        </div>
        {prevImg && (
          <div className="mx-auto w-fit border">
            <Image
              className="rounded-lg"
              src={prevImg}
              width={200}
              height={200}
              alt="icon"
            />
          </div>
        )}

        {!prevImg && <div>upload</div>}
        <input
          onChange={handleFileChange}
          name="file"
          type="file"
          accept="image/*"
        //   className="hidden"
          id="dropFile"
        />
      </label>
    </div>
  );
};

export default ImageUploadField;
