// Date Object Helper Functions
function getDayShortName(day) {
    switch (day) {
        case 0:
            return "sun";
        case 1:
            return "mon";
        case 2:
            return "tue";
        case 3:
            return "wed";
        case 4:
            return "thu";
        case 5:
            return "fri";
        case 6:
            return "sat";
    }
}

function getMonthShortName(month) {
    switch (month) {
        case 0:
            return "jan";
        case 1:
            return "feb";
        case 2:
            return "mar";
        case 3:
            return "apr";
        case 4:
            return "may";
        case 5:
            return "jun";
        case 6:
            return "jul";
        case 7:
            return "aug";
        case 8:
            return "sept";
        case 9:
            return "oct";
        case 10:
            return "nov";
        case 11:
            return "dec";
    }
}

function getMonthName(month) {
    switch (month) {
        case 0:
            return "january";
        case 1:
            return "feburary";
        case 2:
            return "march";
        case 3:
            return "april";
        case 4:
            return "may";
        case 5:
            return "june";
        case 6:
            return "july";
        case 7:
            return "august";
        case 8:
            return "september";
        case 9:
            return "october";
        case 10:
            return "november";
        case 11:
            return "december";
    }
}

function previousDay(date) {
    return new Date(date.getTime() - hoursToMiliseconds(24));
}

function nextDay(day) {
    return new Date(date.getTime() + hoursToMiliseconds(24)); 
}

function hoursToMiliseconds(hour) {
    return secondsToMiliseconds(minuteToSeconds(hoursToMinutes(hour)));
}

function hoursToMinutes(hour) {
    return hour * 60;
}

function minuteToSeconds(minutes) {
    return minutes * 60;
}

function secondsToMiliseconds(seconds) {
    return seconds * 1000;
}

function dateShortFormat(date) {
    let dayShortName = getDayShortName(date.getDay()), 
        monthName = getMonthName(date.getMonth()), 
        date = date.getDate();

    return `${dayShortName}, ${monthName} ${date}`; 
}