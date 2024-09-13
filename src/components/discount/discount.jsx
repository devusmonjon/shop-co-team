import { CloseICon } from "@/icons";
import { useState } from "react";

const Discount = () => {
  const [show, setShow] = useState(true);
  const [isHiding, setIsHiding] = useState(false);

  const handleClose = () => {
    setIsHiding(true);
    setTimeout(() => {
      setShow(false);
      isHiding && setIsHiding(false);
    }, 300);
  };
  return (
    <div
      className={`w-full h-[38px] flex items-center bg-black dark:bg-[#fff] relative duration-300 ${
        isHiding ? "min-h-0" : "opacity-100"
      } ${show ? "" : "hidden"}`}
      style={{
        height: isHiding ? 0 : "38px",
      }}
    >
      <h1
        title="Sign up and get 20% off to your first order."
        className="text-[#fff] dark:text-[#000] text-center w-full relative z-10"
      >
        Sign up and get 20% off to your first order.{" "}
        <a href="#" className="underline underline-offset-4">
          Sign Up Now
        </a>
      </h1>
      <div className="absolute w-full h-[38px]">
        <div className="container text-white flex items-center justify-end left-0 top-0 h-full">
          <button
            className="text-white relative z-20"
            title="Close"
            onClick={handleClose}
          >
            <CloseICon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discount;
