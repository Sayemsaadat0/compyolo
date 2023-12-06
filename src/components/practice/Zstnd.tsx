import { useStore } from "@/lib/store/Count.store";
import React from "react";

const Zstnd = () => {
  const { count, setTen, removeTen, multipleTen } = useStore();
  return (
    <div className="text-center">
      <span className="">{count}</span>
      <br />
      <button className="border" onClick={() => setTen(15)}>
        one up
      </button>

      <button className="border mx-10" onClick={() => removeTen(1)}>
        minus
      </button>
      <button className="border mx-10" onClick={() => multipleTen(10)}>
        Multiplication
      </button>
    </div>
  );
};

export default Zstnd;
