"use strict";

function getNumberOfDays(year, monthIndex) {
    const ONE_DAY_IN_MILI = 86400000;
    let month = new Date(year, monthIndex + 1);
    return (new Date(month - ONE_DAY_IN_MILI)).getDate(); 
}

export default getNumberOfDays; 