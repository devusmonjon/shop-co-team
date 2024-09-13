import { Route, Routes } from "react-router-dom";
import { Layout } from "./layouts";
import "./assets/fonts/fonts.css";
import { Home } from "./pages";

import "swiper/css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
