import React from "react";
import { Product } from "..";
const Products = ({ data, loading }) => {
  return (
    <div className="products grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] place-items-center">
      {loading && <p>Loading...</p>}
      {data?.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Products;
