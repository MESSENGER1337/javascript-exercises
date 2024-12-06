
const leapYears = (year) => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);



leapYears(1600);
// Do not edit below this line
module.exports = leapYears;

// npm test leapYears.spec.js
