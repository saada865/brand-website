import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="mt-8 mb-48 flex flex-col  items-center text-center justify-start">
      <nav
        className=" flex flex-row bg-[#e8e5e480]
       items-center text-center justify-evenly rounded-3xl
     h-12 w-80 text-sm mb-20 fixed backdrop-blur-md"
      >
        <ul className=" flex">
          <li>
            <Link to="/">
              <p className="font-light">Home</p>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <p className="font-light px-10">About</p>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <p className="font-light ">Contact</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
