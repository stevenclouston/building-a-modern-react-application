import * as React from "react";
import { useHandleCount } from "./hooks";

const ZoomLevel = () => {
  const minZoom = 0;
  const maxZoom = 5;

  const { increaseCount, decreaseCount, count } = useHandleCount(
    minZoom,
    maxZoom
  );

  return (
    <div className="border w-64 h-32 flex flex-col justify-center items-center m-4">
      <div>Zoom Level</div>
      <div className="flex">
        <button
          className="w-12 bg-gray-100 text-black m-1 rounded"
          onClick={decreaseCount}
        >
          -
        </button>
        <div className="p-4 w-12">{count}</div>

        <button
          className="w-12 bg-gray-100 text-black m-1 rounded"
          onClick={increaseCount}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ZoomLevel;
