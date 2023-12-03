"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import profile from "@/public/profile.jpeg";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { social } from "@/app/lib/data";
import { useSectionInView } from "@/app/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context-provider";

export const Intro = () => {
  const { ref } = useSectionInView("Home", 0.8);
  const { setTimeOfLastClick, setActiveSection } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 text-center sm:mb-0 scroll-mt-28 mt-[6rem] max-w-[40rem]"
    >
      <div className="flex justify-center items-center flex-col">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <Image
            alt="Profile"
            src={profile}
            className="rounded-full border-white border-[0.35rem] h-[8rem] w-[8rem] shadow-xl"
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 mb-10 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        >
          <span className="font-bold">Hello, I am Anurag. </span>
          <span>
            I am a Frontend Developer with 2 years of experience. I enjoy
            building sites and apps. My focus is{" "}
          </span>
          <span className="underline">React (Next.js)</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg font-medium"
        >
          <Link
            href="#contact"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
            className="bg-gray-800 text-white px-7 py-3 flex items-center gap-2 rounded-full active:scale-105 hover:scale-110 hover:bg-gray-950 transition"
          >
            Contact me here <BsArrowRight />
          </Link>
          <a
            className="bg-gray-50 text-black px-7 py-3 flex items-center gap-2 rounded-full active:scale-105 hover:scale-110 hover:bg-white transition cursor-pointer borderBlack"
            href="/Resume.pdf"
          >
            Download CV <HiDownload />
          </a>
          <a
            className="bg-gray-50 text-black px-5 py-4 flex items-center gap-2 rounded-full active:scale-105 hover:scale-110 hover:bg-white transition cursor-pointer borderBlack"
            href={`${social.linkedIn}`}
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
            className="bg-gray-50 text-black px-5 py-4 flex items-center gap-2 rounded-full active:scale-105 hover:scale-110 hover:bg-white transition cursor-pointer borderBlack"
            href={`${social.github}`}
            target="_blank"
          >
            <FaGithub />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
