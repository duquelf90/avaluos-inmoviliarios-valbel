import "styles/globals.css";
import { useEffect } from "react";
import analytics from "utility/analytics";
import { ThemeProvider } from "@material-tailwind/react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    analytics.page();    
  }, []);

  return (
    <>      
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
