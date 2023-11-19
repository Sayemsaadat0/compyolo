"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
// https://api.quotable.io/random

const AxiosFetch = () => {
  const [quote, setQuote] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      // axios get
      const res = await axios.get("https://api.quotable.io/random");
      setQuote(res.data);
    };
    fetchData();
  }, []);

  return (
    <div className="w-[50%]">
      <h1 className="text-2xl  font-bold py-2">Axios Get </h1>
      <p className="text-blue-700">Author : {quote?.author}</p>
      <p className="text-orange-700">Quotes : {quote?.content}</p>
    </div>
  );
};

export default AxiosFetch;
