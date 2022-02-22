import { scrollIntoView } from "scroll-js";

export const animateCSS = (
  htmlElement: HTMLElement | HTMLDivElement,
  animation: string,
  prefix = "animate__"
): Promise<void> => {
  // We create a Promise and return it
  return new Promise((resolve) => {
    const animationName = `${prefix}${animation}`;

    htmlElement?.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event: Event) {
      event.stopPropagation();
      htmlElement?.classList.remove(`${prefix}animated`, animationName);
      resolve();
    }

    htmlElement?.addEventListener("animationend", handleAnimationEnd, {
      once: true,
    });
  });
};

export const stringifyStyleAttribute = (style?: {
  [key: string]: string | number;
}) => {
  return style
    ? Object.entries(style)
        .map(([k, v]) => `${k}:${v}`)
        .join(";")
    : "";
};

export const scrollToViewById = (id: string) => {
  const viewById = document.getElementById(id) as HTMLElement;
  scrollIntoView(viewById, document.body, { behavior: "smooth" });
};
