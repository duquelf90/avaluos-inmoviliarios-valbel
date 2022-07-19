import React from "react";
import Head from "next/head";

export default function SEO({
  description = "Avalúos Inmobiliarios - Grupo Valbel",
  author = "Grupo Valbel",
  meta,
  title = "Avalúos Inmobiliarios - Grupo Valbel",
}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      name: `keywords`,
      content:
        "Avaluos inmobiliarios, precio inmuebles, avaluo comercial, casa",
    },
    {
      name: `og:title`,
      content: title,
    },
    {
      name: `og:description`,
      content: "Te ayudamos con tu avalúo inmobiliarios",
    },
    {
      name: `og:type`,
      content: `website`,
    },
    {
      name: `og:url`,
      content: "https://avaluos.grupovalbel.com",
    },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `es`,
  meta: [],
  description: ``,
};
