import ReactStars from "react-stars";
import { FaRegHeart } from "react-icons/fa";

const Product = ({ product: { title, price, old_price, images, rating } }) => {
  const deicountPercentage = Math.round(100 - (price * 100) / old_price);
  console.log(deicountPercentage);

  return (
    <div className="relative product w-[90%]">
      <button className="heart-icon duration-300 lg:opacity-0 absolute top-[15px] right-[15px] z-50">
        <FaRegHeart size={20} />
      </button>
      <div className="overflow-hidden rounded-[20px] w-full h-[298px] bg-[#f0eeed]">
        <img
          src={images[0]}
          alt={title}
          className="w-full h-full object-contain object-center duration-300 hover:scale-105"
        />
      </div>
      <h3
        className="text-black dark:text-white text-[18px] font-bold font-satoshi mt-[16px]"
        title={title}
      >
        {title}
      </h3>
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
