import * as React from "react";

export const useHandleCount = () => {
  const [quantity, setQuantity] = React.useState(0);

  const maxCount = 10;
  const minCount = 0;

  const increaseCount = () => {
    if (quantity < maxCount) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseCount = () => {
    if (quantity > minCount) {
      setQuantity(quantity - 1);
    }
  };

  return {
    increaseCount,
    decreaseCount,
    quantity,
  };
};
