import * as React from "react";
const RatingBox: React.FC<{ children: JSX.Element }> = ({
  children,
}: {
  children: JSX.Element;
}) => <div className="w-2 h-2 flex items-center justify-center">{children}</div>;

export default RatingBox;
