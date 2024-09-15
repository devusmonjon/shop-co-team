import { Button } from "@/components";
import { useGetProductByIdQuery } from "@/context/api/productApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import ReactStars from "react-stars";
import { DecrementIcon, IncrementIcon } from "@/icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/context/slices/cartSlice";

const Product = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetProductByIdQuery(id);
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
    <div className="container">
      <div className="flex gap-[40px]">
        <div className="w-[610px] h-[530px] flex justify-between">
          <div className="h-[530px] w-[160px] overflow-y-auto scroll-hide">
            <div className="px-[4px] w-full flex flex-col gap-2 ">
              {data?.images.map((item, idx) => (
                <Button
                  onClick={() => setImage(idx)}
                  disabled={image === idx}
                  className={`min-h-[152px] w-[152px] rounded-[20px] overflow-hidden ${
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
          <div className="w-[444px] h-full overflow-hidden rounded-[20px] bg-[#f0eeed]">
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
          <h1 className="text-[40px] font-bold font-integral">{data?.title}</h1>
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
    </div>
  );
};

export default Product;
