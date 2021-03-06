document.querySelector('#last-modified').textContent = document.lastModified;
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}


let date = new Date();
let day = date.getDay();
let dateDay = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

var dayName;

switch(day) {
    case 0:
        dayName = "Sunday";
        break;
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday"
        break;
}

var monthName;

switch(month) {
    case 0:
        monthName = "January";
        break;
    case 1:
        monthName = "February";
        break;
    case 2:
        monthName = "March";
        break;
    case 3:
        monthName = "April";
        break;
    case 4:
        monthName = "May";
        break;
    case 5:
        monthName = "June";
        break;
    case 6:
        monthName = "July"
        break;
    case 7:
        monthName = "August";
        break;
    case 8:
        monthName = "September";
        break;
    case 9:
        monthName = "October";
        break;
    case 10:
        monthName = "November";
        break;
    case 11:
        monthName = "December";
        break;
}

let wholeDate = dayName + ", " + dateDay + " " + monthName + " " + year;

document.getElementById("date").innerHTML = wholeDate;



let messageSection = document.querySelector("#message");

if (day == 5) {
    messageSection.classList.add("showmessage");
} else {
    messageSection.classList.add("hidemessage");
}



let lastVisitDay = new Date(localStorage.getItem("lastVisit"));
const diffInTime = date - lastVisitDay;
const oneDay = 1000 * 60 * 60 * 24;
const diffInDays = Math.ceil(diffInTime / oneDay);

if (diffInDays < 2) {
    if (diffInDays == 1) {
        document.querySelector("#visit").textContent = "Last visit: 1 Day Ago";
    }
} else {
    document.querySelector("#visit").textContent = `Last visit: ${diffInDays} Days Ago`;
}

localStorage.setItem("lastVisit", date.toISOString());
document.querySelector('#current-year').textContent = new Date().getFullYear();
document.querySelector('#last-modified').textContent = document.lastModified;
