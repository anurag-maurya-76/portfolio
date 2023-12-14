"use client";
import React from "react";
import SectionHeading from "../reusable/section-heading";
import { skillsData } from "@/app/lib/data";
import { useSectionInView } from "@/app/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: (index: number) => ({ opacity: 0, y: 100 }),
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
    },
  }),
};

const Skills = () => {
  const { ref } = useSectionInView("Skills", 0.5);
  return (
    <section id="skills" ref={ref} className="mt-28 max-w-[45rem] scroll-mt-28">
      <SectionHeading>Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => {
          return (
            <motion.li
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              variants={fadeInAnimationVariants}
              key={index}
              className="borderBlack rounded-xl bg-white px-5 py-3 dark:bg-white/10 dark:text-white/80"
              custom={index}
            >
              {skill}
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
};

export default Skills;
