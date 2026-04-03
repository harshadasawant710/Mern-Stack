//1
const now = new Date()
console.log(now)

//2
const ymd = new Date(2026, 2, 12)
console.log(ymd)

console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDate())

//3
function dateConvert(now) {
    const dateIs = `${now.getDate()}-${now.getMonth()}-${now.getFullYear()}`
    const dayHr = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
    return dateIs
}
dateConvert(now)
console.log(dateConvert(now), 'here')

//4
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = days[(now.getDay())]
console.log('today', today)

//5
let birthDate = "1998-06-15"
const birthDateObj = new Date(birthDate);
function findAge(birthDateObj, now) {
    let yearDiff = now.getFullYear() - birthDateObj.getFullYear()
    let monthDiff = now.getMonth() - birthDateObj.getMonth()
    let dateDiff = now.getDate() - birthDateObj.getDate()

    if (monthDiff < 0 || (monthDiff === 0 && dateDiff < 0)) {
        yearDiff--;
    }
    return yearDiff
}

findAge(birthDateObj, now)
console.log(findAge(birthDateObj, now))

//6
let date1 = new Date("2026-02-01")
let date2 = new Date("2026-02-20")
//console.log(date1,date2)
function dayBet(date2, date1) {
    const diffInMs = date2 - date1
    const msInDay = 1000 * 60 * 60 * 24;

    const diffInDays = diffInMs / msInDay;

    return diffInDays;
}
dayBet(date2, date1)
console.log(dayBet(date2, date1))

//7
function future10(now) {
    let getdate10 = now.getDate() + 10
    getdate10 = Number.getdate10 -`${now.getMonth()}-${now.getFullYear()}`
    return getdate10
}

future10(now)
console.log(future10(now))

