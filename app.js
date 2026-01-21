const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const day = document.getElementById("day");

const monthName = [
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
setInterval(function () {
  const today = new Date();

  let d = today.getDate();
  let m = today.getMonth();
  let y = today.getFullYear();

  let h = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  let ampm = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;

  h = String(h).padStart(2, "0");
  min = String(min).padStart(2, "0");
  sec = String(sec).padStart(2, "0");

  day.innerHTML = `${d} ${monthName[m]} ${y}`;
  hour.textContent = h;
  minute.innerText = min;
  second.innerText = sec;
  document.getElementById("ampm").innerText = ampm;
}, 1000);
