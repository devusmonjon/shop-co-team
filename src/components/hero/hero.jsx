import { HeroStar, HeroStarLarge } from "@/icons";
import React from "react";
// import imges1 from "../../assets/Vector.svg";
// import imges2 from "../../assets/Vector (1).svg";
import CountUp from "react-countup";
import { Button } from "..";
const Hero = () => {
  return (
    <>
      <div className="bg-[#F2F0F1]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="flex gap-[20px] md:gap-[32px] lg:gap-[32px] flex-col mt-[103px]">
            <p className="font-integral font-[700] text-[34px] sd:text-[42px] sm:text-[48px] md:text-[54px] lg:text-[60px] leading-[34px] sd:leading-[42px] sm:leading-[48px] md:leading-[54px] lg:leading-[64px]">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </p>
            <p className="text-[16px] text-[#00000098] font-[400] leading-[22px] max-w-[545px]">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <Button variant={"primary"} className={"w-min whitespace-nowrap"}>
              Shop Now
            </Button>
            <div className=" flex flex-wrap gap-[32px] justify-center">
              <div className="flex flex-col ">
                <p className="lg:text-[36px] sm:text-[36px] md:text-[36px] text-[24px]  font-[700] leading-normal ">
                  <CountUp start={0} end={200} duration={3.5} decimal="," />+
                </p>
                <p className="lg:text-[16px] md:text-[16px] sm:text-[15px] text-[12px] text-[#00000098] font-[400] leading-[22px]">
                  International Brands
                </p>
              </div>
              <hr className=" h-[50px] border" />
              <div className="flex flex-col ">
                <p className="lg:text-[36px] sm:text-[36px] md:text-[36px] text-[24px]  font-[700] leading-normal ">
                  <CountUp start={0} end={2000} duration={3.5} decimal="," />+
                </p>
                <p className="lg:text-[16px] md:text-[16px] sm:text-[15px] text-[12px] text-[#00000098] font-[400] leading-[22px]">
                  High-Quality Products
                </p>
              </div>
              <hr className=" h-[50px] lg:border" />
              <div className="flex flex-col ">
                <p className="lg:text-[36px] sm:text-[36px] md:text-[36px] text-[24px]  font-[700] leading-normal ">
                  <CountUp start={0} end={30000} duration={3.5} decimal="," />+
                </p>
                <p className="lg:text-[16px] md:text-[16px] sm:text-[15px] text-[12px] text-[#00000098] font-[400] leading-[22px]">
                  Happy Customers
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-[76px] right-0  lg:w-[104px] lg:h-[104px] md:w-[104px] md:h-[104px] sm:w-[96lg:px] sm:h-[9 sm:text-[36px] md:text-[36px] text-[24px] 6lg:px] w-[72px sm:text-[36px] md:text-[36px] text-[24px] ] h-[72px]">
              <HeroStarLarge />
            </div>
            <img
              className="lg:h-[663px]"
              src="https://s3-alpha-sig.figma.com/img/b26f/ea69/ccfd8aa5825862cdb9604a4fb4930464?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AIxHPlqvt1JJTi~JE7MvzDF4ZzyPMKYs~K~-wHR1jFLq3OvcTr6luN8EEbNfJParDhekIvuBG~FHiU1Fc5GRz2OyxV~MRR-r7X2A2axelTQu2RcAgJD~3HTs64w9bz3tPkSNeKEPLwxPbct5rQiYcPs7tsRsCcDuiI-sGruUNfYr6ZBjxQZrcAPPTokNcE3xI-bvWYsYG6EWY7Sxpj3c2aowx3P~3KELNnXN5zf3lcBXBy5SXW4HcXkb3ZWp6idrRjZveBFqSlU2HPXH8Ok81Dx5DJTnHVC9rOzImh7scR0eZ~pP8CtCxgGAprX5sv2j5xy~EVe0sRZ~-S-RqOIk3w__"
              alt=""
            />
            <div className="absolute top-[210px]">
              <div className="lg:w-[56px] lg:h-[56px] md:w-[56px] md:h-[56px] sm:w-[50px] sm:h-[50px] w-[42px] h-[42px]">
                <HeroStar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
