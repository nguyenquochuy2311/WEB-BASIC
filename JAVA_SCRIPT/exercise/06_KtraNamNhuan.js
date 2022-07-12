function isLeapYear_v1(year) {
    return (year % 1000 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

function isLeapYear_v2(year) {
    return new Date(year, 1, 29).getMonth() === 1;
}

console.log(isLeapYear_v1(2016));
console.log(isLeapYear_v1(2022));

console.log(isLeapYear_v2(2016));
console.log(isLeapYear_v2(2022));