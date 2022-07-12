let today = new Date();
let day = today.getDay();
let dayList = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

console.log("Day of Week: " + dayList[day]);

let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();

console.log(`Current time (24h): ${hour}h : ${minute}m : ${second}s`);

let prepand = (hour >= 12) ? "PM" : "AM";
hour = (hour >= 12) ? hour - 12 : hour;

// Case 'Noon' or 'Midnight'


console.log(`Current time (12h): ${hour}h ${prepand} : ${minute}m : ${second}s`);