const WeatherClient = require('./weatherClient')
const Weather = require('./weather')

describe('Integration tests for the Weather class', () => {
    beforeEach(() => {
        // Before each test, reset
    });

    it('gets WeatherData for a city', async () => {
        const client = new WeatherClient();
        const weather = new Weather(client);
        
        await weather.load('Bristol');
        const weatherData = weather.getWeatherData();
        expect(weatherData.name).toEqual('Bristol');
    });
});


// You'll now if it works if (in order of important to less important):
// The code above works in the REPL, and you get the correct weather data from getWeatherData().
// Your tests pass.
// You can break the class WeatherClient and your unit tests for Weather still pass.