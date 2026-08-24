import "./events.js"


export async function getData(city) {
    if (!city) {
        console.error("Please enter a valid city name")
        return;
    }
    //change url to take value from city variable
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&include=days&key=E7H7GP2QWNQUZCD3QHKF4X7MD&contentType=json`

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Check your city name`)
        }


        const result = await response.json()

        const weatherData = {
            City: result.address,
            Date: result.days[0].datetime,
            Max: result.days[0].tempmax,
            Min: result.days[0].tempmin,
            PrecipetationType: result.days[0].preciptype[0]
        }

        console.log(weatherData)
        return weatherData;

    } catch (error) {
        console.error(error.message);
    }

}

