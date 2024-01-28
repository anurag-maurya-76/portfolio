"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import profile from "@/public/profile.jpeg";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { intro, social } from "@/app/lib/data";
import { useSectionInView } from "@/app/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context-provider";
import { RxExternalLink } from "react-icons/rx";

export const Intro = () => {
  const { ref } = useSectionInView("Home", 0.8);
  const { setTimeOfLastClick, setActiveSection } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id="home"
      className="mt-[6rem] w-[min(90%,40rem)] scroll-mt-28 text-center "
    >
      <div className="flex flex-col items-center justify-center">
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
            className="my-[1.3rem] h-[11rem] w-[11rem] rounded-3xl border-[0.35rem] border-white/25 shadow-2xl sm:my-10"
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 mt-4 text-3xl font-medium"
        >
          <p className="mb-5 font-bold">{intro.title}</p>
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
          className="flex flex-col items-center justify-center gap-4 text-lg font-medium sm:flex-row"
        >
          <Link
            href="#contact"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
            className="flex items-center gap-2 rounded-full bg-gray-800 px-7 py-3 text-white transition hover:scale-110 hover:bg-gray-950 active:scale-105"
          >
            Contact me here <BsArrowRight />
          </Link>
          <a
            className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-gray-50 px-7 py-3 text-black transition hover:scale-110 hover:bg-white active:scale-105 dark:bg-white/10 dark:text-white/60"
            href={social.resume}
            target="_blank"
          >
            View Resume <RxExternalLink />
          </a>
          <div className="flex gap-4">
            <a
              className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-gray-50 px-5 py-4 text-black transition hover:scale-110 hover:bg-white active:scale-105 dark:bg-white/10 dark:text-white/60"
              href={social.linkedIn}
              target="_blank"
            >
              <BsLinkedin />
            </a>
            <a
              className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-gray-50 px-5 py-4 text-black transition hover:scale-110 hover:bg-white active:scale-105 dark:bg-white/10 dark:text-white/60"
              href={social.github}
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
