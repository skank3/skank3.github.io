const currentDate = new Date('Jan 13, 2020');
const WEEKDAYS = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

const announcementText = document.getElementById('announcement');

checkLemonDate(currentDate);
showDates(currentDate)

function checkLemonDate(_date){
    let date = _date.getDate().toString();
    let dayOfWeek = WEEKDAYS[_date.getDay()].toString();
    let month = (_date.getMonth()+1).toString();

    let dateMD = (month+date+dayOfWeek);
    let dateDM = (date+month+dayOfWeek);

    var isLemonDayMD = isLemon(dateMD);
    var isLemonDayDM = isLemon(dateDM);

    if (isLemonDayMD && isLemonDayDM){
        announcementText.innerHTML = "It is lemon day in places that use either the MM/DD or DD/MM format!";
        //Note: This is impossible.
    }
    else if (isLemonDayMD == true){
        announcementText.innerHTML = "It is lemon day in places that use the MM/DD format!";
        appendLemon("lemonMD");
    }
    else if (isLemonDayDM == true){
        announcementText.innerHTML = "It is lemon day in places that use the DD/MM format!";
    }
    else if (!isLemonDayDM && !isLemonDayMD){
        announcementText.innerHTML = "It is not lemon day :(";
    }

}

function isLemon(date){
    switch(date.toLowerCase().search('13mon')){
        case -1:
            return false;
        default:
            return true;
    }
}

function showDates(date){
    let mm = date.getMonth() + 1;
    let dd = date.getDate();
    let dayOfTheWeek = WEEKDAYS[date.getDay()]; 
    
    let dateMDFormatted = mm + '/' + dd + '/' + dayOfTheWeek.toLowerCase()
    let dateDMFormatted = dd + '/' + mm + '/' + dayOfTheWeek.toLowerCase()

    document.getElementById('dateMD').innerHTML = dateMDFormatted;
    document.getElementById('dateDM').innerHTML = dateDMFormatted;
}

function appendLemon(id){
    var img = document.createElement("img");
    img.src = "lemon.png";
    img.style.height = '100px';
    img.style.width = '100px';
    var src = document.getElementById(id);
    src.appendChild(img)
}