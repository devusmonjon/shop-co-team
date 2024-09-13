import React from "react";
import { IoIosStar } from "react-icons/io";
import svg from "../../assets/images/Frame.svg";
import { SectionTitle } from "..";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
const SwiperContainer = () => {
  return (
    <div>
      <div className="container">
        <SectionTitle
          title={"OUR HAPPY CUSTOMERS"}
          className={"mb-[55px] mt-[72px]"}
        />
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          modules={[Autoplay]}
          autoplay={{
            disableOnInteraction: true,
            delay: 2000,
            enabled: true,
          }}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <div className="border rounded-xl h-[190px]">
              <div className="flex ml-5 mt-5">
                <IoIosStar className="text-yellow-300" />
                <IoIosStar className="text-yellow-300" />
                <IoIosStar className="text-yellow-300" />
                <IoIosStar className="text-yellow-300" />
                <IoIosStar className="text-yellow-300" />
              </div>
              <div className="flex ml-5 mt-1">
                <p className="font-bold text-xl">Sarah M.</p>
                <img src={svg} alt="" />
              </div>
              <p className="flex ml-5 mt-1 mb-5 mr-5">
                "I'm blown away by the quality and style of the clothes I
                received from Shop.co. From casual wear to elegant dresses,
                every piece I've bought has exceeded my expectations.”
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border rounded-xl h-[190px]">
              <div className="flex ml-5 mt-5">
                <IoIosStar className="text-yellow-300" />
                <IoIosStar className="text-yellow-300" />
                <IoIosStar className="text-yellow-300" />
                <IoIosStar className="text-yellow-300" />
                <IoIosStar className="text-yellow-300" />
              </div>
              <div className="flex ml-5 mt-1">
                <p className="font-bold text-xl">Alex K.</p>
                <img src={svg} alt="" />
              </div>
              <p className="flex ml-5 mt-1 mb-5 mr-5">
                "Finding clothes that align with my personal style used to be a
                challenge until I discovered Shop.co. The range of options they
                offer is truly remarkable, catering to a variety of tastes and
                occasions.”
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border rounded-xl h-[190px]">
              <div className="flex ml-5 mt-5">
                <IoIosStar className="text-yellow-300" />
                <IoIosStar className="text-yellow-300" />
                <IoIosStar className="text-yellow-300" />
                <IoIosStar className="text-yellow-300" />
                <IoIosStar className="text-yellow-300" />
              </div>
              <div className="flex ml-5 mt-1">
                <p className="font-bold text-xl">James L.</p>
                <img src={svg} alt="" />
              </div>
              <p className="flex ml-5 mt-1 mb-5 mr-5">
                "As someone who's always on the lookout for unique fashion
                pieces, I'm thrilled to have stumbled upon Shop.co. The
                selection of clothes is not only diverse but also on-point with
                the latest trends.”
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border rounded-xl h-[190px]">
              <div className="flex ml-5 mt-5">
                <IoIosStar className="text-yellow-300" />
                <IoIosStar className="text-yellow-300" />
                <IoIosStar className="text-yellow-300" />
                <IoIosStar className="text-yellow-300" />
                <IoIosStar className="text-yellow-300" />
              </div>
              <div className="flex ml-5 mt-1">
                <p className="font-bold text-xl">Sarah M.</p>
                <img src={svg} alt="" />
              </div>
              <p className="flex ml-5 mt-1 mb-5 mr-5">
                "I'm blown away by the quality and style of the clothes I
                received from Shop.co. From casual wear to elegant dresses,
                every piece I've bought has exceeded my expectations.”
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border rounded-xl h-[190px]">
              <div className="flex ml-5 mt-5">
                <IoIosStar className="text-yellow-300" />
                <IoIosStar className="text-yellow-300" />
                <IoIosStar className="text-yellow-300" />
                <IoIosStar className="text-yellow-300" />
                <IoIosStar className="text-yellow-300" />
              </div>
              <div className="flex ml-5 mt-1">
                <p className="font-bold text-xl">Alex K.</p>
                <img src={svg} alt="" />
              </div>
              <p className="flex ml-5 mt-1 mb-5 mr-5">
                "Finding clothes that align with my personal style used to be a
                challenge until I discovered Shop.co. The range of options they
                offer is truly remarkable, catering to a variety of tastes and
                occasions.”
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border rounded-xl h-[190px]">
              <div className="flex ml-5 mt-5">
                <IoIosStar className="text-yellow-300" />
                <IoIosStar className="text-yellow-300" />
                <IoIosStar className="text-yellow-300" />
                <IoIosStar className="text-yellow-300" />
                <IoIosStar className="text-yellow-300" />
              </div>
              <div className="flex ml-5 mt-1">
                <p className="font-bold text-xl">James L.</p>
                <img src={svg} alt="" />
              </div>
              <p className="flex ml-5 mt-1 mb-5 mr-5">
                "As someone who's always on the lookout for unique fashion
                pieces, I'm thrilled to have stumbled upon Shop.co. The
                selection of clothes is not only diverse but also on-point with
                the latest trends.”
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperContainer;
