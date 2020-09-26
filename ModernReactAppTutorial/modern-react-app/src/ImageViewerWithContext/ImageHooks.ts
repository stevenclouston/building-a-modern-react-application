import * as React from "react";
import { ImageViewerContext, ImageViewerState } from "./ImageViewerContext";
import { Image } from "../ImageViewer/ImageThumb/types";
import { updateActiveImage, updateRating } from "./ImageViewerActions";

export const useImageViewerContext = (): ImageViewerState => {
  const { state } = React.useContext(ImageViewerContext);
  return state;
};

export const useImageViewerDispatch = (): React.Dispatch<any> => {
  const { dispatch } = React.useContext(ImageViewerContext);
  return dispatch;
};

export const useGetImages = (): { [imageId: string]: Image } => {
  const imageContext = useImageViewerContext();

  return imageContext.images;
};

export const useGetActiveImageId = (): string => {
  const imageContext = useImageViewerContext();

  return imageContext.activeImageId;
};

export const useGetActiveImage = (): Image => {
  const images = useGetImages();
  const activeImageId = useGetActiveImageId();

  return images[activeImageId];
};

export const useUpdateActiveImageId = (): ((imageId: string) => void) => {
  const dispatch = useImageViewerDispatch();

  return React.useCallback(
    (imageId: string): void => {
      dispatch(updateActiveImage({ imageId }));
    },
    [dispatch]
  );
};

export const useUpdateRating = (): ((
  imageId: string,
  rating: number
) => void) => {
  const dispatch = useImageViewerDispatch();

  return React.useCallback(
    (imageId: string, rating: number): void => {
      dispatch(updateRating({ imageId, rating }));
    },
    [dispatch]
  );
};

export const useGetRating = (imageId: string): number => {
  const images = useGetImages();

  const image = images[imageId];

  return image.rating;
};
