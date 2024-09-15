import { Route, Routes, useLocation } from "react-router-dom";
import { Layout } from "./layouts";
import "./assets/fonts/fonts.css";
import { Home } from "./pages";

import "swiper/css";
import Product from "./pages/product/product";
import nProgress from "nprogress";
import { useEffect } from "react";
import Cart from "./pages/cart/cart";
import Wishlist from "./pages/wishlist/wishlist";

const App = () => {
  return (
    <>
      <ProgressBar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products/:id" element={<Product />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route
          path="*"
          element={
            <Layout>
              <h1 className="container text-xl lg:text-2xl xl:text-3xl font-bold font-integral text-center py-64">
                <span className="font-satoshi font-black">4</span>0
                <span className="font-satoshi font-black">4 - </span> not found
              </h1>
            </Layout>
          }
        />
      </Routes>
    </>
  );
};

// Sahifalar o'zgarganda yuklanishni boshqaruvchi komponent
function ProgressBar() {
  const location = useLocation();

  nProgress.configure({ showSpinner: false, speed: 500, easing: "ease" }); // Spinnerni o'chirish

  useEffect(() => {
    nProgress.start(); // Sahifa yuklanishni boshlaganda

    // Sahifa to'liq yuklanib bo'lgandan keyin
    nProgress.done();

    return () => {
      nProgress.done(); // Sahifa o'zgarganda tozalash
    };
  }, [location]); // location o'zgarganda qayta ishlaydi

  return null;
}

export default App;
