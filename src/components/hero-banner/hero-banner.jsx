import React from "react";
import img1 from "../../assets/images/grid-1.png";
import img2 from "../../assets/images/grid-2.png";
import img3 from "../../assets/images/grid-3.png";
import img4 from "../../assets/images/grid-4.png";
const HeroBanner = () => {
  return (
    <div className="container">
      <div className="mx-[16px] mt-20  bg-[#F0F0F0] rounded-3xl  dark:border px-5 py-[70px]">
        <div className="wrapper max-w-[45rem] lg:max-w-[90rem]">
          <div className="wrapper ">
            <h2 className="lg:text-4xl md:text-4xl sm:text-4xl text-[30px] text-center font-bold font-integral">BROWSE BY DRESS STYLE</h2>
            <div className="grid lg:grid-cols-5 gap-4 mt-16">
              <div style={{ backgroundImage: `url(${img1})` }} className="bg-no-repeat bg-right-top py-7 px-9 rounded-xl bg-white min-h-[288px] col-span-3 lg:col-span-2">
                <h3 className="text-4xl font-bold">Casual</h3>
              </div>
              <div style={{ backgroundImage: `url(${img2})` }}  className="bg-no-repeat bg-right-top py-7 px-9 rounded-xl bg-white min-h-[288px] col-span-3" >
                <h3 className="text-4xl font-bold">Formal</h3>
              </div>
              <div style={{ backgroundImage: `url(${img3})` }} className="bg-no-repeat bg-right-top py-7 px-9 rounded-xl bg-white min-h-[288px] col-span-3" >
                <h3 className="text-4xl font-bold">Party</h3>
              </div>
              <div style={{ backgroundImage: `url(${img4})` }} className="bg-no-repeat bg-right-top py-7 px-9 rounded-xl bg-white min-h-[288px]  col-span-3 lg:col-span-2" >
                <h3 className="text-4xl font-bold">Gym</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;