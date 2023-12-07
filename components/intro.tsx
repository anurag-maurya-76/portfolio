"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import profile from "@/public/profile.jpeg";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { intro, social } from "@/app/lib/data";
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
            className="rounded-3xl border-white/25 border-[0.35rem] h-[11rem] w-[11rem] shadow-2xl my-10"
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 mb-10 font-medium text-3xl"
        >
          <p className="font-bold mb-5">{intro.title}</p>
          {intro.subtitle.split("").map((value, key) => {
            return (
              <motion.span
                key={key}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: key * 0.01, ease: "circInOut" }}
                className="text-xl !leading-[0.8]"
              >
                {value}
              </motion.span>
            );
          })}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.01 * (intro.subtitle.length + 5) }}
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
