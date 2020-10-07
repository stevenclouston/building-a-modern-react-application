import * as React from "react";
import Star from "../../assets/icons/star";
import classNames from "classnames";
import times from "lodash/times";
import StarlessSquare from "./StarlessSquare";
import RatingBox from "./RatingBox";

interface Props {
  updateRating?: (imageId: string, rating: number) => void;
  imageId: string;
  stars: number;
  small?: boolean;
}

const Rating = ({ imageId, updateRating, stars, small = false }: Props) => {
  const handleClick = (index: number) => {
    updateRating && updateRating(imageId, index + stars + 1);
  };

  return (
    <div
      className={classNames(
        "flex justify-center items-center bg-gray-300 h-4 w-16 border rounded-full",
        {
          "w-24 h-6": !small,
        }
      )}
    >
      {times(stars, (index) => (
        <div onClick={() => updateRating && updateRating(imageId, index + 1)}>
          <Star rated={true} />
        </div>
      ))}
      {times(5 - stars, (index) => (
        <div onClick={() => handleClick(index)}>
          <RatingBox>
            <StarlessSquare key={index.toString()} />
          </RatingBox>
        </div>
      ))}
    </div>
  );
};

export default Rating;
