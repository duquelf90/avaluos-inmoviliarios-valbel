import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import ChatBlock from "./chatBlock";
import { useState } from "react";
import LogoImg from "./logo";

export const navbarData = [
  { title: "Inicio", slug: "home" },
  { title: "Avalúos", slug: "avaluos" },
  { title: "Precios", slug: "precios" },
  { title: "Contáctanos", slug: "contacto" },
  { title: "Preguntas Frecuentes", slug: "faq" },
];

export const navLinks = navbarData.map((pages, index) => (
  <ScrollLink
    className="text-coolGray-500 hover:text-coolGray-900 font-medium"
    to={pages.slug}
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    key={index}
  >
    {pages.title}
  </ScrollLink>
));

const MobileNav = ({ open, setOpen }) => {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-10/12 bg-white transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-center filter bg-white h-20"></div>
      <div className="flex flex-col ml-4 py-10">{navLinks}</div>
    </div>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="container top-0 z-50 fixed p-3 px-4 w-full bg-white">
      <nav className="flex justify-center items-center w-full">
        <div className="flex w-full md:w-1/3 xl:w-1/3 justify-center md:justify-start">
          <LogoImg w="185" h="45" />
        </div>
        <div className="hidden w-1/2 md:w-5/6 xl:w-5/6  md:flex xl:flex space-x-6 justify-center">
          {/* <nav className="hidden md:flex xl:flex space-x-6 justify-center"> */}
          {navLinks}
          {/* </nav> */}
        </div>
        <div className="hidden xl:flex xl:w-1/3  lg:flex items-center justify-end">
          {/* <div className="hidden xl:flex md:flex items-center justify-end"> */}
          <ChatBlock style="inline-block py-2 px-4 text-sm leading-5 text-green-50 bg-green-500 hover:bg-green-600 font-medium focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md">
            Agenda tu llamada
          </ChatBlock>
          {/* </div> */}
        </div>
        <div
          className="flex w-8 h-4 flex-col justify-between items-center lg:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>
      </nav>

      <MobileNav open={open} setOpen={setOpen} />
    </nav>
  );
};
export default Navbar;
