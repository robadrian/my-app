import React from "react";

import Group from "../../assets/group.jpg";

import Message from "../Message";
import Image from "../Image";

const About = () => {
  const description = `Our team is multicultural, from all over the world. Working hard people who make sure that our customers have the best experience.`;

  return (
    <>
      <Message
        message="Our Team"
        className="text-5xl text-center ml-auto mr-auto font-message-font border-b-2 border-black"
      />
      <div className="flex justify-around items-center flex-wrap">
        <Image src={Group} className="md:w-[40%] " />
        <Message
          message={description}
          className="md:w-[40%] md:text-3xl ml-auto mr-auto text-center font-text-font"
        />
      </div>
    </>
  );
};

export default About;
