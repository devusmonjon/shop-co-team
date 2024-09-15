import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "..";
import { AccountIcon, CartIcon, DwopdownIcon, SearchIcon } from "@/icons";
import { Dropdown, Space } from "antd";
import { useGetProductsQuery } from "@/context/api/productApi";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [search, setSearch] = useState("");

  const { data, isLoading, isError } = useGetProductsQuery({ search });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const items = [
    {
      key: "1",
      label: "Usmonjon",
    },
    {
      key: "3",
      label: "Otabek",
      disabled: false,
    },
    {
      key: "4",
      danger: false,
      label: "Madina",
    },
  ];

  const navigate = useNavigate();

  let { wishlist, cart } = useSelector((state) => state);
  wishlist = wishlist.value;
  cart = cart.value;
  return (
    <>
      {search.trim() && (
        <div
          className="overlay fixed bg-transparent w-full h-full top-0 left-0 -z-10"
          onClick={() => setSearch("")}
        ></div>
      )}
      <nav
        className={`sticky top-0 z-[100] py-[24px] duration-300 flex items-center ${
          scrollY > 38 ? "bg-white py-[14px] shadow-xl" : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between gap-[40px]">
          <Link to={"/"} className="text-[32px] font-bold font-integral">
            SHOP.CO
          </Link>
          <ul className="hidden lg:flex items-center gap-[24px] whitespace-nowrap">
            <li>
              <Dropdown
                menu={{
                  items,
                }}
              >
                <a
                  onClick={(e) => e.preventDefault()}
                  className="cursor-pointer text-black text-[16px]"
                >
                  <Space>
                    Shop
                    <DwopdownIcon />
                  </Space>
                </a>
              </Dropdown>
            </li>
            <li>
              <Link to={"#"} className="cursor-pointer text-black text-[16px]">
                On Sale
              </Link>
            </li>
            <li>
              <Link to={"#"} className="cursor-pointer text-black text-[16px]">
                New Arrivals
              </Link>
            </li>
            <li>
              <Link to={"#"} className="cursor-pointer text-black text-[16px]">
                Brands
              </Link>
            </li>
          </ul>
          <form
            className={`form hidden sm:flex items-center bg-[#f0eeed] px-[16px] w-full relative ${
              search.trim().length > 0
                ? "rounded-t-[22px] border-b-2 border-gray-400"
                : "rounded-[62px]"
            }`}
          >
            <Button type="submit" className={"rounded-full"}>
              <SearchIcon />
            </Button>
            <input
              type="text"
              className="w-full h-[48px] rounded-[62px] border-none outline-none pl-[12px] text-black bg-transparent"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            {search.trim().length > 0 && (
              <div
                className={`shadow-lg absolute top-[50px] left-0 w-full h-[30vh] bg-[#f0eeed] rounded-b-[22px] py-[16px] ${search}`}
              >
                <div className="w-full h-full overflow-y-auto px-[16px]">
                  <ul>
                    {!isLoading ? (
                      !isError ? (
                        data?.map((product) => (
                          <li
                            key={product._id}
                            className="border-b border-gray-400 pb-[2px] mb-[2px] last-of-type:mb-0"
                          >
                            <Link
                              to={`/products/${product._id}`}
                              onClick={() => setSearch("")}
                              className="text-black py-2 inline-block w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 duration-300 ring-offset-transparent rounded-xl"
                            >
                              {product.title}
                            </Link>
                          </li>
                        ))
                      ) : (
                        <>Not found...</>
                      )
                    ) : (
                      <>Loading...</>
                    )}
                  </ul>
                </div>
              </div>
            )}
          </form>
          <div className="flex items-center gap-[14px]">
            <Button
              onClick={() => navigate("/wishlist")}
              title="Wishlist"
              className={"relative"}
            >
              {wishlist.length > 0 && (
                <span className="absolute top-[-7.5px] right-[-7.5px] w-[15px] h-[15px] shadow-lg bg-red-500 rounded-full text-white text-[12px] flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
              {wishlist.length > 0 ? (
                <FaHeart size={20.8} color="red" />
              ) : (
                <FaRegHeart size={20.8} />
              )}
            </Button>
            <Button
              onClick={() => navigate("/cart")}
              title="Cart"
              className={"relative"}
            >
              {cart.length > 0 && (
                <span className="absolute top-[-10px] right-[-10px] w-[20px] h-[20px] bg-red-500 rounded-full text-white text-[12px] flex items-center justify-center">
                  {cart.length}
                </span>
              )}
              <CartIcon />
            </Button>
            <Button onClick={() => navigate("/dashboard")}>
              <AccountIcon />
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
