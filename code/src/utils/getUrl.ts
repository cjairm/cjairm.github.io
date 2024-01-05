export const getUrl = () => {
  const url = new URL(
    window.location.pathname + window.location.search,
    window.location.origin,
  );
  return url;
};
