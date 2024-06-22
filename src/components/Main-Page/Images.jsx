import React from "react";
// import img1 from "/Users/saadahmadmalik/Documents/Coding/Web Development/REACT****/frontend-practice-2/my-porject/src/assets/pexels-adria-masi-461420600-20808045.jpg";
// import img2 from "/Users/saadahmadmalik/Documents/Coding/Web Development/REACT****/frontend-practice-2/my-porject/src/assets/pexels-efrem-efre-2786187-25758512.jpg";
// import img3 from "/Users/saadahmadmalik/Documents/Coding/Web Development/REACT****/frontend-practice-2/my-porject/src/assets/pexels-esrannuur-129682465-18627914.jpg";
// import img4 from "/Users/saadahmadmalik/Documents/Coding/Web Development/REACT****/frontend-practice-2/my-porject/src/assets/pexels-fahribagirov-17400783.jpg";
// import img5 from "/Users/saadahmadmalik/Documents/Coding/Web Development/REACT****/frontend-practice-2/my-porject/src/assets/pexels-stephen-noulton-421904730-15511422.jpg";
// import img6 from "/Users/saadahmadmalik/Documents/Coding/Web Development/REACT****/frontend-practice-2/my-porject/src/assets/pexels-thomas-balabaud-735585-12824811.jpg";
// import img4 from ".././assets/pexels-fahribagirov-17400783.jpg";
// import img6 from "../assets/pexels-thomas-balabaud-735585-12824811.jpg";
import img6 from "../assets/pexels-thomas-balabaud-735585-12824811.jpg";
import img4 from "../assets/pexels-fahribagirov-17400783.jpg";

const Images = () => {
  return (
    <div className="flex flex-col my-32">
      <div className="mx-4 flex justify-evenly">
        <img
          className=" lg:h-[500px] lg:w-[650px] rounded-2xl "
          src={img4}
          alt=""
        />
        <img
          className="hidden xl:block h-[500px] w-[650px] rounded-2xl "
          src={img6}
          alt=""
        />
      </div>
      <div className="mx-4 flex justify-evenly">
        <img
          className=" lg:h-[500px] lg:w-[650px] rounded-2xl my-4"
          src={img4}
          alt=""
        />
        <img
          className=" hidden xl:block h-[500px] w-[650px] rounded-2xl my-4"
          src={img6}
          alt=""
        />
      </div>
      <div className=" mx-4 flex justify-evenly">
        <img
          className=" lg:h-[500px] lg:w-[650px] rounded-2xl"
          src={img4}
          alt=""
        />
        <img
          className=" hidden xl:block h-[500px] w-[650px] rounded-2xl"
          src={img6}
          alt=""
        />
      </div>
      <div className="mx-4 flex justify-evenly">
        <img
          className=" lg:h-[500px] lg:w-[650px] rounded-2xl my-4"
          src={img4}
          alt=""
        />
        <img
          className=" hidden xl:block h-[500px] w-[650px] rounded-2xl my-4"
          src={img6}
          alt=""
        />
      </div>
    </div>
  );
};

export default Images;
