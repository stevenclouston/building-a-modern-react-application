import * as React from "react";
import { useHandleCount } from "./hooks";

const Checkout = () => {
  // const [quantity, setQuantity] = React.useState(0);
  //
  // const maxCount = 10;
  // const minCount = 0;
  //
  // const increaseCount = () => {
  //   if (quantity < maxCount) {
  //     setQuantity(quantity + 1);
  //   }
  // };
  //
  // const decreaseCount = () => {
  //   if (quantity > minCount) {
  //     setQuantity(quantity - 1);
  //   }
  // };

  const { increaseCount, decreaseCount, quantity } = useHandleCount();

  return (
    <div className="border w-64 h-32 flex justify-center items-center">
      <div className="p-2">Quantity</div>
      <div className="p-4">{quantity}</div>
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

export default Checkout;
