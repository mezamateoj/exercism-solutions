// https://adventjs.dev/es/challenges/2022/2

function countHours(year, holidays) {
    let weekDays = [];
    for (let i = 0; i < holidays.length; i++) {
        holidays[i] = holidays[i].split('/').join('-')
        weekDays.push(new Date(`${year}-${holidays[i]}`).getDay())
    }
    return weekDays;
}

const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.

console.log(countHours(year, holidays)) // 2 días -> 4 horas extra en el año