import WhatsApp from "components/whatsapp";
import React from "react";

const Contact = () => {
  return (
    <section className="bg-white" id="contacto">
      <div className="wave-top w-full text-coolGray-900">
        <svg
          viewBox="0 0 1440 116"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1440 64.5909H1090.08C833.336 64.5909 580.229 -7.62939e-06 360 -7.62939e-06C139.771 -7.62939e-06 0 64.5909 0 64.5909V116H1440V64.5909Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <div className="py-20 bg-coolGray-900">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-green-900 bg-green-100 font-medium uppercase rounded-9xl">
              Contactanos
            </span>
            <h3 className="mb-4 text-4xl md:text-5xl text-white font-bold tracking-tighter leading-tight">
              Sigamos conectados
            </h3>
            <p className="text-lg md:text-xl text-coolGray-400 font-medium">
              Para cotizar tu avalúo con nosotros, nuestro equipo de valuadores
              esta a su disposición para darle respuesta de forma inmediata.
            </p>
            <div className="w-full lg:w-auto">
              <div className="flex flex-wrap justify-center items-center md:justify-start -mb-2"></div>
            </div>
          </div>
          
          <div className="flex flex-wrap -mx-4">
            {/* email */}
            <div className="w-full md:w-1/3 px-4 mb-12 md:mb-0">
              <div className="max-w-xs mx-auto text-center">
                <div className="inline-flex mb-6 items-center justify-center w-20 h-20 bg-green-500 rounded-full">
                  <svg
                    className="text-white"
                    width="42"
                    height="42"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.21 8.82L14 2.78C13.474 2.27986 12.7759 2.00095 12.05 2.00095C11.3241 2.00095 10.626 2.27986 10.1 2.78L3.89 8.78C3.61408 9.02087 3.39216 9.31731 3.23879 9.64991C3.08541 9.98251 3.00404 10.3438 3 10.71V19.29C3.01054 20.0176 3.30904 20.7114 3.83012 21.2193C4.35119 21.7273 5.05235 22.008 5.78 22H18.22C18.9476 22.008 19.6488 21.7273 20.1699 21.2193C20.691 20.7114 20.9895 20.0176 21 19.29V10.71C20.9992 10.3585 20.929 10.0106 20.7935 9.68623C20.6579 9.36189 20.4596 9.06752 20.21 8.82V8.82ZM11.44 4.22C11.593 4.08016 11.7927 4.00262 12 4.00262C12.2073 4.00262 12.407 4.08016 12.56 4.22L18 9.5L12.53 14.78C12.377 14.9198 12.1773 14.9974 11.97 14.9974C11.7627 14.9974 11.563 14.9198 11.41 14.78L6 9.5L11.44 4.22ZM19 19.29C18.9871 19.4863 18.8987 19.6699 18.7532 19.8023C18.6078 19.9347 18.4166 20.0056 18.22 20H5.78C5.58338 20.0056 5.39225 19.9347 5.24678 19.8023C5.10132 19.6699 5.01286 19.4863 5 19.29V11.35L9.05 15.25L7.39 16.85C7.20375 17.0374 7.09921 17.2908 7.09921 17.555C7.09921 17.8192 7.20375 18.0726 7.39 18.26C7.48295 18.3575 7.59463 18.4352 7.71836 18.4885C7.84208 18.5418 7.97529 18.5695 8.11 18.57C8.36747 18.569 8.61462 18.4687 8.8 18.29L10.57 16.59C11.0096 16.8586 11.5148 17.0008 12.03 17.0008C12.5452 17.0008 13.0504 16.8586 13.49 16.59L15.26 18.29C15.4454 18.4687 15.6925 18.569 15.95 18.57C16.0847 18.5695 16.2179 18.5418 16.3416 18.4885C16.4654 18.4352 16.5771 18.3575 16.67 18.26C16.8563 18.0726 16.9608 17.8192 16.9608 17.555C16.9608 17.2908 16.8563 17.0374 16.67 16.85L15 15.25L19 11.35V19.29Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <h3 className="mb-2 text-2xl md:text-3xl leading-9 text-white font-bold">
                  Email
                </h3>
                <a
                  className="text-lg md:text-xl text-green-500 hover:text-green-600 font-medium"
                  href="mailto:avaluos@grupovalbel.com?Subject=Interesado%20en%20un%20avalúo%20inmobiliario"
                >
                  {" "}
                  avaluos@grupovalbel.com
                </a>
              </div>
            </div>
            {/* Whatsapp */}
            <div className="w-full md:w-1/3 px-4 mb-12 md:mb-0">
              <div className="max-w-xs mx-auto text-center">
                <div className="inline-flex mb-6 items-center justify-center w-20 h-20 bg-green-500 rounded-full">
                  <svg
                    className="text-white"
                    width="42"
                    height="42"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.41 13C19.1901 13 18.96 12.93 18.74 12.88C18.2949 12.7805 17.8572 12.6501 17.43 12.49C16.9661 12.3212 16.4562 12.33 15.9984 12.5146C15.5405 12.6992 15.1671 13.0466 14.95 13.49L14.73 13.95C13.7589 13.3992 12.8617 12.7271 12.0601 11.95C11.2829 11.1484 10.6108 10.2512 10.0601 9.28L10.5201 9.07C10.9634 8.85292 11.3108 8.47953 11.4954 8.02169C11.6801 7.56385 11.6888 7.05391 11.5201 6.59C11.3612 6.15903 11.231 5.71808 11.13 5.27C11.08 5.05 11.04 4.82 11.01 4.6C10.8886 3.89562 10.5197 3.25774 9.96967 2.80124C9.41967 2.34474 8.72475 2.09961 8.01005 2.11H5.00005C4.5773 2.10945 4.1592 2.19825 3.77317 2.37058C3.38714 2.54292 3.04189 2.7949 2.76005 3.11C2.47237 3.43365 2.25817 3.81575 2.13215 4.23004C2.00614 4.64432 1.97131 5.08098 2.03005 5.51C2.57364 9.67214 4.47526 13.5387 7.44005 16.51C10.4114 19.4748 14.2779 21.3764 18.4401 21.92C18.5699 21.9299 18.7002 21.9299 18.83 21.92C19.5675 21.9211 20.2794 21.6505 20.83 21.16C21.1452 20.8782 21.3971 20.5329 21.5695 20.1469C21.7418 19.7609 21.8306 19.3428 21.83 18.92V15.92C21.8247 15.229 21.5809 14.5611 21.14 14.0291C20.6991 13.4971 20.088 13.1336 19.41 13ZM19.9 19C19.8997 19.1395 19.8702 19.2775 19.8134 19.4049C19.7565 19.5324 19.6736 19.6465 19.57 19.74C19.4604 19.8399 19.33 19.9141 19.1882 19.9573C19.0464 20.0006 18.8967 20.0117 18.75 19.99C15.0183 19.5026 11.5503 17.802 8.88005 15.15C6.20752 12.4775 4.49208 8.99737 4.00005 5.25C3.97833 5.10333 3.98949 4.95367 4.03272 4.81185C4.07596 4.67003 4.1502 4.5396 4.25005 4.43C4.34467 4.32515 4.46043 4.24154 4.5897 4.18466C4.71897 4.12778 4.85882 4.09892 5.00005 4.1H8.00005C8.23121 4.09435 8.45719 4.16898 8.63951 4.3112C8.82184 4.45341 8.94925 4.65442 9.00005 4.88C9.00005 5.15 9.09005 5.43 9.15005 5.7C9.26563 6.22386 9.41937 6.73857 9.61005 7.24L8.21005 7.9C7.96941 8.01046 7.78241 8.21185 7.69005 8.46C7.59003 8.70346 7.59003 8.97654 7.69005 9.22C9.12925 12.3028 11.6073 14.7808 14.69 16.22C14.9335 16.32 15.2066 16.32 15.45 16.22C15.6982 16.1276 15.8996 15.9406 16.01 15.7L16.64 14.3C17.156 14.4881 17.6838 14.6418 18.22 14.76C18.48 14.82 18.76 14.87 19.0301 14.91C19.2556 14.9608 19.4566 15.0882 19.5989 15.2705C19.7411 15.4529 19.8157 15.6788 19.81 15.91L19.9 19ZM14 2C13.7701 2 13.53 2 13.3 2C13.0348 2.02254 12.7894 2.14952 12.6178 2.353C12.4462 2.55647 12.3625 2.81978 12.385 3.085C12.4076 3.35022 12.5346 3.59562 12.738 3.76721C12.9415 3.93881 13.2048 4.02254 13.47 4H14C15.5913 4 17.1175 4.63214 18.2427 5.75736C19.3679 6.88258 20 8.4087 20 10C20 10.18 20 10.35 20 10.53C19.9779 10.7938 20.0612 11.0556 20.2318 11.2581C20.4024 11.4606 20.6463 11.5871 20.91 11.61H20.99C21.2404 11.611 21.482 11.5181 21.6671 11.3496C21.8523 11.1811 21.9675 10.9493 21.99 10.7C21.99 10.47 21.99 10.23 21.99 10C21.9901 7.88 21.1486 5.84668 19.6504 4.34668C18.1523 2.84667 16.12 2.00265 14 2ZM16 10C16 10.2652 16.1054 10.5196 16.2929 10.7071C16.4805 10.8946 16.7348 11 17 11C17.2653 11 17.5196 10.8946 17.7072 10.7071C17.8947 10.5196 18 10.2652 18 10C18 8.93913 17.5786 7.92172 16.8285 7.17157C16.0783 6.42143 15.0609 6 14 6C13.7348 6 13.4805 6.10536 13.2929 6.29289C13.1054 6.48043 13 6.73478 13 7C13 7.26522 13.1054 7.51957 13.2929 7.70711C13.4805 7.89464 13.7348 8 14 8C14.5305 8 15.0392 8.21071 15.4143 8.58579C15.7893 8.96086 16 9.46957 16 10Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <h3 className="mb-2 text-2xl md:text-3xl leading-9 text-white font-bold">
                  WhatsApp
                </h3>
                <p className="text-lg md:text-lg font-medium text-coolGray-500 leading-7">
                  Horario de atención
                </p>
                <p className="mb-4 text-lg md:text-lg font-medium text-coolGray-500 leading-7">
                  Lunes a Viernes 9:00 am - 6:00 pm <br/> Sábados 10:00 am - 5:00 pm
                </p>
                <p className="text-lg md:text-xl text-green-500 font-medium">
                  <WhatsApp phone="8180188497" />
                </p>
                
              </div>
            </div>
            {/* Oficina */}
            <div className="w-full md:w-1/3 px-4">
              <div className="max-w-xs mx-auto text-center">
                <div className="inline-flex mb-6 items-center justify-center w-20 h-20 bg-green-500 rounded-full">
                  <svg
                    className="h-8 text-white"
                    width="42"
                    height="42"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.0001 4.48C16.4088 2.8887 14.2505 1.99472 12.0001 1.99472C9.74961 1.99472 7.59135 2.8887 6.00005 4.48C4.40875 6.0713 3.51477 8.22957 3.51477 10.48C3.51477 12.7304 4.40875 14.8887 6.00005 16.48L11.2701 21.76C11.363 21.8537 11.4736 21.9281 11.5955 21.9789C11.7173 22.0297 11.848 22.0558 11.9801 22.0558C12.1121 22.0558 12.2428 22.0297 12.3646 21.9789C12.4865 21.9281 12.5971 21.8537 12.6901 21.76L18.0001 16.43C19.5847 14.8453 20.4749 12.6961 20.4749 10.455C20.4749 8.21395 19.5847 6.06468 18.0001 4.48ZM16.5701 15L12.0001 19.59L7.43005 15C6.5272 14.0963 5.91253 12.9452 5.66375 11.6923C5.41497 10.4393 5.54324 9.14075 6.03236 7.96068C6.52147 6.78062 7.34947 5.77205 8.41168 5.06248C9.4739 4.35291 10.7226 3.97418 12.0001 3.97418C13.2775 3.97418 14.5262 4.35291 15.5884 5.06248C16.6506 5.77205 17.4786 6.78062 17.9677 7.96068C18.4569 9.14075 18.5851 10.4393 18.3364 11.6923C18.0876 12.9452 17.4729 14.0963 16.5701 15ZM9.00005 7.41C8.19277 8.21977 7.73945 9.31657 7.73945 10.46C7.73945 11.6034 8.19277 12.7002 9.00005 13.51C9.59981 14.1108 10.3636 14.5211 11.1957 14.6894C12.0278 14.8577 12.891 14.7766 13.6771 14.4562C14.4632 14.1357 15.1372 13.5903 15.6145 12.8883C16.0918 12.1862 16.3512 11.3589 16.3601 10.51C16.3646 9.94321 16.2554 9.38126 16.039 8.85739C15.8225 8.33352 15.5033 7.85836 15.1001 7.46C14.7037 7.05458 14.2311 6.73154 13.7095 6.50947C13.1878 6.2874 12.6274 6.17068 12.0605 6.16603C11.4935 6.16138 10.9313 6.2689 10.406 6.48239C9.8808 6.69588 9.40297 7.01113 9.00005 7.41ZM13.6901 12.09C13.3111 12.4747 12.8103 12.7159 12.2732 12.7723C11.7361 12.8286 11.1961 12.6966 10.7456 12.3989C10.295 12.1012 9.96185 11.6562 9.80306 11.1401C9.64427 10.6239 9.6697 10.0686 9.87501 9.56916C10.0803 9.06967 10.4528 8.65702 10.9286 8.40174C11.4045 8.14646 11.9543 8.06441 12.484 8.16962C13.0137 8.27483 13.4904 8.56076 13.8326 8.97853C14.1748 9.39631 14.3612 9.91997 14.3601 10.46C14.3455 11.0773 14.0865 11.6635 13.6401 12.09H13.6901Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <h3 className="mb-2 text-2xl md:text-3xl font-bold leading-9 text-white">
                  Teléfono oficina
                </h3>

                <p className="mb-0 text-lg md:text-lg font-medium text-coolGray-500 leading-7">
                  Horario de atención
                </p>
                <p className="mb-4 text-lg md:text-lg font-medium text-coolGray-500 leading-7">
                  Lunes a Viernes 9:00 am - 6:00 pm
                </p>
                <p className="text-lg md:text-xl font-medium text-green-500">
                  <a href="tel:8180188497">8180188497</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wave-bottom w-full text-coolGray-900">
        <svg
          viewBox="0 0 1440 116"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 51.4091H349.922C606.664 51.4091 859.771 116 1080 116C1300.23 116 1440 51.4091 1440 51.4091V0H0V51.4091Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Contact;
