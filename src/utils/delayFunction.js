export const delay = (milliseconds, fn) => {
  setTimeout(() => {
    fn();
  }, milliseconds);
};
