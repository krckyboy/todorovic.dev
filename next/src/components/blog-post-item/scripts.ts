export const convertToHumanReadableDate = (date: string) => {
  const dateObj = new Date(date);

  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1; // Months are zero-based index, so we add 1
  const year = dateObj.getFullYear();

  // Pad the day and month with a leading zero if they are less than 10
  const formattedDay = day < 10 ? '0' + day : day;
  const formattedMonth = month < 10 ? '0' + month : month;

  return `${formattedDay}-${formattedMonth}-${year}`;
};
