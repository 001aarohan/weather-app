const request = require('request');

var getWeather = (Latitude, Longitude, callback) => {

  request({

    url: 'https://api.darksky.net/forecast/33e709a7aa4102b290e7cb6550eccdcd/28.615871,77.44151180000001',
    json : true

  },(error, response, body) => {

    if(!error && response.statusCode === 200){
      callback(undefined,{
        Temperature : body.currently.temperature,
        Actual : body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather....');

    }
  });
}

module.exports.getWeather = getWeather;
