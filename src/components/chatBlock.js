import Image from "next/image";
import analytics from "utility/analytics";



const ChatBlock = () => {
  const doWhatsapp = () => {
    analytics.track('buttonClicked', {}, () => {
      console.log('whatsapp callback')
    })
  }
  
  return (
    <a
      className="fixed z-[9999] right-2 bottom-2"
      href="https://api.whatsapp.com/send?phone=+525524857429&text=Hola%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20un%20avalúo"
      onClick={doWhatsapp}
      target="_blank"
      rel="noreferrer"
    >
      <Image src="/img/whatsapp.png" width={50} height={50} alt="whatsapp" />
    </a>
  );
};

export default ChatBlock;
