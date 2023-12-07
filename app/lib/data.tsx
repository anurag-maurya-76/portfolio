import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import unicampus from "@/public/unicampus.png";
import wrappedGreen from "@/public/wrapped-green.png";
import cab from "@/public/cab.png";

export const social = {
  linkedIn: "https://www.linkedin.com/in/anurag-maurya-98870416a/",
  github: "https://github.com/anurag-maurya-76",
};

export const intro = {
  title: "Hello It's Me, Anurag Maurya.",
  subtitle:
    "I am a Frontend Developer with 1.5 years of experience. My passion lies in building websites and mobile applications, and I am focused on React and Flutter.",
};

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "LEC Morbi, Gujarat",
    description:
      "I completed my bachelor's degree at LEC Morbi with a major in Information Technology. I completed my graduation with a CGPA of 9.12.",
    icon: React.createElement(LuGraduationCap),
    date: "2018-2022",
  },
  {
    title: "Front-End Developer",
    location: "UIDAI Bangalore, Karnataka",
    description:
      "I am now working as a Frontend developer at UIDAI, Bangalore. My stack includes Flutter, Dart, React, HTML, CSS, Javascript. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "UniCampus",
    description:
      "Created an app that aimed to digitize major campus activities and make it easier for students' everyday lives.",
    tags: ["Flutter", "Dart", "Firebase", "Android"],
    imageUrl: unicampus,
  },
  {
    title: "Wrapped Green",
    description:
      "Created an UI that is accessible on both desktop and mobile devices for restaurants.",
    tags: ["React", "SCSS", "HTML", "JavaScript"],
    imageUrl: wrappedGreen,
  },
  {
    title: "Cab App",
    description:
      "Developed a fully functional taxi app for both users and drivers. This app uses real-time location for routing and fare calculation.",
    tags: ["Flutter", "Dart", "Firebase", "Android"],
    imageUrl: cab,
  },
] as const;

export const skillsData = [
  "Flutter",
  "Dart",
  "State Management",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Redux",
  "GraphQL",
  "Apollo",
  "Framer Motion",
] as const;
