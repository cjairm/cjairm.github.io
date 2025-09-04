export const handleScrollTo = (
  e: React.MouseEvent<HTMLAnchorElement>,
  id: string,
  setIsMenuOpen?: (val: boolean) => void,
) => {
  e.preventDefault();
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen?.(false);
  }
};
