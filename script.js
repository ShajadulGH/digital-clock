window.addEventListener("load", () => {
  calculateTime();
});
const calculateTime = () => {
  let date = new Date();
  let day = date.getDay();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let ampm = hour >= 12 ? "PM" : "AM";
  let mainHour = hour % 12;
  mainHour = mainHour === 0 ? 12 : mainHour;
  mainHour = mainHour < 10 ? "0" + mainHour : mainHour;
  let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let newDay = document.querySelectorAll("#day");
  newDay[0].innerHTML = days[day];
  let newHour = document.querySelectorAll("#hour");
  newHour[0].innerHTML = mainHour;
  let newMinute = document.querySelectorAll("#minute");
  newMinute[0].innerHTML = minute;
  let newAmpm = document.querySelectorAll("#ampm");
  newAmpm[0].innerHTML = ampm;
};
