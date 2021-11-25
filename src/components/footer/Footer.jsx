import React from "react";
import { useLocation } from "react-router-dom";
import homeBuho from "../../assets/img/homeBuho.png";
import contactoBuho from "../../assets/img/contactoBuho.png";

const Footer = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <footer className="mt-[40px] ">
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
            className="w-[283px] mt-[-118px]"
          />
        ) : (
          <img
            src={contactoBuho}
            alt="Buho con su celular"
            className="w-[250px]"
          />
        )}
      </figure>
    </footer>
  );
};

export default Footer;
