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

if (dateAjd2 > dateAjd) {
    difference.innerHTML = "La date + 2 jours et 6 heures est plus grande que la date";
}

if (dateAjd < dateAjd2) {
    difference.innerHTML = "La date d'aujourd'hui est plus petite que la date + 2 jours et 6 heures"
}

if (dateAjd2 >= dateAjd) {
    difference.innerHTML = "Ce n'est pas correct, il y a 2 jours et 6 heures d'écart";
}

if (dateAjd <= dateAjd2) {
    difference.innerHTML = "Ce n'est pas correct non plus";
}

