import Image from "next/image";
import React from "react";
import ChatBlock from "./chatBlock";
import CheckIcon from "./checkIcon";

const CardPrice = (props) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <div className="flex flex-col pt-8 pb-8 bg-white rounded-md shadow-md hover:scale-105 transition duration-500">
        <div className="px-8 pb-8">

          <div className={`mb-6 items-center justify-between ${props.popular ? 'flex flex-wrap ' : ''}`}>
            <h3 className="text-1xl md:text-2xl lg:text-2xl   text-coolGray-800 font-medium text-center mr-3 uppercase">
              {props.title}
            </h3>

            {props.popular ? (
              <span className="lg:ml-3 md:ml-3 inline-block py-px px-2 text-xs leading-5 text-white bg-yellow-500 font-medium uppercase rounded-9xl text-left">
                {props.popular}{" "}
              </span>
            ) : (
              <></>
            )}
          </div>

          <div className="mb-6 text-center">
            <span className="inline-block ml-1 text-coolGray-500 font-semibold">
              desde
            </span>

            <span className="relative -top-10 right-1 text-3xl text-coolGray-900 font-bold">
              {props.percent ? <span className="mr-1"></span> : "$"}
            </span>

            <span className="text-6xl md:text-7xl text-coolGray-900 font-semibold text-right">
              {props.price}
            </span>
            <span className="text-coolGray-900 font-semibold text-2xl">
              {props.percent ? <span className="mr-1">por millar</span> : null}
            </span>
          </div>
          <p className="mb-2 text-red-500 font-bold text-xl text-center">
            {props.location}
          </p>
        </div>
        <div className="border-b border-coolGray-100"></div>
        <ul className="self-center px-8 pt-8 pb-8 ">
          <li className="flex items-center mb-2 text-coolGray-500 font-small text-center">
            <CheckIcon />
            
            <span>{props.fees ? 'No' : null } aplica viaticos y estancias</span>
          </li>
        </ul>
        <div className="border-b border-coolGray-100"></div>
        <div className="px-8 pt-8">
          <ChatBlock style="inline-block py-4 px-7 w-full text-base md:text-lg leading-6 text-green-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm">
            Cotizar
          </ChatBlock>
        </div>
      </div>
    </div>
  );
};

export default CardPrice;
