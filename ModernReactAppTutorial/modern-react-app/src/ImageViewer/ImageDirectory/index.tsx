import * as React from "react";
import { Image } from "../ImageThumb/types";
import Row from "./Row";

interface Props {
  images: { [id: string]: Image };
  setActiveImageId: (activeImageId: string) => void;
}

const ImageDirectory = ({ images, setActiveImageId }: Props) => {
  const imageIds = Object.keys(images);
  return (
    <div className="w-64 bg-white overflow-auto rounded">
      {imageIds.map((imageId) => {
        const image = images[imageId];
        return (
          <Row key={image.name} image={image} onClick={setActiveImageId} />
        );
      })}
    </div>
  );
};

export default ImageDirectory;
