import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import Image from "next/image";

export const ResponsiveNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return <div>ResponsiveNavbar</div>;
};

const Navbar = ({ menuOpen, setMenuOpen }) => (
    <div className="flex justify-between p-6 px-4">
      <div className="flex justify-between items-center w-full">
        {/* App header */}
        <div className="w-1/2 xl:w-1/3">
          <a className="block max-w-max" href="#">
            <Image
              className="h-8"
              src="/img/flex-ui-green-light.svg"
              objectFit="fill"
              // width={60}
              // height={60}
              // alt=""
            />
          </a>
        </div>
        <div className="w-1/6">
          <nav className="hidden md:block space-x-6 capitalize">{navLinks}</nav>
        </div>
  
        {/* Links shown in a row on larger screens */}
  
        {/* Button to toggle mobile menu shown on smaller screens */}
  
        <div className="w-1/2 xl:w-1/3">
            <div className="hidden xl:flex items-center justify-end">
              <Button
                color="green"
                className="inline-block py-2 px-4 text-sm leading-5 text-green-50 bg-green-500 hover:bg-green-600 font-medium focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md"
              >
                Whatsapp
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