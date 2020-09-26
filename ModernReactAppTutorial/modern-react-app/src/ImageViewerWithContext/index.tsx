import * as React from "react";
import { Image } from "../ImageViewer/ImageThumb/types";
import { toast } from "react-toastify";
import ImageTitle from "./ImageTitle";
import ImageDirectory from "./ImageDirectory";
import ImageThumb from "./ImageThumb";
import { useGetActiveImage } from "./ImageHooks";

const ImageViewer = () => {
  const activeImage = useGetActiveImage();
  return (
    <div className="w-full bg-gray-200 flex justify-center text-black">
      <div style={{ height: 1200, width: 800 }} className="flex flex-col">
        <div className="p-8 font-bold">React Context Example</div>
        <ImageTitle title={activeImage && activeImage.name} />
        <div className="flex justify-between p-4">
          <ImageDirectory />
          <div className="w-12" />
          <ImageThumb image={activeImage} />
        </div>
      </div>
    </div>
  );
};

export default ImageViewer;
