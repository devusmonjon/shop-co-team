import { CgMail } from "react-icons/cg";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import rasm from "../../assets/images/Frame 53.png";

const Footer = () => {
  return (
    <div className="footer pt-10">
      <div className=" flex  lg:flex-row md:flex-row sm:flex-row lg:justify-between container mx-auto px-5  bg-black mt-4 rounded-[20px] py-9 dark:bg-white dark:text-black  ">
        <div>
          <p className=" text-5xl font-[900]  text-white dark:text-black">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS{" "}
          </p>
        </div>
        <div className="w-1/3">
          <div className=" p-2 bg-white  flex items-center rounded-[60px] py-1 px-5 dark:bg-black dark:text-white ">
            <CgMail className="text-5xl  dark:text-white" />
            <input
              type="text"
              className=" text-zinc-500 w-full text-[17px] py-2 px-2  dark:bg-black dark:text-white"
              placeholder="
 Enter your email address"
            />
          </div>
          <button className="footer__btn hero__btn w-full  py-2 mt-3 px-2 rounded-[60px] text-xl   bg-white dark:bg-black dark:text-white ">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
      <div className="bg-[#F0F0F0] dark:bg-black py-[50px]">
        <div className="footer__bottom container mx-auto px-5 mt-5 justify-between flex flex-wrap">
          <div className="footer__card px-[20px] mt-[20px]">
            <p className="dark:text-white text-5xl font-[900] navbar__logo">
              SHOP.CO
            </p>
            <p className="w-[310px] my-5 footer__item">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>

            <div className="flex">
              <button className="">
                <AiFillTwitterCircle className="text-3xl mx-2" />
              </button>
              <button className="">
                <FaFacebook className="text-3xl mx-2" />
              </button>
              <button className="">
                <BsInstagram className="text-3xl mx-2" />
              </button>
              <button className="">
                <FaGithub className="text-3xl mx-2" />
              </button>
            </div>
          </div>

          <div className="footer__card px-[20px] mt-[20px]">
            <p className="footer__title text-3xl font-[700]">Company</p>
            <p className="footer__text mt-5 text-xl">About</p>
            <p className="footer__text mt-5 text-xl">Features</p>
            <p className="footer__text mt-5 text-xl">Works</p>
            <p className="footer__text mt-5 text-xl">Career</p>
          </div>

          <div className="footer__card px-[20px] mt-[20px]">
            <p className="footer__title text-3xl font-[700]">Help</p>
            <p className="footer__text mt-5 text-xl">Customer Support</p>
            <p className="footer__text mt-5 text-xl">Delivery Details</p>
            <p className="footer__text mt-5 text-xl">Terms & Conditions</p>
            <p className="footer__text mt-5 text-xl">Privacy Policy</p>
          </div>

          <div className="footer__card px-[20px] mt-[20px]">
            <p className="footer__title text-3xl font-[700]">FAQ</p>
            <p className="footer__text mt-5 text-xl">Account</p>
            <p className="footer__text mt-5 text-xl">Manage Deliveries</p>
            <p className="footer__text mt-5 text-xl">Orders</p>
            <p className="footer__text mt-5 text-xl">Payments</p>
          </div>

          <div className="footer__card px-[20px] mt-[20px]">
            <p className="footer__title text-3xl font-[700]">Resources</p>
            <p className="footer__text mt-5 text-xl">Free eBooks</p>
            <p className="footer__text mt-5 text-xl">Development Tutorial</p>
            <p className="footer__text mt-5 text-xl">How to - Blog</p>
            <p className="footer__text mt-5 text-xl">Youtube Playlist</p>
          </div>
        </div>
      </div>
      <hr className="w-full" />
      <div className="bg-[#F0F0F0] py-5 text-black dark:bg-black">
        <div className="flex flex-col md:flex-row justify-between items-center container mx-auto px-5 py-6 bg-[#F0F0F0] text-white dark:bg-black">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className=" text-black dark:text-white dark:bg-black">
              Shop.co © 2000-2023, All Rights Reserved
            </p>
          </div>
          <div className="bottom flex gap-4 flex-wrap justify-center md:justify-start mb-4 md:mb-0">
            <p className="text-xl text-black dark:text-white">как</p>
            <p className="text-xl text-black dark:text-white">ты</p>
            <p className="text-xl text-black dark:text-white">там</p>
          </div>
          <div className="flex gap-2 justify-center md:justify-start">
            <img src={rasm} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
