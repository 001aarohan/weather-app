const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
.options({
  a:{
    demand: true,
    alias: 'address',
    describe : 'This is the address for....',
    string : true
  }
})
.help()
.alias('help','h')
.argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) =>{

  if(errorMessage){
    console.log(errorMessage);
  }else {
    console.log(results.Address);
    weather.getWeather(results.Latitude,results.Longitude, (errorMessage, weatherResults) => {
      if(errorMessage){
        console.log(errorMessage);
      }else{
        console.log(`The temperature is ${weatherResults.Temperature}. But it feels like ${weatherResults.Actual}.`);
      }
    });

  }
});
