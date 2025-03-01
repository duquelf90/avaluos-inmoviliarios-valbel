import CardTypes from "components/cardTypes";
import React from "react";

const TypeSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="xl:max-w-4xl mb-12 mx-auto text-center">
          <h1 className="m-auto text-3xl md:text-4xl leading-tight font-bold tracking-tighter">
            Tipos de Inmuebles
          </h1>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 lg:pt-6 mb-8 lg:mb-0">
            <CardTypes
              title="Casas"
              sub="Avalúos para conocer el valor de un hogar y departamentos
                multipropietarios"
              img="house.svg"
            />

            <CardTypes
              title="hospitales"
              sub="Avalúos para centros médicos como hospitales"
              img="hopital.svg"
            />
          </div>
          <div className="w-full md:w-1/2  lg:pt-6 px-4">
            <CardTypes
              title="Locales comerciales"
              sub="Avalúos de tiendas, accesorias y locales comerciales"
              img="comercial.svg"
            />
            <CardTypes
              title="Hoteles"
              sub="Avalúos para hoteles, hostales, renta temporal de propiedades"
              img="hotel.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypeSection;
