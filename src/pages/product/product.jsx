import { Button, Products, SectionTitle } from "@/components";
import {
  useGetProductByIdQuery,
  useGetProductsQuery,
} from "@/context/api/productApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import ReactStars from "react-stars";
import { ConfirmIcon, DecrementIcon, IncrementIcon } from "@/icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/context/slices/cartSlice";

import { IoIosStar } from "react-icons/io";
import { GiSettingsKnobs } from "react-icons/gi";

const Customer = () => {
  const [selected, setSelected] = useState(0);
  const [reviews, setReviews] = useState([
    {
      name: "James L.",
      review:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      rating: 5,
    },
    {
      name: "James L.",
      review:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      rating: 5,
    },
    {
      name: "James L.",
      review:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      rating: 5,
    },
    {
      name: "Sarah M.",
      review: "Great collection! Absolutely loved the shopping experience.",
      rating: 4,
    },
    {
      name: "Michael B.",
      review: "Fast delivery and top-notch quality products!",
      rating: 5,
    },
    {
      name: "Anna K.",
      review: "Loved the range of products. Will shop again!",
      rating: 4,
    },
    {
      name: "John D.",
      review: "A bit pricey, but the quality is worth it.",
      rating: 4,
    },
    {
      name: "Emily R.",
      review: "Beautiful designs and fast delivery!",
      rating: 5,
    },
    {
      name: "Robert C.",
      review: "Good customer service and high-quality items.",
      rating: 5,
    },
    {
      name: "Laura G.",
      review: "The best online store I've ever shopped at!",
      rating: 5,
    },
  ]);

  const { id } = useParams();
  const { data, isLoading } = useGetProductByIdQuery(id);

  return (
    <div>
      <div className="container w-full flex items-center justify-between mt-[70px]">
        {["Product Details", "Rating & Reviews", "FAQs"].map((item, index) => (
          <Button
            key={index}
            onClick={() => setSelected(index)}
            className={`text-[20px] transition-all cursor-pointer h-full py-2 border-b w-full whitespace-nowrap focus:ring-transparent focus:border-b-slate-700 ${
              selected === index && "border-b-black"
            }`}
          >
            {item}
          </Button>
        ))}
      </div>

      {selected === 0 ? (
        <>
          <div className="container">
            <p className="text-[22px] font-bold py-10 text-[#00000099]">
              <span className="text-black">Product desc: </span>
              {data?.desc}
            </p>
          </div>
        </>
      ) : selected === 1 ? (
        <>
          <div className="container w-full py-2 mt-[44px] flex items-center justify-between">
            <p className="font-bold text-[22px]">
              All Reviews <span className="font-normal text-[16px]">(451)</span>
            </p>

            <div className="flex items-center gap-3">
              <Button variant={"secondary"} className="px-[10px] text-black">
                <GiSettingsKnobs size={20.8} />
              </Button>
              <select
                className="h-[48px] w-[120px] bg-slate-100 flex items-center justify-center rounded-full pl-2"
                name=""
                id=""
              >
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
                <option value="X-Large">X-Large</option>
              </select>
              <Button variant={"outline"}>Write a Review</Button>
            </div>
          </div>
          <div className="container w-full mt-5 p-3 flex justify-center gap-5 flex-wrap">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="border rounded-xl w-full md:w-[48%] hover:cursor-pointer hover:shadow-md duration-300"
              >
                <div className="flex ml-5 mt-5">
                  {[...Array(review.rating)].map((_, i) => (
                    <IoIosStar key={i} className="text-yellow-300" />
                  ))}
                </div>
                <div className="flex items-center ml-5 mt-1">
                  <p className="font-bold text-xl">{review.name}</p>
                  {/* <img
                src={imges}
                alt="user-avatar"
                className="ml-2 w-10 rounded-full object-cover"
              /> */}
                  <ConfirmIcon />
                </div>
                <p className="ml-5 mt-1 mb-5 mr-5">{review.review}</p>
              </div>
            ))}

            <div className="w-full flex items-center justify-center mt-2">
              <Button variant={"outline"}>Load More Reviews</Button>
            </div>
          </div>
        </>
      ) : (
        <div className="container">
          <p className="text-[22px] font-bold py-10 text-[#00000099]">
            <span className="text-black">FAQS</span>
          </p>
        </div>
      )}
    </div>
  );
};

const Product = () => {
  const { id } = useParams();
  const { data } = useGetProductByIdQuery(id);
  const { data: products, isLoading } = useGetProductsQuery({
    limit: 4,
    page: 2,
  });
  const [image, setImage] = useState(0);
  const [count, setCount] = useState(1);
  const deicountPercentage = Math.round(
    100 - (data?.price * 100) / data?.old_price
  );

  const dispatch = useDispatch();
  let { wishlist, cart } = useSelector((state) => state);
  wishlist = wishlist.value;
  cart = cart.value;

  useEffect(() => {
    setImage(0);
    // smooth scroll
    const smoothScroll = () => {
      const c = document.documentElement.scrollTop || document.body.scrollTop;
      if (c > 0) {
        window.requestAnimationFrame(smoothScroll);
        window.scrollTo(0, c - c / 8);
      }
    };
    smoothScroll();
  }, [data]);
  return (
    <div className="container mt-10">
      <div className="flex gap-[40px] lg:flex-row flex-col">
        <div className="lg:w-[610px] lg:h-[530px] flex justify-between flex-col lg:flex-row items-center">
          <div className="min-h-[175px] h-[175px] lg:h-[160px] lg:min-h-[530px] w-full sm:w-[550px] lg:w-[160px] overflow-x-auto lg:overflow-y-auto scroll-hide">
            <div className="px-[4px] w-full flex flex-row lg:flex-col gap-2 ">
              {data?.images.map((item, idx) => (
                <Button
                  onClick={() => setImage(idx)}
                  disabled={image === idx}
                  className={`min-h-[152px] min-w-[152px] rounded-[20px] overflow-hidden ${
                    image === idx
                      ? "border-[2px] border-[#000] pointer-events-none"
                      : ""
                  }`}
                  key={item}
                >
                  <img
                    src={item}
                    alt={data?.title}
                    className="w-full h-full object-contain bg-[#f0eeed] hover:scale-105 duration-300"
                  />
                </Button>
              ))}
            </div>
          </div>
          <div className="w-full sm:w-[550px] lg:w-[444px] h-full overflow-hidden rounded-[20px] bg-[#f0eeed]">
            <Zoom>
              <img
                src={data?.images[image]}
                alt={data?.title}
                className="w-full h-full object-contain hover:scale-105 duration-300"
              />
            </Zoom>
          </div>
        </div>
        <div className="details w-full">
          <h1 className="text-[22px] sm:text-[28px] lg:text-[40px] font-bold font-integral">
            {data?.title}
          </h1>
          <div className="flex items-center gap-2">
            <ReactStars
              value={data?.rating}
              edit={false}
              size={24}
              color1="transparent"
            />
            <span className="text-[16px] font-normal">
              {data?.rating}/<span className="text-[#00000099]">5</span>
            </span>
          </div>
          <div className="flex gap-[10px] items-center">
            <span className="font-bold text-[34px]">${data?.price}</span>

            {deicountPercentage > 0 && (
              <>
                <span className="text-[#00000066] font-bold text-[32px] line-through">
                  ${data?.old_price}
                </span>
                <span
                  className="text-[16px] font-medium text-[#f33] bg-[#ff33331a] rounded-[62px] py-[6px] px-[16px]"
                  title={`${deicountPercentage}% off`}
                >
                  -{deicountPercentage}%
                </span>
              </>
            )}
          </div>
          <p className="pt-[20px] pb-[24px] text-[#00000099] leading-[24px] text-[16px] border-b border-b-[#0000001a] w-full">
            {data?.desc}
          </p>
          <div className="py-[24px] border-b border-b-[#0000001a]">
            <span className="text-[#00000099] pb-4 inline-block">
              Select Colors
            </span>
            <div className="flex gap-2">
              {data?.colors.map((item, idx) => (
                <Button
                  key={item}
                  className="w-[24px] h-[24px] rounded-full"
                  style={{ backgroundColor: item }}
                ></Button>
              ))}
            </div>
          </div>
          <div className="py-[24px] border-b border-b-[#0000001a]">
            <span className="text-[#00000099] pb-4 inline-block">
              Select Size
            </span>
            <div className="flex gap-2">
              {data?.sizes.map((item, idx) => (
                <Button variant={"secondary"} key={item}>
                  {item}
                </Button>
              ))}
            </div>
          </div>
          <div
            className={`py-[24px] flex ${
              cart.some((item) => item._id === id) ? "" : "gap-[20px]"
            } select-none`}
          >
            <div
              className={`flex gap-2 items-center bg-[#F0F0F0] min-w-min w-min px-[16px] py-[10px] duration-300 rounded-[62px] ${
                cart.some((item) => item._id === id)
                  ? "min-w-[0px!important] px-0 w-[0!important] overflow-hidden"
                  : ""
              }`}
            >
              <Button
                onClick={() => setCount((prev) => prev - 1)}
                disabled={count < 1}
              >
                <DecrementIcon />
              </Button>
              <span className="px-4">{count}</span>
              <Button onClick={() => setCount((prev) => prev + 1)}>
                <IncrementIcon />
              </Button>
            </div>
            <Button
              variant={"primary"}
              className={
                "w-full disabled:opacity-80 disabled:pointer-events-none"
              }
              disabled={count < 1}
              onClick={() => {
                if (cart.some((item) => item._id === id)) {
                  dispatch(removeFromCart(data));
                } else {
                  dispatch(addToCart({ ...data, quantity: count }));
                }
                setCount(1);
              }}
            >
              {cart.some((item) => item._id === id)
                ? "Remove from cart"
                : "Add to cart"}
            </Button>
          </div>
        </div>
      </div>
      <Customer />
      <SectionTitle
        title={"You might also like"}
        className={"text-center mt-[64px] mb-[55px]"}
      />
      <Products data={products} loading={isLoading} />
    </div>
  );
};

export default Product;
