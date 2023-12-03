"use client";
import React from "react";
import SectionHeading from "./section-heading";
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
    <section id="skills" ref={ref}>
      <SectionHeading>Skills</SectionHeading>
      <ul className="flex flex-wrap gap-2 justify-center text-lg text-gray-800">
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
              className="bg-white borderBlack rounded-xl px-5 py-3"
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
