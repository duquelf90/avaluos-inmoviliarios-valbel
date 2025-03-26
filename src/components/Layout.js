import Footer from "./Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const Layout = ({ props, children }) => {
  return (
    <html lang="en">
      <GoogleAnalytics />
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
