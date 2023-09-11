export const getDayName = (date) => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dayIndex = date.getDay(); // Get the day index (0-6) from the date object

  return daysOfWeek[dayIndex];
}
