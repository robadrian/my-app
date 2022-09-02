import React from "react";

import Image from "../Image";

import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";

const SocialMedia = () => {
  return (
    <div className="flex w-[100%] md:w-[40%] mt-10 md:mt-0 justify-around">
      <a
        href="https://www.facebook.com/login/"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={Facebook} className="w-20 mt-2" />
      </a>
      <a
        href="https://www.instagram.com/accounts/login/"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={Instagram} className="w-20 mt-2" />
      </a>
    </div>
  );
};

export default SocialMedia;
