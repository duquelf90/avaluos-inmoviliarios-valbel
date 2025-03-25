import Footer from "./Footer";
import { GoogleTagManager } from '@next/third-parties/google'

const Layout = ({ props, children }) => {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-PWJH53XL" />
      <body>
        <div className="antialiased bg-body text-body font-body">
          <div className="container mx-auto">{children}</div>
          <Footer />
        </div>
      </body>
      {/* <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PWJH53XL"
        height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript> */}
    </html>

  );
};

export default Layout;
