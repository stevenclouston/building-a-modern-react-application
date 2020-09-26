import * as React from "react";
import { ImageViewerProvider } from "./ImageViewerContext";
import ImageViewer from "./index";

const ImageViewerWrapper: React.FC = () => (
  <ImageViewerProvider>
    <ImageViewer />
  </ImageViewerProvider>
);

export default ImageViewerWrapper;
