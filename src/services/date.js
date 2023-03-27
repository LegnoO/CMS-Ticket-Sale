/** @format */
import _ from "lodash";

export const groupAndSortDataByDate = (data) => {
  const sort = data.sort((a, b) => new Date(a.date) - new Date(b.date));
  const groupBy = _.groupBy(sort, "day_of_week");
  const result = Object.values(groupBy)
    .map((subArray) => subArray.map((obj) => obj))
    .flat();

  return result;
};

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
