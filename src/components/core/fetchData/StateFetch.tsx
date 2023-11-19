"use client";

import { CloudLightning } from "lucide-react";
import React, { useState, useEffect } from "react";
// https://api.quotable.io/random

const StateFetch = () => {
  const [quote, setQuote] = useState(null);
  useEffect(() => {
    // modern way to fetch using async await
    const fetchData = async () => {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      setQuote(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div className="w-[50%]">
      <h1 className="text-2xl  font-bold py-2">
        fetch using useState and useEffect
      </h1>
    
      <p className="authorColor">Author : {quote?.author}</p>
      <p >Quotes : {quote?.content}</p>

    </div>
  );
};

export default StateFetch;

// Question : 4bar load nitache, next js er strictmode ta koi?
