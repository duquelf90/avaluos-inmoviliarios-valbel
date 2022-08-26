import "styles/globals.css";
import { useEffect } from "react";
import analytics from "utility/analytics";
import { ThemeProvider } from "@material-tailwind/react";
import Script from "next/script";
import * as gtag from "utility/gtag";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    analytics.page();
    // this will fire the Page Track function on every new router change.
  }, []);

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}

      {/* <!-- Google tag (gtag.js) --> */}
      {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZR2VYE7BSX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-ZR2VYE7BSX');
</script> */}

      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gtag.GA_TRACKING_ID}', {
          page_path: window.location.pathname,
        });
      `,
        }}
      />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
