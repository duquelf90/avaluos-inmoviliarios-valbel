import React from "react";

const WhatsApp = (props) => {
  return (
    <a
      href={`https://api.whatsapp.com/send?phone=+52${props.phone}&text=Hola%20quisiera%20m%C3%A1s%20informaci%C3%B3n`}
    >
      {props.phone}
    </a>
  );
};

export default WhatsApp;
