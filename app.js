const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

const input = process.argv[2]

if (input) {
    //Geocoding
    geocode(input, (error, data) => {
        if (error) {
            return console.log(error)
        }

        // Weather
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log(data.location)
            console.log(forecastData)
        })
    })
} else {
    console.log('Please input a valid location.')
}