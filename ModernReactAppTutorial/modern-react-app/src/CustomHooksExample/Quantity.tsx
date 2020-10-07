import * as React from "react";
import { useHandleCount } from "./hooks";

const Quantity = () => {
  const maxCount = 10;
  const minCount = 0;

  const { increaseCount, decreaseCount, count } = useHandleCount(
    minCount,
    maxCount
  );

  return (
    <div className="border w-64 h-32 flex justify-center items-center m-4">
      <div className="p-2">Quantity</div>
      <div className="p-4">{count}</div>
      <div className="flex flex-col">
        <button
          className="w-12 bg-gray-100 text-black m-1 rounded"
          onClick={increaseCount}
        >
          +
        </button>
        <button
          className="w-12 bg-gray-100 text-black m-1 rounded"
          onClick={decreaseCount}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Quantity;
