import FirstBlock from "components/FirstBlock";
import Navbar from "components/Navbar";
import React from "react";

const Home = () => {
  return (
    <section className="relative overflow-hidden bg-center bg-white" id="home">
      <Navbar />
      <FirstBlock/>
    </section>
  );
};

export default Home;
