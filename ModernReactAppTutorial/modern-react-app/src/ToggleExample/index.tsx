import * as React from "react";
import classNames from "classnames";

const Toggle = () => {
  const [toggled, setToggled] = React.useState(true);

  const buttonText = toggled ? "Like" : "Like";

  return (
    <div className="h-64 m-40">
      <button
        className={classNames("w-40 text-black", {
          "bg-blue-500": toggled,
          "bg-gray-100": !toggled,
        })}
        onClick={() => setToggled(!toggled)}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Toggle;
