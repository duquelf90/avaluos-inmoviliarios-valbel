import Footer from "components/Footer";
import Layout from "components/Layout";
import SEO from "components/seo";
import Contact from "section/contact";
import CTA from "section/cta";
import Faq from "section/faq";
import Features from "section/features";
import Home from "section/home";
import Numbers from "section/numbers";
import Prices from "section/prices";
import Steps from "section/steps";
import TypeSection from "section/type-section";

export default function Index() {
  return (
    <Layout>
      <SEO />
      <Home />
      <Numbers />
      <Features />
      <CTA />
      <TypeSection/>
      <Steps/>
      <Prices/>
      <Faq/>
      <Contact/>
    </Layout>
  );
}
