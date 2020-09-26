import * as React from "react";
import ImageDirectory from "./ImageDirectory";
import { Image } from "./ImageThumb/types";
import ImageTitle from "./ImageTitle";
import ImageThumb from "./ImageThumb";
import { toast } from "react-toastify";

const initialImageState: { [id: string]: Image } = {
  1: {
    id: "1",
    name: "Beach",
    filename: "beach",
    rating: 5,
  },
  2: {
    id: "2",
    name: "Mountains",
    filename: "mountains",
    rating: 4,
  },
  3: {
    id: "3",
    name: "Sky",
    filename: "sky",
    rating: 5,
  },
  4: {
    id: "4",
    name: "Water",
    filename: "water",
    rating: 5,
  },
  5: {
    id: "5",
    name: "Ocean",
    filename: "ocean",
    rating: 5,
  },
};

const Viewer = () => {
  const [images, setImages] = React.useState(initialImageState);
  const [activeImageId, setActiveImageId] = React.useState("1");

  const updateRating = (imageId: string, rating: number) => {
    const updatedImage = { ...images[imageId], rating: rating };
    setImages({
      ...images,
      [imageId]: updatedImage,
    });
  };

  React.useEffect(() => {
    toast.success("Active image changed", {});
  }, [activeImageId]);

  const activeImage = images[activeImageId];

  return (
    <div className="w-full bg-gray-500 flex justify-center text-black">
      <div style={{ height: 1200, width: 800 }} className="flex flex-col">
        <div className="p-8 font-bold">Prop Drilling Example</div>
        <ImageTitle title={activeImage && activeImage.name} />
        <div className="flex justify-between p-4">
          <ImageDirectory images={images} setActiveImageId={setActiveImageId} />
          <div className="w-12" />
          <ImageThumb image={activeImage} updateRating={updateRating} />
        </div>
      </div>
    </div>
  );
};

export default Viewer;
