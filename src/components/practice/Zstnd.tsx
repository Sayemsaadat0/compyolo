import { useCountStore } from "@/lib/store/Count.store";
import React from "react";

const Zstnd = () => {
  const { count, setTen } = useCountStore();
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setTen()}>up</button>
    </div>
  );
};

export default Zstnd;
