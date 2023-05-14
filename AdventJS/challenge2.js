// https://adventjs.dev/es/challenges/2022/2

function countHours(year, holidays) {
    let weekDays = [];
    for (let i = 0; i < holidays.length; i++) {
        holidays[i] = holidays[i].split('/')
        let date = new Date(year, parseInt(holidays[i][0]) - 1, parseInt(holidays[i][1]))
        weekDays.push(date.getDay())
    }    
    weekDays = weekDays.filter((day) => day !== 0 && day !== 6)
    return weekDays.length * 2;
}

const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.

console.log(countHours(year, holidays)) // 2 días -> 4 horas extra en el año