import React from 'react';
import Head from 'next/head';

export default function SEO({
  description = 'Avalúos Inmobiliarios - Grupo Valbel',
  author = 'Grupo Valbel',
  meta,
  title = 'Avalúos Inmobiliarios - Grupo Valbel',
}) {
  const metaData = [
    {
      name: `description`,
      content: 'Avaluos inmobiliarios',
    },
    {
      name: `og:title`,
      content: title,
    },
    {
      name: `og:description`,
      content: 'Te ayudamos con tu avalúo inmobiliarios',
    },
    {
      name: `og:type`,
      content: `website`,
    },
    {
      name: `og:url`,
      content: 'https://avaluos.grupovalbel.com',
    }  
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
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
