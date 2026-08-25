export function celsiusToFarenheit(celsius) {
    return ((celsius * 9 / 5) + 32).toFixed(3)
}

export function farenheitToCelsius(farenheit) {
    return ((farenheit - 32) * 5 / 9).toFixed(3)
}