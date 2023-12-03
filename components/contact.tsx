"use client";
import React from "react";
import SectionHeading from "./reusable/section-heading";
import { useSectionInView } from "@/app/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./reusable/submit-button";
import toast from "react-hot-toast";

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
      <form
        className="mt-10 flex flex-col"
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
          className="h-14 borderBlack rounded-lg p-4"
          placeholder="Your Email"
        />
        <textarea
          required
          name="message"
          maxLength={5000}
          className="h-52 my-3 rounded-lg borderBlack p-4"
          placeholder="Your Message"
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
};

export default Contact;
