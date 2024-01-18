const apiKey = require('./apiKey');

class WeatherClient {
    constructor() {
        this.apiUrl = ''
    }
    
    fetchWeatherData(city) {
        this.apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
        return fetch(this.apiUrl).then((response) => response.json());
    }
}


// module.exports = WeatherClient;

// Example usage:
const client = new WeatherClient();

client.fetchWeatherData('London').then((weatherData) => {
    console.log(`Weather data for ${weatherData.name}:`)
    console.log(weatherData);
});

// node weatherClient.js