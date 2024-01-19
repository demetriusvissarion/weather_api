const WeatherClient = require('./weatherClient');

class Weather {
    constructor(client) {
        this.client = client
        this.weatherData = null;
    }
    
    async load(city) {
        this.weatherData = await this.client.fetchWeatherData(city)
    }

    getWeatherData() {
        // console.log(this.weatherData)
        return this.weatherData
    }
}


module.exports = Weather;

////// Challenge 2.
// in node REPL

// async function main() {
//     const client = new WeatherClient();
//     const weather = new Weather(client);
//     await weather.load('Bristol');
//     const weatherData = weather.getWeatherData();
//     console.log('weatherData:', weatherData);
// }
// main();

// node weather.js