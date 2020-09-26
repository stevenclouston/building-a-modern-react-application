import React, { useState } from "react";
import MemoizedButton from "./MemoizedButton";

// Keeps track of all created functions during the app's life
const functions: Set<any> = new Set();

const WithUseCallbackDependenciesDemo = () => {
  const [delta, setDelta] = useState(1);
  const [c, setC] = useState(0);

  const incrementDelta = React.useCallback(
    () => setDelta((delta) => delta + 1),
    []
  );
  const increment = React.useCallback(() => setC((c) => c + delta), [delta]);

  // Register the functions so we can count them
  functions.add(incrementDelta);
  functions.add(increment);

  return (
    <div style={{ height: 1200, width: 800 }} className="flex flex-col justify-center">
      <div className="p-8 font-bold">
        Use Callback With Dependencies Example
      </div>
      <div> Delta is {delta} </div>
      <div> Counter is {c} </div>
      <br />
      <div>
        <MemoizedButton className="border bg-gray-500" onClick={incrementDelta}>
          Increment Delta
        </MemoizedButton>
        <MemoizedButton className="border" onClick={increment}>
          Increment Counter
        </MemoizedButton>
      </div>
      <br />
      <div> Newly Created Functions: {functions.size - 2} </div>
    </div>
  );
};

export default WithUseCallbackDependenciesDemo;
