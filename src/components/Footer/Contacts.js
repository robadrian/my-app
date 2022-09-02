import React from "react";

const Contacts = (props) => {
  return (
    <div className={`${props.className}`}>
      <label htmlFor="email">E-Mail: </label>
      <h2 name="email">shopClothing@random.com</h2>
      <label htmlFor="phonenumber">Phone Number:</label>
      <h2 name="phonenumber">+67382163223</h2>
    </div>
  );
};

export default Contacts;
