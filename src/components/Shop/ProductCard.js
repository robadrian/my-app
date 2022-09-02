import React, { useEffect, useState } from "react";
import { HiShoppingCart } from "react-icons/hi";

const ProductCard = (props) => {
  const [shake, setShake] = useState("");
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (counter === 0) {
      setShake("animate-shake");
    } else {
      setCounter((prevCount) => prevCount - 1);
    }
  };

  useEffect(() => {
    if (shake) {
      setTimeout(() => setShake(""), 500);
    }
  }, [shake]);

  return (
    <div
      className={`flex flex-col ${shake} p-2 mt-20 w-[300px] h-[440px] shadow-3xl mr-10 rounded-lg mb-20 border-solid border-2 border-black bg-white`}
    >
      <div className="w-fit h-inherit ml-auto mr-auto flex justify-center">
        <img
          src={props.image}
          className="w-[200px] h-[250px] rounded-lg p-2"
          alt="product iamge"
        />
      </div>
      <div className="text-center">
        <p className="mt-4 text-xl">Price: {props.price}</p>
        <p className="mt-4 text-xl text-center truncate w-[90%]">
          {props.desc}
        </p>
        <p>Total: {counter * props.price}$</p>
      </div>
      <div className="flex flex-row text-2xl mt-4 p-1 sticky  h-20 bottom-0 items-center justify-around">
        <button onClick={decrement}>-</button>
        <p className={counter > 0 && " w-8 h-8 text-center"}>{counter}</p>
        <button onClick={increment}>+</button>
        <HiShoppingCart className="hover:animate-elevate hover:cursor-pointer w-10 h-10" />
      </div>
    </div>
  );
};

export default ProductCard;
