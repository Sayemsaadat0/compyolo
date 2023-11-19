"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import fetchData from "./GetQuoteApi";

// https://api.quotable.io/random

const WithQuery = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["quotes"],
    queryFn: () => fetchData(),
  });
  if (isLoading) {
    return "loading....";
  }
  return (
    <div className="w-[50%]">
      <h1 className="text-2xl  font-bold py-2">React Query/ Tanstack Query</h1>
      <p className="text-blue-700">Author : {data?.author}</p>
      <p className="text-orange-700">Quotes : {data?.content}</p>
    </div>
  );
};

export default WithQuery;
