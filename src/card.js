const card = document.querySelector(".card")



export function makeWeatherCard(weatherData) {

    card.textContent = "";
    const cityName = document.createElement("h2")
    cityName.classList.add("city")
    cityName.textContent = `City: ${weatherData.city}`;


    const date = document.createElement("div")
    date.classList.add("date")
    date.textContent = `Date: ${weatherData.date}`;


    const maxTemp = document.createElement("div")
    maxTemp.classList.add("max")
    maxTemp.textContent = `Maximum Temperature: ${Number(weatherData.max)}`;


    const minTemp = document.createElement("div")
    minTemp.classList.add("min")
    minTemp.textContent = `Minimum Temperature: ${Number(weatherData.min)}`;


    const percipitation = document.createElement("div")
    percipitation.classList.add("percip")
    percipitation.textContent = `Percepitation: ${weatherData.precipetationType}`;

    const celsiusBtn = document.createElement("button")
    celsiusBtn.type = "button";
    celsiusBtn.textContent = "°C"
    celsiusBtn.classList.add("C")

    const farenheitBtn = document.createElement("button")
    farenheitBtn.type = "button";
    farenheitBtn.textContent = "°F"
    farenheitBtn.classList.add("F")


    card.append(cityName, date, maxTemp, minTemp, percipitation, celsiusBtn, farenheitBtn)

}

