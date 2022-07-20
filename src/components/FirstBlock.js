import Image from "next/image";
import React from "react";
import ChatBlock from "./chatBlock";

const FirstBlock = () => { 

  return (
    <div className="py-28 xl:py-48 md:py-48">
      <div className="container px-10 mx-auto">
        <div className="flex flex-wrap xl:items-center -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
            <h1 className="mb-6 text-3xl md:text-5xl lg:text-5xl leading-tight font-bold tracking-tight text-center md:text-left lg:text-left">
              ¿Estas a punto de vender o comprar un inmueble?
            </h1>
            <p className="mb-8 text-lg md:text-xl text-coolGray-500 font-medium text-center md:text-left lg:text-left">
              ¿Quieres estar seguro que el precio es el justo?
            </p>
            <div className="flex flex-wrap">
              <div className="w-full md:w-auto py-1 md:py-0 md:mr-4">
                <ChatBlock style="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-green-50 font-medium text-center focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-green-500 rounded-md shadow-sm bg-gray-800 hover:bg-red-600 uppercase">
                  nosotros te ayudamos!
                </ChatBlock>
              </div>
              <div className="w-full md:w-auto py-1 md:py-0"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="relative lg:mx-auto md:mr-0 max-w-max">
              <div className="absolute z-10 -left-14 -top-12 w-28 md:w-auto">
                <Image
                  src="/elements/circle3-yellow.svg"
                  alt=""
                  width={150}
                  height={150}
                />
              </div>
              <div className="absolute z-10 -right-7 -bottom-8 w-28 md:w-auto">
                <Image
                  src="/elements/dots3-blue.svg"
                  alt=""
                  width={150}
                  height={100}
                />
              </div>
              <Image src={"/img/ww.png"} alt="" width={650} height={320} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstBlock;
