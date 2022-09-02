import React from "react";

import NavButton from "./NavButton";

import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav
      style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
      className="flex flex-row justify-around ml-auto mr-auto p-4 w-1/2 rounded-b-3xl"
    >
      <Link to="/">
        <NavButton title="HOME" />
      </Link>
      <Link to="/about">
        <NavButton title="ABOUT" />
      </Link>
      <Link to="/shop">
        <NavButton title="SHOP" />
      </Link>
    </nav>
  );
};

export default Navigation;
