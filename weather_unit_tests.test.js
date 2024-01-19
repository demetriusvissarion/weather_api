const Weather = require('./weather')

describe('Unit tests for the Weather class', () => {
    beforeEach(() => {
        // Before each test, reset
    });

    it('gets WeatherData for a city', async () => {
        // hard coded WeatherData for 'London'
        const mockWeatherData = {
            coord: { lon: -0.1257, lat: 51.5085 },
            weather: [ { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' } ],
            base: 'stations',
            main: {
                temp: -0.11,
                feels_like: -4.13,
                temp_min: -2.22,
                temp_max: 1.94,
                pressure: 1022,
                humidity: 85
            },
            visibility: 10000,
            wind: { speed: 3.6, deg: 230 },
            clouds: { all: 5 },
            dt: 1705659451,
            sys: {
                type: 2,
                id: 2075535,
                country: 'GB',
                sunrise: 1705650977,
                sunset: 1705681521
            },
            timezone: 0,
            id: 2643743,
            name: 'London',
            cod: 200
        }
        const mockWeatherClient = {
            fetchWeatherData: jest.fn().mockReturnValue(mockWeatherData),
        };
        const client = mockWeatherClient;
        const weather = new Weather(client);
        await weather.load('London');
        
        const weatherData = weather.getWeatherData();
        if (weatherData !== null) {
            expect(weatherData.name).toEqual('London');
        } else {
            throw new Error('Weather data is null');
        }
    });
});



// You'll now if it works if (in order of important to less important):
// The code above works in the REPL, and you get the correct weather data from getWeatherData().
// Your tests pass.
// You can break the class WeatherClient and your unit tests for Weather still pass.