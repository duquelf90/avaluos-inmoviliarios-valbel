import CardPrice from "components/cardPrice";
import React from "react";

const Prices = () => {
  return (
    <section className="py-20 xl:py-24 bg-coolGray-900 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="text-center">
          <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-9xl">
            Precios
          </span>
          <h3 className="mb-4 text-3xl md:text-5xl text-white font-bold tracking-tighter">
            Nuestros precios son flexibles
          </h3>

          <div className="flex mb-12 mx-auto max-w-max border border-coolGray-800 overflow-hidden rounded-md shadow-lg"></div>
        </div>
        <div className="flex flex-wrap justify-center -mx-4">
          <CardPrice title="Ciudad de Mexico" price="2500" />
          <CardPrice title="Resto de México" price="3500" />
        </div>
      </div>
    </section>
  );
};

export default Prices;
