import React from "react";

const Header = () => {
  return (
    <div className=" flex flex-col  items-center text-center justify-center">
      {/* <div className=""> */}

      {/* </div> */}
      <div className="mx-96 ">
        <div className=" text-6xl text-center">
          <h1>A brand and product designer working with clients globally</h1>
        </div>
        <div className=" flex justify-evenly mt-10 text-sm">
          <div className=" bg-[#e8e5e480] rounded-3xl py-1 px-2">Expertise</div>
          <div className=" bg-[#e8e5e480] rounded-3xl py-1 px-2">Brading</div>
          <div className=" bg-[#e8e5e480] rounded-3xl py-1 px-2">Product</div>
          <div className=" bg-[#e8e5e480] rounded-3xl py-1 px-2">
            Design Systems
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
