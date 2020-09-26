import * as React from "react";
import { Image } from "../ImageThumb/types";
import ImageThumb from "../ImageThumb";

interface Props {
  image: Image;
  onClick: (activeImageId: string) => void;
}

const Row = ({ image, onClick }: Props) => {
  return (
    <button
      className="bg-blue-100 text-black border border-gray-300 w-64 flex p-2 justify-between items-center"
      onClick={() => onClick(image.id)}
    >
      <div className="px-2 font-light">{image.name}</div>
      <ImageThumb image={image} classes={"h-6"} small={true}/>
    </button>
  );
};

export default Row;
