const monthsNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const convertUnixtoDate = (unix) => {
  const date = new Date(unix);
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${day} ${
    monthsNames[monthIndex]
  } ${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
};


export function getCurrentTime() {
  return Date.now()
}