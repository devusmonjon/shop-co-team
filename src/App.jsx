import { Route, Routes } from "react-router-dom";
import { Layout } from "./layouts";
import "./assets/fonts/fonts.css";
import { Home } from "./pages";
// import CountUp from "react-countup";

const App = () => {
  return (
    <>
      {/* <CountUp end={100} duration={5} /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
