const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=c88dc173852e7148098f251147949329&query=&units=f'


// Weather

// request({ url: url, json: true}, (error, response) => {
    
//     if (error) {
//         console.log('Unable to connect to weather service.')
//     } else if (response.body.error) {
//         console.log('Unable to find location.')
//     } else {
//         console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.')
//     }
// })

// Geocoding
// Address -> Lat/Long -> Weather

//
// Goal: Error handlers for geocoding request
// 1. Setup an error for low level errors
// 2. Test by disabling the network and running the app
// 3. Setup error handling for no matching results
// 4. Test by altering the search term and running the app

const mapbox = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Manila.json?access_token=pk.eyJ1IjoidGFtcHVzc3kiLCJhIjoiY2tkNmdjMnBzMjFlaTJ5cXZ6N3NzcWtvdiJ9.tpizQ20HpYLEEghHhrcNnw&limit=1'

request({ url: mapbox, json: true}, (error, response) => {
    if (error) {
        console.log('Unable to connect to location services.')
    } else if (response.body.features.length === 0) {
        console.log('Location not found. Try another search.')
    } else {
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(latitude, longitude)
    }
})