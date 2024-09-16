import { Products, SectionTitle } from "@/components";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.value);
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
    <div className="container">
      <SectionTitle
        title={"WISHLIST"}
        className={"mb-[55px] mt-[72px] text-center"}
      />
      <Products data={wishlist} loading={false} />
      {wishlist.length === 0 && (
        <div className="text-center">
          <h1 className="text-[24px] font-bold font-satoshi">
            Wishlist is empty
          </h1>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
