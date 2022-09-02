import React from "react";

const Image = (props) => {
  return (
    <img
      src={props.src}
      className={`rounded-xl mt-2 mb-2 ${props.className}`}
      alt={props.alt}
    />
  );
};

export default Image;
