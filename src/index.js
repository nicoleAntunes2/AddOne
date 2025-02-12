import { getWeather } from "./apiConnection.js";

function search(event) {
  event.preventDefault();

  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");

  cityElement.innerHTML = searchInputElement.value;

  getWeather(searchInputElement.value).then(function (data) {
    if (data !== null) {
      // Atualiza temperatura
      let temperatureElement = document.querySelector("#current-temperature");
      temperatureElement.innerHTML = Math.round(data.temperature);

      // Atualiza descrição do clima
      let descriptionElement = document.querySelector("#current-details");
      descriptionElement.innerHTML = `${data.description}, Humidity: <strong>87%</strong>, Wind: <strong>${data.windSpeed} km/h</strong>`;

      // Atualiza ícone do clima
      let iconElement = document.querySelector(".current-temperature-icon");
      iconElement.innerHTML = `<img src="${data.icon}" alt="${data.description}" />`;
    } else {
      alert("Erro ao buscar as informações meteorológicas. Tente novamente.");
    }
  });
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) minutes = `0${minutes}`;
  if (hours < 10) hours = `0${hours}`;

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return `${days[day]} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

// Atualiza data ao carregar a página
//let currentDateElement = document.querySelector("#current-date");
//let currentDate = new Date();
//currentDateElement.innerHTML = formatDate(currentDate);
// Atualiza data e hora
let currentDateElement = document.querySelector("#current-date");
let currentDate = new Date();
currentDateElement.innerHTML = formatDate(currentDate);
