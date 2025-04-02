function calcScrollWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

export const setBodyOverflowHidden = () => {
  const scrollWidth = calcScrollWidth();
  document.body.style.setProperty("--scroll-width", `${scrollWidth}px`);
  document.body.classList.add("overflow-hidden");
};
export const setBodyOverflowVisible = () => {
  document.body.classList.remove("overflow-hidden");
  document.body.style.removeProperty("--scroll-width");
};

export const setBodyOverflowYAuto = () =>
  (document.body.style.overflowY = "auto");
