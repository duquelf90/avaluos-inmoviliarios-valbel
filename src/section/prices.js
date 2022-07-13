import CardPrice from "components/cardPrice";
import React from "react";

const cmdx = [
  "No aplica para avalúos especializados (Judiciales, Fiscales,Catastrales).",
];

const edo = [];

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

        </div>
        <div className="flex flex-wrap mb-12 justify-center -mx-4">
          <CardPrice title="Avaluos comerciales" location="Ciudad de México" price="2500" popular='Muy Popular' />
          <CardPrice title="Avaluos comerciales" location="Resto de la República Mexicana" price="3500" />
          <CardPrice title="Peritajes" price="2.5%" location="Toda la República Mexicana" percent={true}/>
        </div>
      </div>
    </section>
  );
};

export default Prices;
