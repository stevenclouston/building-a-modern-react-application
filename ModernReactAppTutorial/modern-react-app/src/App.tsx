import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Viewer from "./ImageViewer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WithoutUseCallbackDemo from "./CallbackExamples/WithoutUseCallbackDemo";
import WithUseCallbackDemo from "./CallbackExamples/WithUseCallbackDemo";
import WithUseCallbackDependenciesDemo from "./CallbackExamples/WithUseCallbackDependenciesDemo";
import ImageViewerWrapper from "./ImageViewerWithContext/ImageViewerWrapper";
import Counter from "./CallbackExamples/useEffectExample";
import Toggle from "./ToggleExample";
import ToggleWithHook from "./ToggleExample/ToogleWithHook";
import Checkout from "./CustomHooksExample";

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
        <Checkout />
        <Counter />
        <Viewer />
        <WithoutUseCallbackDemo />
        <WithUseCallbackDemo />
        <WithUseCallbackDependenciesDemo />
        <ImageViewerWrapper />
        <Toggle />
        <ToggleWithHook />
      </header>
    </div>
  );
}

export default App;
