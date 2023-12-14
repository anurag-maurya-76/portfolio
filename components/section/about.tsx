"use client";
import React from "react";
import SectionHeading from "../reusable/section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/app/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About", 0.8);
  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.175, duration: 1.5 }}
      className="mt-28  w-[min(90%,45rem)] scroll-mt-28 text-center leading-8"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        In my career of software development I have worked in both web
        development and android app development. I am a capable to work in{" "}
        <span className="font-bold">Flutter</span> and{" "}
        <span className="font-bold">React JS</span>.
      </p>
      <p>
        Currently my role as a{" "}
        <span className="underline">Flutter developer</span> involves creating
        complex Stateful Widgets, handling form, designing beautiful UIs, and
        handling API calls. As a{" "}
        <span className="underline">React developer</span> I am working on
        creating reusable component, using Redux and reducer along with making
        custom hooks, passing context between components. Alongside standard
        https requests, I also worked making Apollo Graphql calls.
      </p>

      <p>
        <span className="italic">When I am not coding</span>, I enjoy playing
        video games, doing gym and watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  );
};

export default About;
