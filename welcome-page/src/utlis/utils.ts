export const randomUnique = (() => {
  let prev = 0;
  return (range: number) => {
    let next = 0;
    do {
      next = Math.round(Math.random() * range);
    } while (next === prev);
    prev = next;

    return next;
  };
})();
