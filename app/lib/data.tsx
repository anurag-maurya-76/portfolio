import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import unicampus from "@/public/unicampus.png";
import wrappedGreen from "@/public/wrapped-green.png";
import cab from "@/public/cab.png";

const totalExperience =
  Math.floor(
    (((new Date().getFullYear() - new Date("06/16/2022").getFullYear()) * 12 +
      (new Date().getMonth() - new Date("06/16/2022").getMonth())) /
      12) *
      100,
  ) / 100;

export const social = {
  linkedIn: "https://www.linkedin.com/in/maurya-anurag/",
  github: "https://github.com/anurag-maurya-76",
  resume:
    "https://docs.google.com/document/d/155B1Z379vI-A9KgLZRBDQkTlMHEM3V5GqyINX_d6-64/edit",
};

export const intro = {
  title: "Hello It's Me, Anurag Maurya.",
  subtitle: `I'm a Software Engineer with ${totalExperience} years of experience. My keen interest lies in developing websites and mobile applications, and my specialization revolves around ReactJS and Flutter.`,
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
    title: "Graduation (Gold Medalist)",
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
      "Currently employed as a Frontend Developer at UIDAI in Bangalore, I am proficient in utilizing a technology stack that encompasses Flutter, ReactJS and Springboot. I am actively seeking full-time opportunities.",
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
    link: "https://www.linkedin.com/posts/anurag-maurya-98870416a_teameffort-flutter-flutterapp-activity-6937284272483377152-qzUr",
  },
  {
    title: "Wrapped Green",
    description:
      "Created an UI that is accessible on both desktop and mobile devices for restaurants.",
    tags: ["React", "SCSS", "HTML", "JavaScript"],
    imageUrl: wrappedGreen,
    link: "https://github.com/anurag-maurya-76/wrapped-green-ui",
  },
  {
    title: "Cab App",
    description:
      "Developed a fully functional taxi app for both users and drivers. This app uses real-time location for routing and fare calculation.",
    tags: ["Flutter", "Dart", "Firebase", "Android"],
    imageUrl: cab,
    link: "https://www.linkedin.com/posts/anurag-maurya-98870416a_flutter-firebase-flutterdev-activity-6811193740384899072-a__f",
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
