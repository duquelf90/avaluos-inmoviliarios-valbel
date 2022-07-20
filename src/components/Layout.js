import Footer from "./Footer";

const Layout = ({ props, children }) => {
  return (
    <div className="antialiased bg-body text-body font-body">
      <div className="container mx-auto">{children}</div>
      <Footer/>
    </div>
  );
};

export default Layout;
