import { Route, Routes } from "react-router-dom";
import { Layout } from "./layouts";
import "./assets/fonts/fonts.css";
import { Button } from "@/components";
// import CountUp from "react-countup";

const App = () => {
  return (
    <>
      {/* <CountUp end={100} duration={5} /> */}
      <div className="w-full h-screen flex items-center justify-center">
        <Button variant="primary">Button</Button>
      </div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h1>Welcome</h1>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
