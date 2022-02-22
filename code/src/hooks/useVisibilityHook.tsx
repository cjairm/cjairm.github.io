import { useState, useEffect } from "react";

const defaultConfig = {
  root: null,
  threshold: 1.0,
  rootMargin: "0px",
};

const useVisibilityHook = (options = {}, visible = false) => {
  let observer: IntersectionObserver;
  const [isVisible, setIsVisible] = useState(visible);
  const [element, setElement] = useState<any>(null);

  const forceVisible = () => {
    setIsVisible(true);
  };

  const forceCheck = () => {
    observer.unobserve(element);
    observer.observe(element);
  };

  const visibilityCallBack = ([entry]: any) => {
    if (entry.isIntersecting) {
      setIsVisible(true);
      observer.disconnect();
    }
  };

  useEffect(() => {
    if (visible) {
      forceVisible();
    }
  }, [visible]);

  useEffect(() => {
    if (!element) {
      return;
    }
    observer = new IntersectionObserver(visibilityCallBack, {
      ...defaultConfig,
      ...options,
    });
    observer.observe(element);
    return () => observer && observer.disconnect && observer.disconnect();
  }, [element, options]);

  return { setElement, isVisible, forceVisible, forceCheck };
};

export default useVisibilityHook;
