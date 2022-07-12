// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

let today = new Date();
let day = today.getDay();
let dayList = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

let dd = today.getDay();
dd = (dd < 10) ? "0" + dd : dd;

let mm = today.getMonth();
mm = (mm < 10) ? "0" + mm : mm;

let yyyy = today.getFullYear();
console.log(`Current Date: ${dayList[day]} ${dd}-${mm}-${yyyy}`);