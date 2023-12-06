import { useStore } from "@/lib/store/Count.store";
import React from "react";

export const Child = () => {
  const { count } = useStore();
  return (
    <div>
      <p>{count}</p>
    </div>
  );
};
