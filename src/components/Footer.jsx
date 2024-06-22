import React from "react";
// import "boxicons";

const Footer = () => {
  return (
    <div className="flex justify-between m-8">
      <div className=" text-sm">
        <span>
          <box-icon color="black" name="registered" type="solid"></box-icon>
          @Oli Harris 2024
        </span>
      </div>
      <div className=" text-sm space-x-2">
        <a href="">Twitter</a>
        <a href="">Linkedin</a>
        <a href="">Mail</a>
      </div>
    </div>
  );
};

export default Footer;
