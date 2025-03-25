import analytics from "utility/analytics";

const ChatBlock = ({ style, children }) => {
  const doWhatsapp = () => {
    analytics.track("buttonClicked", {}, () => {
      console.log("Alguien te contacto por whatsapp");
    });
  };

  return (
    <a
      className={style}
      href="https://api.whatsapp.com/send?phone=+525524857429&text=Hola%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20un%20avalúo"
      onClick={doWhatsapp}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

export default ChatBlock;
