const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://samples.openweathermap.org/data/2.5/weather?lat='+latitude +'&lon='+longitude +'&appid=4abe758e7a7926a75f51f675c08fa78d'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,'currently weather is ' +body.weather[0].main + ' and temp is '+body.main.temp +
                ' and pressure is ' + body.main.pressure + ' and wind speed is ' + body.wind.speed)
        }
    })
}

module.exports = forecast