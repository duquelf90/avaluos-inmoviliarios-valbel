import Image from "next/image";
import Link from "next/link";

const LogoImg = (props) => {
  return (
      // <Link href="/">
        <Image
          src="/img/logo.png"
          width={props.w}
          height={props.h}
          alt="logo"
          quality={100}
        />
      // </Link>
  );
};

export default LogoImg;
