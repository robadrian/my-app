import React from "react";

import Contacts from "./Contacts";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <footer className="p-10 bottom-0 flex w-[100%] justify-around flex-wrap border-t-2 sticky bg-white items-center border-t-black">
      <Contacts />
      <SocialMedia />
      <iframe
        className="w-[100%] md:w-[10%] mt-10 md:mt-0 h-[200px]"
        title="adress"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40140.853159423285!2d21.036923181472773!3d51.03825316749345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4718142991998103%3A0xd060229300b403f2!2sStarachowice%2C%20Poland!5e0!3m2!1sen!2sro!4v1662034501639!5m2!1sen!2sro"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </footer>
  );
};

export default Footer;
