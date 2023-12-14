"use client";
import React from "react";
import SectionHeading from "../reusable/section-heading";
import { useSectionInView } from "@/app/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "../reusable/submit-button";
import toast from "react-hot-toast";

const Contact = () => {
  const { ref } = useSectionInView("Contact", 0.8);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mt-28 w-[min(90%,38rem)] scroll-mt-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:anuragmaurya9345@gmail.com">
          anuragmaurya9345@gmail.com
        </a>{" "}
        or through this form
      </p>
      <form
        className="mt-10 flex flex-col dark:text-white"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
          } else {
            toast.success("Email sent successfully");
          }
        }}
      >
        <input
          type="email"
          name="senderEmail"
          required
          maxLength={100}
          className="borderBlack h-14 rounded-lg p-4 transition-all autofill:!bg-white/10 dark:bg-white/10 dark:outline-none dark:focus:bg-white/20"
          placeholder="Your Email"
        />
        <textarea
          required
          name="message"
          maxLength={5000}
          className="borderBlack my-3 h-52 rounded-lg p-4 transition-all dark:bg-white/10 dark:outline-none dark:focus:bg-white/20"
          placeholder="Your Message"
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
};

export default Contact;
