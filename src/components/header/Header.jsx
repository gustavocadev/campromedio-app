import React from "react";
import { NavLink } from "react-router-dom";
import math2 from "../../assets/svg/math2.svg";

const Header = () => {
  return (
    <header className="h-[97px]">
      <nav className="flex items-center justify-between h-full">
        <figure className="hidden sm:block">
          <img src={math2} alt="" />
        </figure>
        <ul className="flex">
          <li>
            <NavLink className="font-bold text-[18px] uppercase" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="font-bold text-[18px] px-[40px] uppercase"
              to="/social"
            >
              Social
            </NavLink>
          </li>
          <li>
            <NavLink className="font-bold text-[18px] uppercase" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
