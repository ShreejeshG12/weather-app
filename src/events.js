import { getData } from "./api.js";

const form = document.querySelector("form")
const inputCity = document.querySelector(".search-bar");



form.addEventListener("submit", (event) => {

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

    getData(city);
})

