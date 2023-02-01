// Global Variables
const countryContainer = document.querySelector(".country-detail-container");
const goBack = document.querySelector(".back");

const searchStr = window.location.search.slice(1);

let searchArr = searchStr.split("&");
let countryName = "";

let str = searchArr.find((str) => str.split("=").includes("country"));
countryName = str.split("=")[1].toLowerCase();

document.addEventListener("DOMContentLoaded", () => {
  // Handle go back
  goBack.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "/index.html";
  });

  getCountryDetails(countryName);
});

// searchArr.forEach(str => {
//     if(str.split("=").includes("country")) {
//         countyName = str.split("=")[1].toLowerCase();
//     }
// })

async function getCountryDetails(name) {
  let response = await fetch(`https://restcountries.com/v2/name/${name}`);
  let result = await response.json();
  return await displayCountryElement(result[0]);
}

async function displayCountryElement(country) {
  let languages = country.languages.map((lang) => lang.name);
  const countryDetails = `
        <div class="count-flag">
          <img
            src=${country.flag}
            alt=${country.name}
            width="400"
            height="300"
          />
        </div>
        <div class="country-details">
          <div class="row">
            <div class="count-desc">
              <h3 class="count-name">${country.name}</h3>
              <div class="count-details">
                <p class="count-population">Population: ${
                  country.population
                }</p>
                <p class="count-region">Region: ${country.region}</p>
                <p class="count-sub">sub region: ${country.subregion}</p>
                <p class="count-capital">Capital: ${country.capital}</p>
              </div>
            </div>
            <div class="desc">
              <p class="count-level">top level domain: ${
                country.topLevelDomain
              }</p>

              <p class="currencies">currencies: ${
                country.currencies[0].name
              }</p>

              <p class="language">language: ${languages.join(", ")}</p>
            </div>
          </div>
          ${await displayBorders(country)}
        </div>
    `;

  countryContainer.innerHTML = countryDetails;
}

async function displayBorders(country) {
  let borders = "";
  if (country.borders) {
    for (let border of country.borders) {
      const borderCountry = await getCountryNameFromCodes(border);
      borders += `<a href="/pages/countryDetails.html?country=${borderCountry.name}" class="border-country">${borderCountry.name}</a>`;
    }
    return `
        <div class="row border-container">
        <h4 class="border-text">Border Countries:</h4>
        <div class="borders">
            ${borders}
        </div>
      </div>
        `;
  } else {
    return "";
  }
}

async function getCountryNameFromCodes(code) {
  const response = await fetch(`https://restcountries.com/v2/alpha/${code}`);
  const result = await response.json();

  return result;
}
