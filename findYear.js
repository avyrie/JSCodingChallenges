// Given a specific year and a number representing the day of the year return 'Day {day} of {month name} in the year {year}'
// Remember these rules about leap years:
// if the year % 400 === 0 it is a leap year
// if the year % 100 === 0 it is not a leap year (unless it is also divisible by 400)
// if the year % 4 === 0 it is a leap year
// If the year is a leap year February will have 29 days, if not it will have 28
// Assume the year will always be AD

// Tests
// findDate(1979, 220) will return 'Day 8 of August in the year 1979'
// findDate(1980, 220) will return 'Day 7 of August in the year 1980'
// findDate(2000, 385) will return 'Day 19 of January in the year 2001'
// findDate(800, 72) will return 'Day 12 of March in the year 800'
// findDate(700, 72) will return 'Day 13 of March in the year 700'
// dates (months, day of week) are 0 indexed

const date = new Date(1979, 0, 220);
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const year = date.getFullYear();
const month = months[date.getMonth()];
const day = date.getDate();
console.log(`Day ${day} of ${month} in the year ${year}`)
