const WeatherClient = require('./weatherClient')
const Weather = require('./weather')

describe('Integration tests for the Weather class', () => {
    beforeEach(() => {
        // Before each test, reset
    });

    it('gets WeatherData for a city', async () => {
        const client = new WeatherClient();
        const weather = new Weather(client);
        
        weather.load('Bristol');
        const weatherData = await weather.getWeatherData();
        expect(weatherData.main.temp).toEqual(-5.18);
    });
});

// const doubleCandy2 = {
//     name : 'Skittle',
//     price : 3.99,
//     getName: () => { return doubleCandy2.name },
//     getPrice: () => { return doubleCandy2.price },
// }
// basket.addItem(doubleCandy2);


// You'll now if it works if (in order of important to less important):
// The code above works in the REPL, and you get the correct weather data from getWeatherData().
// Your tests pass.
// You can break the class WeatherClient and your unit tests for Weather still pass.