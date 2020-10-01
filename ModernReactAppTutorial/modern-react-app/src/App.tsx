import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Viewer from "./ImageViewer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WithoutUseCallbackDemo from "./HookExamples/WithoutUseCallbackDemo";
import WithUseCallbackDemo from "./HookExamples/WithUseCallbackDemo";
import WithUseCallbackDependenciesDemo from "./HookExamples/WithUseCallbackDependenciesDemo";
import ImageViewerWrapper from "./ImageViewerWithContext/ImageViewerWrapper";
import Counter from "./HookExamples/useEffectExample";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <Counter />
        <Viewer />
        <WithoutUseCallbackDemo />
        <WithUseCallbackDemo />
        <WithUseCallbackDependenciesDemo />
        <ImageViewerWrapper />
      </header>
    </div>
  );
}

export default App;
