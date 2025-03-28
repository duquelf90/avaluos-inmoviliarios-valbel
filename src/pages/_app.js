import "styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'

function MyApp({ Component, pageProps }) { 

  return (
    <>      
      <ThemeProvider>
      <GoogleTagManager gtmId="GTM-PWJH53XL" />
        <Component {...pageProps} />
        <GoogleAnalytics gaId="G-PZLB8HJXYN" />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
