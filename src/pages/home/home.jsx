import { Hero, HeroBanner, Products, SectionTitle, Button } from "@/components";
import { useGetProductsQuery } from "@/context/api/productApi";
import Swiper from "@/components/swiper/swiper";

const Home = () => {
  const { data: products, isLoading } = useGetProductsQuery({
    limit: 4,
    page: 1,
  });
  const { data: products2, isLoading: isLoading2 } = useGetProductsQuery({
    limit: 4,
    page: 2,
  });
  return (
    <>
      <Hero />
      <section>
        <div className="container">
          <SectionTitle
            title={"NEW ARRIVALS"}
            className={"mb-[55px] mt-[72px] text-center"}
          />
          <Products data={products} loading={isLoading} />
          <div className="text-center mt-[36px]">
            <Button variant={"outline"}>View All</Button>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <SectionTitle
            title={"TOP SELLING"}
            className={"mb-[55px] mt-[72px] text-center"}
          />
          <Products data={products2} loading={isLoading2} />
          <div className="text-center mt-[36px]">
            <Button variant={"outline"}>View All</Button>
          </div>
        </div>
      </section>
      <HeroBanner/>
      <Swiper/>
    </>
  );
};

export default Home;
