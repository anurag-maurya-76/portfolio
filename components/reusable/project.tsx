"use client";
import React, { useRef } from "react";
import { projectsData } from "@/app/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { RxExternalLink } from "react-icons/rx";

type ProjectProps = (typeof projectsData)[number];

const Project = ({
  title,
  description,
  tags,
  imageUrl,
  link,
}: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group relative mb-3 max-w-[42rem] cursor-pointer overflow-hidden rounded-lg border border-black/5 bg-gray-100 transition last:mb-0 hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 sm:mb-8 sm:h-[20rem] sm:pr-8 sm:odd:pl-8"
    >
      <a href={link ?? ""} target="_blank">
        <div className="flex h-full flex-col px-5 pb-8 pt-4 sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10 sm:group-odd:ml-[17rem]">
          <h3 className="flex gap-2 text-2xl font-semibold">
            {title}
            {link != null && <RxExternalLink />}
          </h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className="absolute -right-40 top-8 hidden w-[28.25rem] rounded shadow-2xl transition group-odd:-left-40 group-odd:right-[initial] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] group-odd:group-hover:translate-x-3 group-odd:group-hover:rotate-2 sm:block"
        />
      </a>
    </motion.div>
  );
};
export default Project;
