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
      className="text-center scroll-mt-28 mt-[6rem] w-[min(90%,40rem)] "
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
            className="rounded-full border-white border-[0.35rem] h-[8rem] w-[8rem] shadow-xl my-10"
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 mb-10 text-2xl font-medium !leading-[1.5] sm:text-3xl"
        >
          <span className="font-bold">Hello, I am Anurag. </span>
          <span>
            I am a Frontend Developer with 1.5 years of experience. My passion
            lies in building websites and mobile applications, and I am focused
            on{" "}
          </span>
          <span className="underline">React</span> and
          <span className="underline"> Flutter</span>.
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
            className="bg-gray-50 text-black px-7 py-3 flex items-center gap-2 rounded-full active:scale-105 hover:scale-110 hover:bg-white transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="/Resume.pdf"
            target="_blank"
          >
            Download CV <HiDownload />
          </a>
          <div className="flex gap-4">
            <a
              className="bg-gray-50 text-black px-5 py-4 flex items-center gap-2 rounded-full active:scale-105 hover:scale-110 hover:bg-white transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href={`${social.linkedIn}`}
              target="_blank"
            >
              <BsLinkedin />
            </a>
            <a
              className="bg-gray-50 text-black px-5 py-4 flex items-center gap-2 rounded-full active:scale-105 hover:scale-110 hover:bg-white transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href={`${social.github}`}
              target="_blank"
            >
              <FaGithub />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
