const endpoint = 'https://www.gov.uk/bank-holidays.json';
const ul = document.getElementById('holidays')

let bankHolidays;
let england;

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => handleDates(data));

function handleDates(data) {
    bankHolidays = data;
    england = bankHolidays["england-and-wales"].events;
    var now = new Date();
    var thisMonth = now.getUTCMonth() + 1; //months from 1-12
    var thisDay = now.getUTCDate();
    var thisYear = now.getUTCFullYear();
    var thisDate = thisYear + '-' + thisMonth + '-' + thisDay;
    const html = england.map((items) => {
        const [year, month, date] = items.date.split("-");
        // console.log(thisDate, items.date);              
        if (Date.parse(thisDate) <= Date.parse(items.date)) {
            return `
      <li>${items.title} <br/> <span class='yellow'>(${date} / ${month} / ${year})</span>  </li>
      `;
        }

    }).join('');
    ul.innerHTML = html;
}