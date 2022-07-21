import * as React from "react";
import { motion } from "framer-motion";

export const ContentPlaceholder = ({ content }) => (
  <motion.div
    variants={{ collapsed: { scale: 0.9 }, open: { scale: 1 } }}
    transition={{ duration: 0.5 }}
    className="origin-center p-1 text-coolGray-500 font-medium text-justify"
  >
    {content}
  </motion.div>
);
