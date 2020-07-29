const forecast = require('./../../utils/forecast')
const geocode = require('./../../utils/geocode')

//
// Goal: Accept location via line argument
//
// 1. Access the command line argument without yargs
// 2. Use the string value as the input for geocode
// 3. Only geocode if a location was provided
// 4. Test your work with a couple of locations

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