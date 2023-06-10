export const getFormattedDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedDay = day < 10 ? `0${day}` : day;

  return `${year}-${formattedMonth}-${formattedDay}`;
};

export const getDateMinusDays = (date, days) => {
  const year = date.getFullYear();
  const month = date.getMonth() ;
  const day = date.getDate() - days;

  return new Date(year, month, day);
};
