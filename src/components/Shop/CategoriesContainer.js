import React from "react";

const data = [
  "Jackets and coats",
  "Trousers and shorts",
  "Underwear",
  "Suits",
  "Skirts and dresses",
  "Shoes",
  "boots and slippers",
  "Parts of shoes",
  "Sweaters and waistcoats",
];

const CategoriesContainer = (props) => {
  return (
    <div className="flex flex-col w-[100%] md:fixed text-center content-center mt-[5%] md:text-left mb-10 md:w-[20%]">
      <div>
        <h2 className="ml-2 mt-4 mb-2">MEN</h2>
        {data.map((item) => (
          <h3 className="ml-4 mb-2">{item}</h3>
        ))}
      </div>
      <div>
        <h2 className="ml-2 mt-4 mb-2">WOMEN</h2>
        {data.map((item) => (
          <h3 className="ml-4 mb-2">{item}</h3>
        ))}
      </div>
    </div>
  );
};

export default CategoriesContainer;
