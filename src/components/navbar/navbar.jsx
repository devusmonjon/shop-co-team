import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0">
      <div className="container">
        <Link to={"/"} className="text-[32px] font-bold font-integral">
          SHOP.CO
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
