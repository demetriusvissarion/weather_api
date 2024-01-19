// const WeatherClient = require('./weatherClient')
// const Weather = require('./weather')

// jest.mock("./weatherClient");

// describe('Unit tests for the Weather class', () => {
//     beforeEach(() => {
//         // Before each test, reset
//         WeatherClient.mockClear();
//     });

//     it('gets WeatherData for a city', (done) => {
//         // hard coded for 'Bristol'
//         const doubleWeatherClient = {
//             fetchWeatherData: (city) => { return {
//                 coord: { lon: -0.1257, lat: 51.5085 },
//                 weather: [ { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' } ],
//                 base: 'stations',
//                 main: {
//                     temp: -0.11,
//                     feels_like: -4.13,
//                     temp_min: -2.22,
//                     temp_max: 1.94,
//                     pressure: 1022,
//                     humidity: 85
//                 },
//                 visibility: 10000,
//                 wind: { speed: 3.6, deg: 230 },
//                 clouds: { all: 5 },
//                 dt: 1705659451,
//                 sys: {
//                     type: 2,
//                     id: 2075535,
//                     country: 'GB',
//                     sunrise: 1705650977,
//                     sunset: 1705681521
//                 },
//                 timezone: 0,
//                 id: 2643743,
//                 name: 'London',
//                 cod: 200
//             } }, 
//         }
//         const client = doubleWeatherClient;
//         const weather = new Weather(client);
        
//         weather.load('Bristol');
//         // then, after some time
//         weather.getWeatherData().then((weatherData) => {
//             expect(weatherData.main.temp).toEqual(-0.11);
//             done();
//         });
//     });
// });

// // const doubleCandy2 = {
// //     name : 'Skittle',
// //     price : 3.99,
// //     getName: () => { return doubleCandy2.name },
// //     getPrice: () => { return doubleCandy2.price },
// // }
// // basket.addItem(doubleCandy2);


// // You'll now if it works if (in order of important to less important):
// // The code above works in the REPL, and you get the correct weather data from getWeatherData().
// // Your tests pass.
// // You can break the class WeatherClient and your unit tests for Weather still pass.