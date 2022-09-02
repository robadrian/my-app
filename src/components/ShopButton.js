import React from "react";

const ShopButton = (props) => {
  return (
    <button
      className={`p-5 text-center w-[100%] font-button-font text-3xl ${props.className}`}
    >
      {props.title}
    </button>
  );
};

export default ShopButton;
