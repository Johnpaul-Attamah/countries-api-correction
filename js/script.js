const container = document.querySelector(".main-container");
const regions = document.querySelector(".region-dropdown");
const search = document.querySelector(".search-box  input");

document.addEventListener("DOMContentLoaded", () => {
  getAllCountries();
  searchCountries(search);
  regions.addEventListener("click", (e) => {
    if (e.target.matches(".region")) {
      getCountriesByRegion(e.target.textContent);
    }
  });
});

function searchCountries(element) {
  element.addEventListener("input", (e) => {
    if (/^[a-z]+$/gi.test(e.target.value)) {
      getSearchData(e.target.value);
    }
  });
}
async function getAllCountries() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const result = await response.json();
    result.forEach((country) => getCountriesElement(country));
  } catch (error) {
    console.log(error);
  }
}

async function getCountriesByRegion(region) {
  try {
    container.innerHTML = "";
    const response = await fetch(
      `https://restcountries.com/v3.1/region/${region}`
    );
    const result = await response.json();
    result.forEach((country) => getCountriesElement(country));
  } catch (error) {
    console.log(error);
  }
}

async function getSearchData(data) {
  container.innerHTML = "";
  const URL = await fetch(`https://restcountries.com/v2/name/${data}`);
  const response = await URL.json();
  response.forEach((element) => {
    getCountriesElement(element);
  });
}

function getCountriesElement(country) {
  const countryContainer = document.createElement("a");
  countryContainer.className = "country-container"
  const figure = document.createElement("figure");
  figure.className = "country";
  
  let countryName;
  
  if (typeof country.name === "string") {
      countryName = country.name;
    } else {
        countryName = country.name.common;
    }

  countryContainer.href= `/pages/countryDetails.html?country=${countryName}`

  const allcontainer = `
    <div class="country-flag">
    <img
    src=${country.flags.png}
    alt=${countryName}
              width="200"
              height="120"
            />
          </div>
        <figcaption class="country-desc">
            <h3 class="country-name">${countryName}</h3>
            <div class="details">
              <p class="population">Population: ${country.population}</p>
              <p class="country-region">Region: ${country.region}</p>
              <p class="capital">Capital: ${country.capital ?? ""}</p>
            </div>
        </figcaption>
    `;

  figure.innerHTML = allcontainer;
  countryContainer.appendChild(figure)

  container.appendChild(countryContainer);
}
