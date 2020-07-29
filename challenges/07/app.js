const forecast = require('./../../utils/forecast')
const geocode = require('./../../utils/geocode')

//
// Goal: Use both destructuring and property shorthand in weather app
//
// 1. Use destructuring in app.js, forecast.js and geocode.js
// 2. User property shorthand in forecast.js and geocode.js
// 3. Test your work and ensure app still works

const address = process.argv[2]

if (address) {
    //Geocoding
    geocode(address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return console.log(error)
        }

        // Weather
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log(location)
            console.log(forecastData)
        })
    })
} else {
    console.log('Please provide a valid location.')
}