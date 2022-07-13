import Image from "next/image";
import React from "react";

const CTA = () => {
  return (
    <section className="bg-white overflow-hidden wave-top wave-bottom">
      <div className="wave wave-top w-full text-coolGray-900">
        <svg
          viewBox="0 0 1440 116"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 64.5909H349.922C606.664 64.5909 859.771 -7.62939e-06 1080 -7.62939e-06C1300.23 -7.62939e-06 1440 64.5909 1440 64.5909V116H0V64.5909Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <div className="relative bg-coolGray-900">
        <div className="absolute top-0 left-0 ml-4 lg:ml-12 mt-4 md:mt-0 h-20 md:h-auto">
          <Image
            src="/elements/dots3-blue.svg"
            alt=""
            width={200}
            height={200}
          />
        </div>

        <div className="absolute bottom-0 right-0 mr-4 lg:mr-12 mb-4 md:mb-0 h-20 md:h-auto">
          <Image
            src="/elements/dots3-violet.svg"
            alt=""
            width={200}
            height={200}
          />
        </div>

        <div className="relative container px-4 mx-auto">
          <div className="xl:max-w-4xl py-16 mx-auto text-center">
            <h2 className="mb-4 text-3xl md:text-4xl font-heading font-bold text-white sm:mb-8">
              Avalúos comerciales urgentes en 24 horas
            </h2>
            <p className="mb-6 text-lg md:text-xl font-heading font-medium text-coolGray-400">
              En un plazo de 24hrs usted obtiene su avalúo comercial, fiscal o
              hipotecario. Pregunte costos y beneficios.
            </p>
            <a
              className="inline-block py-3 px-7 w-full md:w-auto text-lg leading-7 text-green-50 bg-green-500 hover:bg-green-600 font-medium text-center focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-transparent rounded-md shadow-sm"
              href="#"
            >
              Contactanos
            </a>
          </div>
        </div>
      </div>
      <div className="wave wave-bottom w-full text-coolGray-900">
        <svg
          viewBox="0 0 1440 116"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1440 51.4091H1090.08C833.336 51.4091 580.229 116 360 116C139.771 116 0 51.4091 0 51.4091V0H1440V51.4091Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default CTA;
