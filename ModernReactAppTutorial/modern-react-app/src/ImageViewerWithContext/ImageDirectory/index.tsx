import * as React from "react";
import { Image } from "../ImageThumb/types";
import Row from "./Row";
import {useGetImages, useUpdateActiveImageId} from "../ImageHooks";

const ImageDirectory = () => {
  const images = useGetImages()
  const updateActiveImageId = useUpdateActiveImageId()

  const imageIds = Object.keys(images);
  return (
    <div className="w-64 bg-white overflow-auto rounded">
      {imageIds.map((imageId) => {
        const image = images[imageId];
        return (
          <Row key={image.name} image={image} onClick={updateActiveImageId} />
        );
      })}
    </div>
  );
};

export default ImageDirectory;
