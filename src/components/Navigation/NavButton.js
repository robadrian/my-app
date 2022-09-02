import React from "react";

const NavButton = (props) => {
  return (
    <button
      className={`text-10 mr-2 ml-2 hover:text-gray-600 font-button-font transition-all ${props.className}`}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

export default NavButton;
