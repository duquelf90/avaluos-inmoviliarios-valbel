import { AccordionBase } from "components/Acordion/acordion";

const accordionData = [
  {
    title: "¿Qué es un avalúo?",
    contents: (
      <>
        Es un estudio expresado en un documento, que estima el valor en unidades
        monetarias de cualquier propiedad, ya sea un bien inmueble (cualquier
        bien fijo a la tierra) o bien mueble, que es cualquier bien que no esté
        sujeto a una ubicación predeterminada (automóvil, obra de arte y
        maquinaria entre otros)
      </>
    ),
  },
  {
    title: "¿Para qué necesito un avalúo?",
    contents: (
      <ul className="list-decimal">
        <li>Para conocer el valor comercial de una propiedad.</li>
        <li>Para la toma de decisiones.</li>
        <li>Para venta, liquidación y renta de un bien mueble o inmueble.</li>
        <li>Para el pago de impuestos.</li>
        <li>Como garantía en la recuperación de un préstamo.</li>
        <li>
          Para asegurar o dar en garantía del cumplimiento de una fianza o un
          seguro.
        </li>
        <li>
          Para la determinación del monto de los activos de una persona física o
          moral.
        </li>
      </ul>
    ),
  },
  {
    title: "¿Quién debe pagar un avalúo inmobiliario?",
    contents: (
      <>
        El avalúo inmobiliario siempre debe ser pagado por la parte interesada
        en conocer el valor del inmueble para los fines que le convengan. Por
        ejemplo, en una operación de compraventa o arrendamiento, siempre lo
        paga el comprador o arrendatario; mientras que en un crédito hipotecario
        lo paga el beneficiario del crédito. En cambio, en un avalúo para
        seguro, por ejemplo, es pagado por la compañía de seguros.
      </>
    ),
  },
  {
    title: "¿Qué se toma en cuenta para realizar un avalúo?",
    contents: (
      <>
        El perito valuador examina a fondo las características del inmueble en
        cuestión desde el enfoque físico y técnico, tomando en cuenta
        principalmente: La edad del inmueble Los materiales de construcción
        utilizados La facilidad de acceso al inmueble y a los servicios públicos
        Las reparaciones y remodelaciones que haya sufrido el inmueble Así
        mismo, se realiza un ejercicio comparativo donde se analiza el precio de
        mercado de inmuebles similares dentro de la zona y zonas similares en
        los últimos años. Incluso, si está disponible, se toma en cuenta el
        avalúo catastral más reciente del inmueble para tener antecedentes y
        referencias del valor de la construcción.
      </>
    ),
  },
  {
    title: "¿Cuáles son los requisitos para realizar un avalúo inmobiliario?",
    contents: (
      <>
        Dado que un avalúo es una evaluación de los componentes físicos y
        técnicos de la propiedad, los requisitos que se solicitan son todos
        aquellos documentos que contengan información acerca de estos aspectos.
        Tales como: Escrituras públicas del inmueble Planos arquitectónicos
        Boleta predial Boletas de servicios públicos Constancia de terminación
        de obra Dependiendo del inmueble, el valuador puede solicitar requisitos
        adicionales. Por ejemplo, planos arquitectónicos de proyectos de
        remodelación, facturas por servicios de reparación o remodelación y
        cualquier otro documento que deje evidencia de trabajos adicionales que
        se han realizado a la edificación.
      </>
    ),
  },
  {
    title: "¿Cuánto cuesta un avalúo?",
    contents: (
      <>
        El costo del avalúo dependerá del tipo de avalúo solicitado. Para
        solicitar un presupuesto llámanos al 5524857429, o envíanos un email a
        avaluos@grupovalbel Grupo Valbel cuenta con una trayectoria en valuación
        de más de una década.
      </>
    ),
  },
  {
    title: "¿Cuál es la vigencia de un avalúo inmobiliario?",
    contents: (
      <>
        Debido a sus constantes cambios, la convención dentro del sector
        inmobiliario es que un avalúo tiene una vigencia máxima de seis meses.
        Además, se considera que en ese tiempo el inmueble puede sufrir cambios
        y/ o daños que aumenten o disminuyan el precio establecido. Por ello,
        pasado ese tiempo será muy difícil que las entidades financieras y
        autoridades fiscales acepten esa valuación y por lo general pedirán un
        nuevo avalúo. Los avalúos son esenciales para realizar cualquier proceso
        dentro del mercado inmobiliario. Por ello, no dejes pasar por alto este
        paso y contrata este servicio a tiempo para evitar futuros
        inconvenientes con las instituciones financieras, de vivienda o
        fiscales. Si estás interesado en comprar tu vivienda, visita la
        plataforma Vivanuncios, donde encontrarás una inmensa oferta de casas y
        departamentos en venta en todo México.
      </>
    ),
  },
];

const Faq = () => {
  return (
    <section className="py-24 bg-white" id="faq">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-20 md:mb-0">
            <div className="max-w-md">
              <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium rounded-full shadow-sm">
                FAQ
              </span>
              <h2 className="mb-4 text-4xl md:text-5xl leading-tight text-coolGray-900 font-bold tracking-tighter">
                Aclara tus dudas sobre los avalúos inmobiliarios
              </h2>
            </div>
          </div>

          {/*FAQ */}
          <div className="w-full md:w-1/2 px-4">
            <AccordionBase accordionData={accordionData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
