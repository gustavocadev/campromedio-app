import React from "react";
import { useLocation } from "react-router-dom";
import homeBuho from "../../assets/img/homeBuho.png";
import contactoBuho from "../../assets/img/contactoBuho.png";

const Footer = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <footer className="mt-[10px] ">
      <header className="flex justify-center">
        <h3 className="py-[24px] text-[16px] font-semibold text-center">
          CAMPROMEDIO &copy; 2021
        </h3>
      </header>

      <figure className="flex justify-end mt-[-94px] mr-[-80px] relative z-50">
        {pathname === "/" ? (
          <img
            src={homeBuho}
            alt="Buho con varita magica"
            className="w-[233px] mt-[-208px]"
          />
        ) : (
          <img
            src={contactoBuho}
            alt="Buho con su celular"
            className="w-[200px] mt-[-138px]"
          />
        )}
      </figure>
    </footer>
  );
};

export default Footer;
