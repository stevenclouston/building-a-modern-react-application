import * as React from "react";
import { useToggle } from "./hooks";

const ToggleWithHook = () => {
  const [buttonText, toggle] = useToggle(false);

  return (
    <div className="h-64 m-40">
      <button className="w-40 bg-gray-100 text-black" onClick={toggle}>
        {buttonText}
      </button>
    </div>
  );
};

export default ToggleWithHook;
