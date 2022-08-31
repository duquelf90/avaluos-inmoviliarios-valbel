import "styles/globals.css";
import { useEffect } from "react";
import analytics from "utility/analytics";
import { ThemeProvider } from "@material-tailwind/react";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    analytics.page();    
    // this will fire the Page Track function on every new router change.
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_MEASUREMENT_ID}');
        `}
      </Script>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
