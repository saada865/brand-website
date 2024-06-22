import React from "react";
import img5 from "/Users/saadahmadmalik/Documents/Coding/Web Development/REACT****/frontend-practice-2/my-porject/src/assets/pexels-stephen-noulton-421904730-15511422.jpg";
import img2 from "/Users/saadahmadmalik/Documents/Coding/Web Development/REACT****/frontend-practice-2/my-porject/src/assets/pexels-efrem-efre-2786187-25758512.jpg";

const Header = () => {
  return (
    <div className="">
      <div className=" mt-80 flex flex-col items-center text-center">
        <h2 className=" text-7xl font-medium">Hey I'm Oli</h2>
        <div className=" flex justify-evenly  mt-32">
          <img
            className=" hidden xl:block h-[500px] w-[650px] rounded-2xl mr-4"
            src={img5}
            alt="img"
          />
          <img
            className="h-[500px] w-[650px] rounded-2xl"
            src={img2}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
