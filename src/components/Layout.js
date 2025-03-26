import Footer from "./Footer";
import { GoogleTagManager,GoogleAnalytics } from '@next/third-parties/google'

const Layout = ({ props, children }) => {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-PWJH53XL" />
      <GoogleAnalytics gaId="G-PZLB8HJXYN" />
      <body>
        <div className="antialiased bg-body text-body font-body">
          <div className="container mx-auto">{children}</div>
          <Footer />
        </div>
      </body> 
            
    </html>

  );
};

export default Layout;
