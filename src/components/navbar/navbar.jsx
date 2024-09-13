import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "..";
import { AccountIcon, CartIcon, DwopdownIcon, SearchIcon } from "@/icons";
import { Dropdown, Space } from "antd";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

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

  return (
    <nav
      className={`sticky top-0 z-[100] py-[24px] duration-300 flex items-center ${
        scrollY > 38 ? "backdrop-blur-xl py-[14px]" : "bg-transparent"
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
        <form className="form hidden sm:flex items-center bg-[#f0eeed] rounded-[62px] px-[16px] w-full">
          <Button type="submit" className={"rounded-full"}>
            <SearchIcon />
          </Button>
          <input
            type="text"
            className="w-full h-[48px] rounded-[62px] border-none outline-none pl-[12px] text-black bg-transparent"
            placeholder="Search"
          />
        </form>
        <div className="flex items-center gap-[14px]">
          <Button>
            <CartIcon />
          </Button>
          <Button>
            <AccountIcon />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
