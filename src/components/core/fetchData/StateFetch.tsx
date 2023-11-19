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
  // old ways
  // useEffect(() => {
  //   fetch("https://api.quotable.io/random")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setQuote(data);
  //     });
  // }, []);
  return (
    <div>
      <h1 className="text-2xl  font-bold py-2">
        {" "}
        fetch using useState and useEffect
      </h1>
      <p>Author : {quote?.author}</p>
    </div>
  );
};

export default StateFetch;

// Question : 4bar load nitache, next js er strictmode ta koi?
