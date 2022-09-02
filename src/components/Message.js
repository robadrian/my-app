import React from "react";

const Message = (props) => {
  return <p className={`mt-5 mb-5 ${props.className}`}>{props.message}</p>;
};

export default Message;
