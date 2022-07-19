import { Link } from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link
      path="/"
      sx={{
        variant: "links.logo",
      }}
    >
      <a className="block max-w-max" href="#">
        <Image
          src="/img/logo-valbel.png"
          width={180}
          height={60}
          alt="logo"
          quality={100}
        />
      </a>
    </Link>
  );
}
