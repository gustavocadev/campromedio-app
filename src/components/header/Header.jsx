import React from "react";
import { NavLink, useParams } from "react-router-dom";
import math2 from "../../assets/img/campromedio.png";

const Header = () => {
  return (
    <header className="h-[97px]">
      <nav className="flex flex-col items-center justify-between h-full md:flex-row">
        <figure className="w-full sm:w-[450px]">
          <img src={math2} alt="Logo-Cam-Promedio" />
        </figure>
        <ul className="flex m-2 sm:m-0">
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive ? "text-[#ffbe76]" : ""
              }
              to="/"
            >
              <span className="font-bold text-[18px] uppercase">Home</span>
            </NavLink>
          </li>
          <li className="ml-[40px]">
            <NavLink
              className={(navData) =>
                navData.isActive ? "text-[#ffbe76]" : ""
              }
              to="/contacto"
            >
              <span className="font-bold text-[18px] uppercase ">Contacto</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
