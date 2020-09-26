import * as React from "react";

interface Props {
  rated: boolean;
}
const Star = ({ rated }: Props) => {
  return (
    <svg
      width={12}
      height={10}
      viewBox="0 0 12 10"
      fill="none"
      className="mb-1"
    >
      <path
        d="M6 0l1.658 3.719 4.048.427L8.682 6.87l.845 3.983L6 8.82l-3.527 2.034.845-3.983L.294 4.146l4.048-.427L6 0z"
        fill={rated ? "#4F4F4F" : "#fff"}
      />
    </svg>
  );
};

export default Star;
