import React from "react";
import { NavLink } from "react-router-dom";
import math2 from "../../assets/img/campromedio.png";

const Header = () => {
  return (
    <header className="h-[97px]">
      <nav className="flex items-center justify-between h-full">
        <figure className="hidden w-[450px] sm:block">
          <img src={math2} alt="" />
        </figure>
        <ul className="flex">
          <li>
            <NavLink
              className={(navData) => navData.isActive && "text-[#ffbe76]"}
              to="/"
            >
              <span className="font-bold text-[18px] uppercase">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => navData.isActive && "text-[#ffbe76]"}
              to="/contact"
            >
              <span className="font-bold text-[18px] uppercase pl-[40px]">
                Contact
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
