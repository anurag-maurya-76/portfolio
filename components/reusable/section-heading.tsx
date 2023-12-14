import { motion } from "framer-motion";
import React from "react";
type SectionHeadingProps = { children: React.ReactNode };

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-8 text-center text-3xl font-medium capitalize"
    >
      {children}
    </motion.h2>
  );
};

export default SectionHeading;
