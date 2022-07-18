import React from "react";
import Image from "next/image";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Button } from "@material-tailwind/react";
import { navbarData } from "./navbarData";
import WhatsApp from "./whatsapp";

export const navLinks = navbarData.map((pages, index) => (
  <ScrollLink
    // activeClass="active"
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

const Navbar = ({ menuOpen, setMenuOpen }) => (
  <div className="flex justify-between p-6 px-4">
    <div className="flex justify-between items-center w-full">
      {/* App header */}
      <div className="w-1/2 xl:w-1/3">
        <a className="block max-w-max" href="#">
          <Image
            src="/img/logo-avaluo.svg"
            width={170}
            height={100}
            quality={100}
            alt=""
          />
        </a>
      </div>
      <div className="w-1/2 xl:w-1/3">
        <nav className="hidden md:block space-x-6 ">{navLinks}</nav>
      </div>

      {/* Links shown in a row on larger screens */}

      {/* Button to toggle mobile menu shown on smaller screens */}

      <div className="w-1/2 xl:w-1/3">
        <div className="hidden xl:flex items-center justify-end">
          <Button
            color="green"
            className="inline-block py-2 px-4 text-sm leading-5 text-green-50 bg-green-500 hover:bg-green-600 font-medium focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md"
          >
            <a href="https://api.whatsapp.com/send?phone=+525524857429&text=Hola%20quisiera%20m%C3%A1s%20informaci%C3%B3n">
              Agenda tu llamada
            </a>
          </Button>
        </div>
      </div>
      <button
        type="button"
        aria-label="Toggle mobile menu"
        onClick={() => setMenuOpen(!menuOpen)}
        className="rounded md:hidden focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50"
      >
        {/* <MenuAlt4Svg menuOpen={menuOpen} /> */}
      </button>
    </div>
  </div>
);



export default Navbar;
