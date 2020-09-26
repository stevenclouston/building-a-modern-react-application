import * as React from "react";

interface Props {
  title?: string;
}
const ImageTitle = ({ title }: Props) => {
  return <div className="p-4 font-light">{title}</div>;
};
export default ImageTitle;
