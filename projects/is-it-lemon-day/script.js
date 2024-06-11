const currentDate = new Date();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let day = weekday[currentDate.getDay()];
let month = currentDate.getMonth() + 1;
let year = currentDate.getFullYear();


document.getElementById("date").innerHTML = checkDateLemonness(day, month, year);

function checkDateLemonness(day, month, year){
    return day;
}