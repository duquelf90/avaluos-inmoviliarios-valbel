import Image from "next/image";
import React from "react";

const Numbers = () => {
  return (
    <div className="py-20 xl:pt-24 xl:pb-32 bg-coolGray-900 bg-center">
      <div className="container px-4 mx-auto">
        <div className="text-center">
          <h3 className="mb-4 text-4xl md:text-5xl text-white font-bold tracking-tighter">
            Creemos en los datos
          </h3>

          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8 lg:mb-0">
              <h2 className="mb-2 text-4xl md:text-5xl text-white font-bold tracking-tighter">
                +10000
              </h2>
              <p className="text-lg md:text-xl text-coolGray-400 font-medium">
                Avaluos
              </p>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8 lg:mb-0">
              <h2 className="mb-2 text-4xl md:text-5xl text-white font-bold tracking-tighter">
                +3000
              </h2>
              <p className="text-lg md:text-xl text-coolGray-400 font-medium">
                Clientes
              </p>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8 lg:mb-0">
              <h2 className="mb-2 text-4xl md:text-5xl text-white font-bold tracking-tighter">
                +8000
              </h2>
              <p className="text-lg md:text-xl text-coolGray-400 font-medium">
                Escrituraciones
              </p>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4 px-4">
              <h2 className="mb-2 text-4xl md:text-5xl text-white font-bold tracking-tighter">
                15000
              </h2>
              <p className="text-lg md:text-xl text-coolGray-400 font-medium">
                Peritajes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
