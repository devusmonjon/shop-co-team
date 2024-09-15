import ReactStars from "react-stars";
import { FaCartPlus, FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "@/context/slices/wishlistSlice";
import { Button } from "..";
import { CartIcon } from "@/icons";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { addToCart, removeFromCart } from "@/context/slices/cartSlice";

const Product = ({ product }) => {
  const { _id, title, price, old_price, images, rating } = product;
  const deicountPercentage = Math.round(100 - (price * 100) / old_price);
  // console.log(deicountPercentage);
  const dispatch = useDispatch();
  let { wishlist, cart } = useSelector((state) => state);
  wishlist = wishlist.value;
  cart = cart.value;
  // console.log(wishlist);

  return (
    <div className="relative product w-[90%]">
      <div className="heart-icon duration-300 lg:opacity-0 absolute top-[15px] right-[15px] z-50 flex items-center gap-3 pointer-events-none">
        <Button
          title="Add to cart"
          onClick={() => {
            if (cart.some((item) => item._id === _id)) {
              dispatch(removeFromCart(product));
            } else {
              dispatch(addToCart(product));
            }
          }}
        >
          {cart.some((item) => item._id === _id) ? (
            <MdOutlineRemoveShoppingCart size={22.8} />
          ) : (
            <CartIcon />
          )}
        </Button>
        <Button
          className=""
          title="Add to wishlist"
          onClick={() => dispatch(toggleWishlist(product))}
        >
          {wishlist.some((item) => item._id === _id) ? (
            <FaHeart size={20} color="red" />
          ) : (
            <FaRegHeart size={20} />
          )}
        </Button>
      </div>
      <div className="overflow-hidden rounded-[20px] w-full h-[298px] bg-[#f0eeed]">
        <Link to={`/products/${_id}`}>
          <img
            src={images[0]}
            alt={title}
            className="w-full h-full object-contain object-center duration-300 hover:scale-105"
          />
        </Link>
      </div>
      <Link to={`/products/${_id}`}>
        <h3
          className="text-black dark:text-white text-[18px] font-bold font-satoshi mt-[16px]"
          title={title}
        >
          {title}
        </h3>
      </Link>
      <div className="flex items-center">
        <ReactStars
          value={rating}
          color1="#fff"
          activeColor="#ffd700"
          size={22}
          edit={false}
        />
        <span className="text-[14px] font-normal">
          {rating}/<span className="text-[#00000099]">5</span>
        </span>
      </div>
      <div className="flex gap-[10px] items-center">
        <span className="font-bold text-[24px]">${price}</span>

        {deicountPercentage > 0 && (
          <>
            <span className="text-[#00000066] font-bold text-[24px] line-through">
              ${old_price}
            </span>
            <span
              className="text-[12px] font-medium text-[#f33] bg-[#ff33331a] rounded-[62px] py-[6px] px-[16px]"
              title={`${deicountPercentage}% off`}
            >
              -{deicountPercentage}%
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default Product;
