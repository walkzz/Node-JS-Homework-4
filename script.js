const http = require('http');
const url = require('url');
const {
    convertMilesToKm,
    celsiusToFahrenheit,
    poundsToKg,
    feetToMeters
} = require('./conversion.js');
function handler(req, res) {
    const url = req.url;
    console.log("url", url);
    const [, operacija, numOne, numTwo] = req.url.split("/");
    let result = "";
    switch (operacija) {
        case "sobiranje":
            result = Number(numOne) + Number(numTwo);
            res.end(result.toString());
            break;
        case "razlika":
            result = Number(numOne) - Number(numTwo);
            res.end(result.toString());
            break;
        case "mnozhenje":
            result = Number(numOne) * Number(numTwo);
            res.end(result.toString());
            break;
        case "delenje":
            result = Number(numOne) / Number(numTwo);
            res.end(result.toString());
            break;
            // exported functions
        case "convertMilesToKm":
            console.log(convertMilesToKm(10));
            res.end(convertMilesToKm(10).toString());
            break;
        case "celsiusToFahrenheit":
            console.log(celsiusToFahrenheit(10));
            res.end(celsiusToFahrenheit(10).toString());
            break;
        case "poundsToKg":
            console.log(poundsToKg(10));
            res.end(poundsToKg(10).toString());
            break;
        case "feetToMeters":
            console.log(feetToMeters(10));
            res.end(feetToMeters(10).toString());
            break;
        default:
            res.end("Welcome to calculator app!");
    }
}
const newServer = http.createServer(handler);
if(newServer){
    console.log("Server Created");
} else{
    console.error("Error starting server");
}
newServer.listen(10000);