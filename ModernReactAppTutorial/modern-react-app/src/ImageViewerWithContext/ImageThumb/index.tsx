import * as React from "react";
import images from "../../assets";
import { Image } from "./types";
import Rating from "./Rating";
import {useGetRating, useUpdateRating} from "../ImageHooks";

interface Props {
  image: Image;
  classes?: string;
  small?: boolean;
}

const ImageThumb = ({
  image,
  classes = "h-64",
  small = false,
}: Props) => {
  // @ts-ignore
  const path = images[image.filename];

  const updateRating = useUpdateRating()

  const rating = useGetRating(image.id)

  if (!image) {
    return null;
  }
  return (
    <div className="flex flex-col justify-center pt-2">
      <div className="flex justify-center">
        {<img className={classes} src={path} />}
      </div>
      <div className="flex justify-center p-2">
        <Rating
          imageId={image.id}
          updateRating={updateRating}
          rating={image.rating}
          small={small}
        />
      </div>
    </div>
  );
};

export default ImageThumb;
