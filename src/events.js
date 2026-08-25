import { getData } from "./api.js";
import { makeWeatherCard } from "./card.js";
import { celsiusToFarenheit, farenheitToCelsius } from "./tempratureConvert.js";

const form = document.querySelector("form")
const inputCity = document.querySelector(".search-bar");
const card = document.querySelector(".card")

let weatherData;
let currentTempUnit = "C"

form.addEventListener("submit", async (event) => {

    event.preventDefault()
    if (inputCity.validity.valueMissing) {
        inputCity.setCustomValidity("Enter a city name")
    } else {
        inputCity.setCustomValidity("")
    }


    if (!inputCity.checkValidity()) {
        return
    }

    const city = inputCity.value.trim()

    weatherData = await getData(city);
    currentTempUnit = "C";

    makeWeatherCard(weatherData)
})



card.addEventListener("click", (event) => {
    if (!weatherData) return;

    if (event.target.classList.contains("C")) {
        if (currentTempUnit === "F") {
            weatherData.max = farenheitToCelsius(weatherData.max)
            weatherData.min = farenheitToCelsius(weatherData.min)

            currentTempUnit = "C"
            makeWeatherCard(weatherData)
        }
    }

    else if (event.target.classList.contains("F")) {
        if (currentTempUnit === "C") {
            weatherData.max = celsiusToFarenheit(weatherData.max)
            weatherData.min = celsiusToFarenheit(weatherData.min)

            currentTempUnit = "F"

            makeWeatherCard(weatherData)
        }
    }
})



