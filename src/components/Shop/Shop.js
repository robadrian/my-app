import React from "react";

import CategoriesContainer from "./CategoriesContainer";
import products from "../../data/products.json";
import Image1 from "../../assets/image1.jpg";
import ProductCard from "./ProductCard";

const Shop = () => {
  return (
    <>
      <div className="flex md:flex-row w-[100%] bg-slate-50 flex-wrap">
        <CategoriesContainer />
        <div className="w-[80%] ml-[500px] grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 justify-center">
          {products.map((item) => {
            return (
              <ProductCard image={Image1} price={item.price} desc={item.text} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Shop;
