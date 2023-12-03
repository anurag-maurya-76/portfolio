"use client";
import React from "react";
import SectionHeading from "./reusable/section-heading";
import { projectsData } from "@/app/lib/data";
import Project from "./reusable/project";
import { useSectionInView } from "@/app/lib/hooks";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section id="projects" className="scroll-mt-28" ref={ref}>
      <SectionHeading>Projects</SectionHeading>
      {projectsData.map((project, index) => (
        <React.Fragment key={index}>
          <Project {...project} />
        </React.Fragment>
      ))}
    </section>
  );
};
export default Projects;
