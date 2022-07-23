import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section className="py-24 md:pb-32 bg-white bg-center" id="avaluos">
      <div className="container px-4 mx-auto">
        <div className="md:max-w-4xl mb-12 mx-auto text-center">
          <h1 className="mb-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter">
            Tipos de Avalúos Inmobiliarios
          </h1>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
              <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center">
                <Image src="/img/icon/catastral.svg" width={60} height={60} alt="catastrales"/>
              </div>
              <h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">
                Comercial
              </h3>
              <p className="text-coolGray-500 font-medium">
                Avalúo de inmuebles con fines comerciales.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
            <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center">
                <Image src="/img/icon/bancarios.svg" width={60} height={60} alt="bancarios"/>
              </div>
              <h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">
                Hipotecario
              </h3>
              <p className="text-coolGray-500 font-medium">
                Avalúos dirigidos para el trámite de créditos con garantía
                hipotecaria ante cualquier institución financiera.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
            <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center">
                <Image src="/img/icon/fiscales.svg" width={60} height={60} alt="Avalúo fiscal"/>
              </div>
              <h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">
                Fiscales
              </h3>
              <p className="text-coolGray-500 font-medium">
                Avalúos de inmuebles que quedarán depositados como garantía de
                un crédito fiscal o dación en pago.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
            <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center">
                <Image src="/img/icon/judicial.svg" width={60} height={60} alt="Avalúo judicial"/>
              </div>
              <h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">
                Judiciales
              </h3>
              <p className="text-coolGray-500 font-medium">
                Avalúos para trámites judiciales de herencias, testamentos,
                divorcios, controversias judiciales o terceros en discordia.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
            <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center">
                <Image src="/img/icon/catastral.svg" width={60} height={60} alt="Avalúo catastral"/>
              </div>
              <h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">
                Catastrales
              </h3>
              <p className="text-coolGray-500 font-medium">
                Avalúos para determinar el pago del impuesto predial o para
                determinar las obligaciones fiscales ante las autoridades
                fiscales.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
            <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center">
                <Image src="/img/icon/dominio.svg" width={60} height={60} alt="Traslado de dominio"/>
              </div>
              <h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">
                Traslado de Dominio
              </h3>
              <p className="text-coolGray-500 font-medium">
                Avalúo para determinar el pago de impuestos sobre adquisición de
                inmuebles cuando se adquiere por compra herencia o donación una
                propiedad
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
