import ChatBlock from "components/chatBlock";
import Image from "next/image";
import React from "react";

const Steps = () => {
  return (
    <>
      <section className="py-24 bg-white overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="flex items-center mx-auto ">
              <div className="py-12">
                <Image
                  src="/img/eeee.svg"
                  width={400}
                  alt="question"
                  height={400}
                  unoptimized={true}
                  type="image/svg+xml"
                />
              </div>
            </div>
            <div className="md:max-w-4xl mb-12 mx-auto text-center ">
              <h1 className="mb-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter pb-5">
                ¿Qué necesito para solicitar un avalúo?
              </h1>
              <div className="flex flex-wrap -mx-4 text-center md:text-left">
                <div className="w-full md:w-1/2 px-4 mb-8">
                  <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-green-500 font-semibold rounded-full">
                    1
                  </div>
                  <h3 className="mb-2 text-xl font-bold">FORMULARIO</h3>
                  <p className="font-medium text-coolGray-500">
                    Rellenar el formulario de contacto o marcarnos al
                    5524857429, dónde un ejecutivo lo atenderá.
                  </p>
                </div>
                <div className="w-full md:w-1/2 px-4 mb-8">
                  <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-green-500 font-semibold rounded-full">
                    2
                  </div>
                  <h3 className="mb-2 text-xl font-bold">COTIZACIÓN</h3>
                  <p className="font-medium text-coolGray-500">
                    Usted recibirá una cotización ya sea por correo electrónico
                    o whatsapp, donde se establece el alcance del servicio,
                    tiempos de entrega y entregables.
                  </p>
                </div>
                <div className="w-full md:w-1/2 px-4 mb-8">
                  <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-green-500 font-semibold rounded-full">
                    3
                  </div>
                  <h3 className="mb-2 text-xl font-bold">PROCESO</h3>
                  <p className="font-medium text-coolGray-500">
                    Si acepta el costo de nuestro servicio, se agenda una cita a
                    su inmueble.
                  </p>
                </div>
                <div className="w-full md:w-1/2 px-4">
                  <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-green-500 font-semibold rounded-full">
                    4
                  </div>
                  <h3 className="mb-2 text-xl font-bold">FINAL</h3>
                  <p className="font-medium text-coolGray-500">
                    A partir de la visita al inmueble y la entrega de la
                    documentación requerida dependiendo el tipo de avalúo, usted
                    recibira en un plazo de 24 a 72hrs máximo, el avalúo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container px-4 mx-auto pb-10">
        <div className="max-w-4xl mx-auto text-center">
          <ChatBlock style="inline-block py-3 px-7 w-full md:w-auto text-lg leading-7 text-green-50 bg-green-500 hover:bg-green-600 font-medium text-center focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-transparent rounded-md shadow-sm">
            Cotiza ahora!
          </ChatBlock>
        </div>
      </div>
    </>
  );
};

export default Steps;
