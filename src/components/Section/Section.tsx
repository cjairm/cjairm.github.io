import React, { useRef, useEffect, useState } from "react";
import styles from "./Section.module.scss";

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className, children }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Skip animation if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      setHasAnimated(true);
      return;
    }

    const currentSection = sectionRef.current;
    if (!currentSection) return;

const observer = new IntersectionObserver(
  (entries) => {
    const [entry] = entries;
    // Only animate once when section comes into view
    if (entry.isIntersecting && !hasAnimated) {
      setIsVisible(true);
      setHasAnimated(true);
      // We can stop observing after the animation has been triggered
      observer.unobserve(currentSection);
    }
  },
  {
    root: null, // viewport
    rootMargin: "0px 0px -5% 0px", // Trigger earlier for smoother traditional scrolling
    threshold: 0.05, // Trigger when just 5% of the section is visible for earlier animation
  },
);

    observer.observe(currentSection);

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, [hasAnimated]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`${styles.section} ${className || ""}`}
    >
      <div className={`${styles.reveal} ${isVisible ? styles.visible : ""}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;

