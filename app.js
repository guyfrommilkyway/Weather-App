const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

//Geocoding
geocode('Manila', (error, data) => {
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
