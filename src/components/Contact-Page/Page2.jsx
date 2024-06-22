import React from "react";
import Contact from "./Contact";
import Footer from "../Footer";
// import Header from "./Header";

const Page2 = () => {
  return (
    <div className=" flex flex-col min-h-screen">
      <Contact />
      <div className="flex-grow"></div>
      <Footer />
    </div>
  );
};

export default Page2;
