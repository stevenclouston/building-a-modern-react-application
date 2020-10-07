import * as React from "react";

export const useHandleCount = (minCount: number, maxCount: number) => {
  const [count, setCount] = React.useState(0);

  const increaseCount = () => {
    if (count < maxCount) {
      setCount(count + 1);
    }
  };

  const decreaseCount = () => {
    if (count > minCount) {
      setCount(count - 1);
    }
  };

  return {
    increaseCount,
    decreaseCount,
    count,
  };
};
