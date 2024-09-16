import { Button, SectionTitle } from "@/components";
import { removeFromCart } from "@/context/slices/cartSlice";
import { useEffect } from "react";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    // smooth scroll
    const smoothScroll = () => {
      const c = document.documentElement.scrollTop || document.body.scrollTop;
      if (c > 0) {
        window.requestAnimationFrame(smoothScroll);
        window.scrollTo(0, c - c / 8);
      }
    };
    smoothScroll();
  }, [location.pathname]);
  return (
    <>
      <div className="container">
        <SectionTitle title={"Cart"} className="my-10 text-center" />
        <div className="flex flex-col gap-5">
          {cart.map((item) => (
            <div
              className="flex gap-5 items-center w-full p-5 rounded-[20px] bg-[#f0eeed]"
              key={item._id}
            >
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-[100px] h-[100px] object-cover rounded-[20px]"
              />
              <h1 className="text-[18px] sm:text-[20px] lg:text-[24px] font-bold font-integral text-[#000] w-full">
                {item.title}
              </h1>
              <p className="text-[16px] sm:text-[20px] lg:text-[24px] font-bold">
                ${item.price}
              </p>
              <p className="text-[16px] sm:text-[20px] lg:text-[24px] font-bold">
                {item.quantity}
              </p>
              <Button
                title="Remove"
                onClick={() => dispatch(removeFromCart(item))}
                className="text-[16px] sm:text-[20px] lg:text-[24px] font-bold"
              >
                <MdOutlineRemoveShoppingCart size={22.8} />
              </Button>
            </div>
          ))}
          {cart.length === 0 && (
            <h1 className="text-center text-[28px] sm:text-[40px]">
              Cart is empty
            </h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
