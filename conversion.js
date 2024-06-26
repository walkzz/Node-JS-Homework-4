// miles to km
const convertMilesToKm = (value) => {
    return value * 1.6;
};

// celcius to farenheit
 
const celsiusToFahrenheit = (value) => {
    return (value * 9 / 5) + 32;
}

// lbs to kg
 
const poundsToKg = (value) => {
    return value / 2.205;
}

// feet to meters
 
const feetToMeters = (value) => {
    return value / 3.281;
}

module.exports = {
    convertMilesToKm,
    celsiusToFahrenheit,
    poundsToKg,
    feetToMeters
};