import Image from "next/image";
import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { navbarData } from "./navbarData";

const Footer = () => {
  return (
    <section className="bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap lg:items-center pt-24 pb-0 -mx-4">
          <div className="w-full md:w-1/4 lg:w-auto px-4">
            <a className="block mb-5 md:mb-0 max-w-max" href="#">
              <Image
                className="h-8"
                src="/img/logo-avaluo.svg"
                alt=""
                width={170}
                height={100}
                quality={100}
              />
            </a>
          </div>
          <div className="w-full md:w-3/4 lg:flex-1 px-4">
            <div className="flex flex-wrap justify-end -mx-3 lg:-mx-6">
              {navbarData.map(
                (pages, index) => (
                  console.log(index),
                  (
                    <div className="w-full md:w-auto p-3 md:py-0 md:px-6">
                      <ScrollLink
                        className="inline-block text-lg md:text-xl text-coolGray-500 hover:text-coolGray-600 font-medium"
                        to={pages.slug}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        key={index}
                      >
                        {pages.title}
                      </ScrollLink>
                    </div>
                  )
                )
              )}
              <div className="w-full md:w-auto p-3 md:py-0 md:px-6 capitalize"><a className=""></a>remates hipotecarios</div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-coolGray-100"></div>
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center py-4">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <p className="text-coolGray-400 font-medium">
              © 2022 Grupo Valbel. Todos los derechos reservados.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex flex-wrap md:justify-end -mx-5">
              <div className="px-5">
                <a
                  className="inline-block text-coolGray-300 hover:text-coolGray-400"
                  href="#"
                >
                  <svg
                    width="10"
                    height="18"
                    viewBox="0 0 10 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.63494 17.7273V9.76602H9.3583L9.76688 6.66246H6.63494V4.68128C6.63494 3.78301 6.88821 3.17085 8.20297 3.17085L9.87712 3.17017V0.394238C9.5876 0.357335 8.59378 0.272728 7.43708 0.272728C5.0217 0.272728 3.3681 1.71881 3.3681 4.37391V6.66246H0.636475V9.76602H3.3681V17.7273H6.63494Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>

              <div className="px-5">
                <a
                  className="inline-block text-coolGray-300 hover:text-coolGray-400"
                  href="#"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.6007 0.181818H14.3992C17.3874 0.181818 19.8184 2.61281 19.8182 5.60074V14.3993C19.8182 17.3872 17.3874 19.8182 14.3992 19.8182H5.6007C2.61276 19.8182 0.181885 17.3873 0.181885 14.3993V5.60074C0.181885 2.61281 2.61276 0.181818 5.6007 0.181818ZM14.3993 18.0759C16.4267 18.0759 18.0761 16.4266 18.0761 14.3993H18.076V5.60074C18.076 3.57348 16.4266 1.92405 14.3992 1.92405H5.6007C3.57343 1.92405 1.92412 3.57348 1.92412 5.60074V14.3993C1.92412 16.4266 3.57343 18.0761 5.6007 18.0759H14.3993ZM4.85721 10.0001C4.85721 7.16424 7.16425 4.85714 10.0001 4.85714C12.8359 4.85714 15.1429 7.16424 15.1429 10.0001C15.1429 12.8359 12.8359 15.1429 10.0001 15.1429C7.16425 15.1429 4.85721 12.8359 4.85721 10.0001ZM6.62805 10C6.62805 11.8593 8.14081 13.3719 10.0001 13.3719C11.8593 13.3719 13.3721 11.8593 13.3721 10C13.3721 8.14058 11.8594 6.6279 10.0001 6.6279C8.14069 6.6279 6.62805 8.14058 6.62805 10Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>

              <div className="px-5">
                <a
                  className="inline-block text-coolGray-300 hover:text-coolGray-400"
                  href="#"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.2 0H1.8C0.81 0 0 0.81 0 1.8V16.2C0 17.19 0.81 18 1.8 18H16.2C17.19 18 18 17.19 18 16.2V1.8C18 0.81 17.19 0 16.2 0ZM5.4 15.3H2.7V7.2H5.4V15.3ZM4.05 5.67C3.15 5.67 2.43 4.95 2.43 4.05C2.43 3.15 3.15 2.43 4.05 2.43C4.95 2.43 5.67 3.15 5.67 4.05C5.67 4.95 4.95 5.67 4.05 5.67ZM15.3 15.3H12.6V10.53C12.6 9.81004 11.97 9.18 11.25 9.18C10.53 9.18 9.9 9.81004 9.9 10.53V15.3H7.2V7.2H9.9V8.28C10.35 7.56 11.34 7.02 12.15 7.02C13.86 7.02 15.3 8.46 15.3 10.17V15.3Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
