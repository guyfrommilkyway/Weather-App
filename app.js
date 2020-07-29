const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

//Geocoding
geocode('Manila', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)

    // Weather
    forecast(data.latitude, data.longitude, (error, data) => {
        console.log('Error', error)
        console.log('Data', data)
    })
})
