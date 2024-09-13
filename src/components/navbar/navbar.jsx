import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
  return (
    <nav
      className={`sticky top-0 z-[100] py-[24px] duration-300 flex items-center ${
        scrollY > 38 ? "backdrop-blur-xl py-[14px]" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center">
        <Link to={"/"} className="text-[32px] font-bold font-integral">
          SHOP.CO
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
