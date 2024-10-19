import moment from "moment";

// Delivery data
export const deliveries = [
  { id: "1", title: "Ms. Khatun(#1255)", time: "21:45" },
  { id: "2", title: "Raj Barua(#1255)", time: "21:45" },
  { id: "3", title: "Elma Salam(#1255)", time: "21:45" },
  { id: "4", title: "Mr. Hasan(#1255)", time: "21:45" },
  { id: "5", title: "Mr. Mahfuz(#1255)", time: "21:45" },
  { id: "6", title: "Ms. Nazeeba(#1255)", time: "21:45" },
  { id: "7", title: "Mr. Nabeeha(#1255)", time: "21:45" },
  { id: "8", title: "Mr. Mahad(#1255)", time: "21:45" },
  {id: "6", title: "Mr. Warif(#1255)", time: "21:45" },
  { id: "7", title: "Mr. Sozib(#1255)", time: "21:45" },
  { id: "8", title: "Mr. Ahnaf(#1255)", time: "21:45" }

];

// Function to generate a random date in 2024 and a random time between 7 AM and 11 PM
export const getRandomDateAndTime = () => {
  const randomDate = moment()
    .year(2024)
    .subtract(Math.floor(Math.random() * 365), "days")
    .format("D MMMM YYYY, dddd");

  const randomHour = Math.floor(Math.random() * (23 - 7 + 1)) + 7;
  const randomMinute = Math.floor(Math.random() * 60);
  const formattedTime = `${randomHour}:${randomMinute
    .toString()
    .padStart(2, "0")}`;

  return { randomDate, formattedTime };
};
