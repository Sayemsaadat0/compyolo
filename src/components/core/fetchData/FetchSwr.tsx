"use client";

import React, { useState, useEffect } from "react";
import useSWR from "swr";

// https://api.quotable.io/random

const fetcher = (url: any) => fetch(url).then((res) => res.json());

const FetchSwr = () => {
  const { data } = useSWR("https://api.quotable.io/random", fetcher);
  // console.log(data);

  return (
    <div className="w-[50%]">
      <h1 className="text-2xl  font-bold py-2">SWR</h1>
      <p className="text-blue-700">Author : {data?.author}</p>
      <p className="text-orange-700">Quotes : {data?.content}</p>
    </div>
  );
};

export default FetchSwr;
