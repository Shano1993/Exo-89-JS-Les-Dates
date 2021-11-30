let timeStamp = document.getElementById('timestamp');
let localTime = document.getElementById('localTime');
let localDate = document.getElementById('localDate');
let date1 = document.getElementById('dateajd');
let date2 = document.getElementById('dateajd2');
let difference = document.getElementById('difference');

//1
let stamp = Date.now();
timeStamp.innerHTML = stamp.toString();

//2
let time = new Date();
localTime.innerHTML = time.toLocaleTimeString();

//3
let date = new Date();
localDate.innerHTML = date.toLocaleDateString();

//4

dateAjd = new Date();
dateAjd2 = new Date();

date1.innerHTML = dateAjd;
dateAjd2.setDate(dateAjd.getDate() + 2);
dateAjd2.setHours(dateAjd.getHours() + 6);
date2.innerHTML = dateAjd2;


let interval = dateAjd.getTime() - dateAjd2.getTime();
let days = Math.floor(interval / 60 / 60 / 24 / 1000);
let hours = Math.floor((interval - (days * 60 * 60 * 24 * 1000)) / 60 / 60 / 1000);

difference.innerHTML += days + " jour(s) ET <br>";
difference.innerHTML += hours + " heure(s) ";




