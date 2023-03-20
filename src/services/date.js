/** @format */

export const dateFormat = (date) => {
  const newDate = new Date(date * 1000);

  return (
    newDate.getDate() +
    "/" +
    (newDate.getMonth() + 1) +
    "/" +
    newDate.getFullYear()
  );
};
