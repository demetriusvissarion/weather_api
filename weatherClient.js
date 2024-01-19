const apiKey = require('./apiKey');

class WeatherClient {
    constructor() {
        this.apiUrl = ''
    }
    
    async fetchWeatherData(city) {
        this.apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
        const response = await fetch(this.apiUrl);
        const data = await response.json();
        return data
    }
}


module.exports = WeatherClient;

////// Challenge 1.
// Example usage:
// const client = new WeatherClient();

// client.fetchWeatherData('London').then((weatherData) => {
//     console.log(`Weather data for ${weatherData.name}:`)
//     console.log(weatherData);
// });

// node weatherClient.js
