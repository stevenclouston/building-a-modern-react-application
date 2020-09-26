import React from "react";
import { imageViewerReducer } from "./ImageViewerReducer";
import { Image } from "../ImageViewer/ImageThumb/types";

export interface ImageViewerState {
  images: { [imageId: string]: Image };
  activeImageId: string;
}

const initialState = {
  activeImageId: "1",
  images: {
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
  },
};

interface ImageViewerStore {
  state: ImageViewerState;
  dispatch: React.Dispatch<any>;
}

const ImageViewerContext = React.createContext<ImageViewerStore>({
  state: initialState,
  dispatch: () => null,
});

interface Props {
  children: JSX.Element;
}

const ImageViewerProvider: React.FC<Props> = ({ children }: Props) => {
  const [state, dispatch] = React.useReducer(imageViewerReducer, initialState);

  return (
    <ImageViewerContext.Provider value={{ state, dispatch }}>
      {children}
    </ImageViewerContext.Provider>
  );
};

export { ImageViewerContext, ImageViewerProvider };
