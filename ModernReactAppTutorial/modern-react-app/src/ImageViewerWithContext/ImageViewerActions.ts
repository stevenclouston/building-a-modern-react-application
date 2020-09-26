import {
  ImageViewerActions,
  UpdateActiveImagePayload,
  UpdateRatingPayload,
} from "./ImageViewerReducer";

export const UPDATE_RATING = "UPDATE_RATING";
export const UPDATE_ACTIVE_IMAGE = "UPDATE_ACTIVE_IMAGE";

export const updateRating = (
  payload: UpdateRatingPayload
): ImageViewerActions => ({
  type: UPDATE_RATING,
  payload,
});

export const updateActiveImage = (
  payload: UpdateActiveImagePayload
): ImageViewerActions => ({
  type: UPDATE_ACTIVE_IMAGE,
  payload,
});
