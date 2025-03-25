import Footer from "./Footer";
import { GoogleTagManager } from '@next/third-parties/google' 

const Layout = ({ props, children }) => {
  return (
    <>
    <GoogleTagManager gtmId="GTM-PWJH53XL" />
    <div className="antialiased bg-body text-body font-body">
      <div className="container mx-auto">{children}</div>
      <Footer/>
    </div>
    </>
    
  );
};

export default Layout;
