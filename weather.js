// const WeatherClient = require('./weatherClient');

class Weather {
    constructor(client) {
        this.client = client
        this.weatherData
    }
    
    load(city) {
        this.weatherData = this.client.fetchWeatherData(city)
    }

    getWeatherData() {
        console.log(this.weatherData)
        return this.weatherData
    }
}


module.exports = Weather;

////// Challenge 2.
// in node REPL

// const client = new WeatherClient();
// const weather = new Weather(client);

// weather.load('Bristol');
// // then, after some time
// weather.getWeatherData();