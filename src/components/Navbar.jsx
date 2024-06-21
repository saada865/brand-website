import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" my-20 flex flex-col  items-center text-center justify-start">
      <div
        className=" flex bg-[#e8e5e480]
       items-center text-center justify-evenly rounded-3xl
     h-12 w-80 text-sm mb-20 fixed backdrop-blur-md"
      >
        <ul>
          <li>
            {/* <NavLink exact to="/"> */}
            Home
            {/* </NavLink> */}
          </li>
          <li>
            {/* <NavLink exact to="/Contact"> */}
            Contact
            {/* </NavLink> */}
          </li>
          <li>
            {/* <NavLink exact to="/Profile"> */}
            Profile
            {/* </NavLink> */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
