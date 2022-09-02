import React from "react";

import Image1 from "../../assets/image1.jpg";
import ShopImage from "../../assets/shop-image.webp";
import Logo from "../../assets/Logo.png";

import ShopButton from "../ShopButton";
import Image from "../Image";
import Message from "../Message";

const Home = () => {
  return (
    <>
      <div className="flex justify-around flex-col flex-wrap md:flex-row items-center p-5">
        <Image src={Image1} className="md:w-1/2" />
        <div>
          <Message
            message="Quality is our middle name!"
            className="ml-auto mr-auto text-5xl md:mt-10 animate-blitz lg:mt-24 text-center font-message-font"
          />
          <Message
            message="Our clothes are recognized worldwide for their quality and style."
            className="mr-auto ml-auto text-2xl font-text-font text-center mt-20"
          />
          <Message
            message="Haina nu-l face pe om =)) "
            className="mr-auto ml-auto text-2xl font-text-font text-center mt-10"
          />
          <Message
            message="I am not into marketing therefore I do not know what to write"
            className="mr-auto ml-auto text-2xl font-text-font text-center mt-20"
          />
          <ShopButton
            title="Go To Shop >"
            className="border-solid border-2 border-red mt-10 lg:mt-60"
          />
          <Image
            src={Logo}
            className="mr-auto animate-blitz ml-auto mt-10 md:mt-20"
          />
        </div>
      </div>
      <div className="flex justify-around flex-col flex-wrap md:flex-row items-center p-5">
        <div className="ml-auto mr-auto">
          <Message
            message="Visit our shop"
            className="md:mt-10 ml-auto mr-auto animate-blitz text-center text-5xl font-message-font lg:mt-24"
          />
          <Message
            message="Make a trip to our physical shop and explore your new self"
            className="md:mt-10 ml-auto mr-auto text-2xl font-text-font lg:mt-24"
          />
          <ShopButton
            title="Go To Shop >"
            className="border-solid border-2 border-red mt-10 mb-10 lg:mt-60"
          />
        </div>
        <Image
          src={ShopImage}
          className="mr-auto ml-auto w-[90%] lg:w-1/2 md:1/2"
        />
      </div>
    </>
  );
};

export default Home;
