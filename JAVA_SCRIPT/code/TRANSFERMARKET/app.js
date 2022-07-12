const endpoint = "https://transfermarket.p.rapidapi.com/search?query=chelsea"
    // const endpoint = "https://transfermarket.p.rapidapi.com/clubs"
const ul = document.getElementById("list");

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'transfermarket.p.rapidapi.com',
        'X-RapidAPI-Key': '690a2ba619mshfda8e5432dc474fp1b66f7jsn682c48d29e61'
            // get key: https://rapidapi.com/developer/dashboard
    }
};

let rawData;
let array;
const main_key = "players";

fetch(endpoint, options)
    .then(response => response.json())
    .then((data) => console.log(data))
    // .then(data => handleData(data))
    .catch(err => console.error(err));

function handleData(data) {
    rawData = data;
    array = rawData[main_key];

    const html = array.map((items) => {
        return `<li>${items.playerName}
                <img src='${items.playerImage}'
        </li>`;
    }).join(' ');

    ul.innerHTML = html;
}