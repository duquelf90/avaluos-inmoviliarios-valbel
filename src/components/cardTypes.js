import Image from "next/image";
import React from "react";

const CardTypes = (props) => {
  return (
    <div className="p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
      <div className="inline-flex mb-6 mx-auto items-center justify-center text-white rounded-lg">
        <Image
          src={`/elements/${props.img}`}
          width={168}
          height={168}
          alt={props.title}
        />
      </div>
      <h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold capitalize">
       {props.title}
      </h3>
      <p className="text-coolGray-500 font-medium">
        {props.sub}
      </p>
    </div>
  );
};

export default CardTypes;
