import { Products, SectionTitle } from "@/components";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.value);
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
