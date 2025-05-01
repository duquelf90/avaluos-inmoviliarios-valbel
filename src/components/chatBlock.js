"use client";
import { sendGAEvent, sendGTMEvent } from '@next/third-parties/google';

const ChatBlock = ({ style, children }) => {
  const doWhatsapp = () => {
    sendGTMEvent({ event: 'buttonClicked', value: 'whatsaap_button' });
    sendGAEvent({ event: 'buttonClicked', value: 'whatsaap_button' });
  };

  return (
    <a
      className={style}
      href="https://api.whatsapp.com/send?phone=+528180188497&text=Hola%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20un%20avalúo"
      onClick={doWhatsapp}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

export default ChatBlock;
