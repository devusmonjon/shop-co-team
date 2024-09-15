import { lazy, StrictMode, Suspense, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./context/index.js";
import nProgress from "nprogress";
const App = lazy(() => import("./App.jsx"));

const LazyLoad = () => {
  nProgress.configure({ showSpinner: false }); // Spinnerni o'chirish
  nProgress.configure({ speed: 500 }); // Progress tezligini sozlash
  useEffect(() => {
    nProgress.start();
    return () => {
      nProgress.done();
    };
  }, []);
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<LazyLoad />}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </Suspense>
  </StrictMode>
);
