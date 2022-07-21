import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ContentPlaceholder } from "./ContentPlaceholder";

const Accordion = ({ i, title, text, expanded, setExpanded }) => {
  const isOpen = i === expanded;

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <>
      <motion.div
        initial={false}
        className="block relative w-full md:w-auto md:pr-10 mb-2 md:mb-0 ml-0"
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        <button className="mb-4 text-xl text-coolGray-900 font-bold text-left">{title}</button>
      </motion.div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.5, ease: [0.65, 0, 0.3, 1] }}
          >
            <ContentPlaceholder  content={text} />
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export const AccordionBase = ({accordionData}) => {
  const [expanded, setExpanded] = useState(false | 0);

  return accordionData.map((i, index) => (
    <Accordion
      i={i}
      title={i.title}
      text={i.contents}
      expanded={expanded}
      setExpanded={setExpanded}
      key={index}
    />
  ));
};

const accordionIds = [0, 1, 2, 3];
