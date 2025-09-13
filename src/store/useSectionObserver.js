import { useEffect } from "react";
import { useNavStore } from "../store/navStore";

export const useSectionObserver = (sectionId) => {
  const setActiveSection = useNavStore((state) => state.setActiveSection);

  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(sectionId);
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [sectionId, setActiveSection]);
};
