module.exports = function getSeason(date) {
  const season = ["winter", "spring", "summer", "autumn"];

  if (!date) {
    return "Unable to determine the time of year!";
  }

  if (!(date instanceof Date) || isNaN(date)) throw new Error(); /*isNaN(new Date().toString());// true*/

  let month = date.getMonth();

  if (month == 0 || month == 1 || month == 11) {
    return season[0];
  } else if (month > 1 && month < 5) {
    return season[1];
  } else if (month > 4 && month < 8) {
    return season[2];
  } else {
    return season[3];
  }
};
