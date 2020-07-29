const request = require('request')
const forecast = require('./../../utils/forecast')
const geocode = require('./../../utils/geocode')


// Weather
forecast(44.1545, -75.7088, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

//Geocoding
geocode('Manila', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})
