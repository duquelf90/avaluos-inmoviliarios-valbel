import Image from "next/image";
import React from "react";
import CheckIcon from "./checkIcon";

const CardPrice = (props) => {
  return (
    <div className="w-full md:w-1/2 p-4">
      <div className="flex flex-col pt-8 pb-8 bg-white rounded-md shadow-md hover:scale-105 transition duration-500">
        <div className="flex items-center justify-between px-8">
          <div>
            <h3 className="text-2xl md:text-3xl text-coolGray-800 font-semibold tracking-tighter">
              {props.title}
            </h3>
            <p className="text-coolGray-400 font-medium">desde</p>
          </div>
          <div>
            <span className="relative right-1 text-3xl text-coolGray-900 font-bold sm:-top-5 lg:-top-10 md:-top-5">
              $
            </span>
            <span className="text-coolGray-900 font-semibold tracking-tighter text-6xl md:text-4xl lg:text-6xl">
              {props.price}
            </span>
          </div>
        </div>
        <div className="border-b border-coolGray-100"></div>
        <ul className="self-start px-8 pt-8 pb-16">
          <li className="flex items-center mb-4 text-coolGray-500 font-medium">
            <CheckIcon />
            <span>Access to all features</span>
          </li>
          <li className="flex items-center mb-4 text-coolGray-500 font-medium">
            <CheckIcon />
            <span>Assisted onboarding support</span>
          </li>
          <li className="flex items-center mb-4 text-coolGray-500 font-medium">
            <CheckIcon />
            <span>CPM Overage: Unlimited</span>
          </li>
        </ul>
        <div className="border-b border-coolGray-100"></div>
        <div className="px-8 pt-8">
          <a
            className="inline-block py-4 px-7 w-full text-base md:text-lg leading-6 text-green-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
            href="#"
          >
            Cotizar
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardPrice;
