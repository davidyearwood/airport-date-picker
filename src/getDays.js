import getNumberOfDays from './getNumberOfDays.js';

function getDays(year, monthIndex) {
    var numberOfDays = getNumberOfDays(year, monthIndex); 
    var days = [];

    for (var i = 1; i <= numberOfDays; i++) {
        days.push(new Date(year, monthIndex, i));
    }

    return days; 
}

export default getDays; 