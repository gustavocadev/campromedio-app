import React from "react";
import { useLocation } from "react-router-dom";
import homeBuho from "../../assets/img/homeBuho.png";
import contactoBuho from "../../assets/img/contactoBuho.png";

const Footer = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <footer className="mt-[40px] ">
      <span></span>
      <h3 className="py-[24px] text-[16px]  text-center font-semibold">
        CAMPROMEDIO &copy; 2021
      </h3>
      {pathname === "/" ? (
        <figure className="absolute bottom-[-400px] sm:bottom-0 right-0">
          <img
            src={homeBuho}
            alt="Buho con varita magica"
            className="w-[283px] hidden md:block"
          />
        </figure>
      ) : (
        <figure className="absolute bottom-0 right-0">
          <img
            src={contactoBuho}
            alt="Buho con su celular"
            className="w-[250px] hidden md:block"
          />
        </figure>
      )}
    </footer>
  );
};

export default Footer;
