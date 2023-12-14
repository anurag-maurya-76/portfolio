import { useActiveSectionContext } from "@/context/active-section-context-provider";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold: number) {
  const { timeOfLastClick, setActiveSection } = useActiveSectionContext();
  const { ref, inView } = useInView({ threshold: threshold });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);
  return { ref };
}
