import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <section className="bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap pt-24 pb-12 -mx-4">
          <div className="w-full md:w-1/2 lg:w-4/12 px-4 mb-16 lg:mb-0">
            <a className="inline-block mb-4" href="#">
              <Image
                className=""
                src="/img/flex-ui-green-light.svg"
                alt=""
                height={50}
                width={50}
              />
            </a>
            <p className="text-base md:text-lg text-coolGray-500 font-medium w-45">
              Somos un grupo de profesionales y péritos evaluadores
              especializados en la realización de Avalúos Inmobiliarios.
            </p>
          </div>
          <div className="w-full md:w-1/4 lg:w-2/12 px-4 mb-16 lg:mb-0">
            <h3 className="mb-5 text-lg font-bold text-coolGray-900">
              Avaluos
            </h3>
            <ul>
              <li className="mb-4">
                <a
                  className="inline-block text-coolGray-500 hover:text-coolGray-600 font-medium"
                  href="#"
                >
                  Tipos de avalúos
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="inline-block text-coolGray-500 hover:text-coolGray-600 font-medium"
                  href="#"
                >
                  Precios
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="inline-block text-coolGray-500 hover:text-coolGray-600 font-medium"
                  href="#"
                >
                  Remates Hipotecarios
                </a>
              </li>
              <li>
                <a
                  className="inline-block text-coolGray-500 hover:text-coolGray-600 font-medium"
                  href="#"
                >
                  Avalúos de inmuebles
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 lg:w-2/12 px-4 mb-16 lg:mb-0">
            <h3 className="mb-5 text-lg font-bold text-coolGray-900">
              Soporte
            </h3>
            <ul>
              <li className="mb-4">
                <a
                  className="inline-block text-coolGray-500 hover:text-coolGray-600 font-medium"
                  href="#"
                >
                  Preguntas frecuentes
                </a>
              </li>
              <li>
                <a
                  className="inline-block text-coolGray-500 hover:text-coolGray-600 font-medium"
                  href="#"
                >
                  Contactanos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-b border-coolGray-100"></div>
      <p className="py-5 md:pb-16 text-sm text-coolGray-400 font-medium text-center">
        © 2022. Todos los derechos reservados
      </p>
    </section>
  );
};

export default Footer;
