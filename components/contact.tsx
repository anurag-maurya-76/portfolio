"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/app/lib/hooks";
import { motion } from "framer-motion";

const Contact = () => {
  const { ref } = useSectionInView("Contact", 0.8);
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="w-[min(100%,38rem)]"
      initial={{
        opacity: 1,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:anuragmaurya9345@gmail.com">
          anuragmaurya9345@gmail.com{" "}
        </a>
        or through this form
      </p>
      <form className="mt-10 flex flex-col">
        <input
          type="email"
          className="h-14 borderBlack rounded-lg p-4"
          placeholder="Your Email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          placeholder="Your Message"
        />
        <button
          type="submit"
          className="h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all flex items-center justify-center active:scale-105 hover:scale-110 hover:bg-gray-950"
        >
          Submit
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
