import { UPDATE_ACTIVE_IMAGE, UPDATE_RATING } from "./ImageViewerActions";
import { ImageViewerState } from "./ImageViewerContext";

type ImageViewerPayload = {
  [UPDATE_RATING]: UpdateRatingPayload;
  [UPDATE_ACTIVE_IMAGE]: UpdateActiveImagePayload;
};

export type UpdateRatingPayload = {
  imageId: string;
  rating: number;
};

export type UpdateActiveImagePayload = {
  imageId: string;
};

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export type ImageViewerActions = ActionMap<ImageViewerPayload>[keyof ActionMap<
  ImageViewerPayload
>];

export const imageViewerReducer = (
  state: ImageViewerState,
  action: ImageViewerActions
): ImageViewerState => {
  switch (action.type) {
    case UPDATE_RATING: {
      return {
        ...state,
        images: {
          ...state.images,
          [action.payload.imageId]: {
            ...state.images[action.payload.imageId],
            rating: action.payload.rating,
          },
        },
      };
    }
    case UPDATE_ACTIVE_IMAGE: {
      return {
        ...state,
        activeImageId: action.payload.imageId,
      };
    }
    default:
      throw new Error();
  }
};
