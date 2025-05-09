import ChatBlock from "components/chatBlock";
import Layout from "components/Layout";
import SEO from "components/seo";
import Image from "next/image";
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
      <ChatBlock style="fixed z-[9999] right-0 bottom-0">
        <Image src="/img/CHAT-WP.png" width={180} height={50} alt="whatsapp" />
      </ChatBlock>
      <Home />
      <Numbers />
      <Features />
      <CTA />
      <TypeSection />
      <Steps />
      <Prices />
      <Faq />
      <Contact /> *
    </Layout>
  );
}
