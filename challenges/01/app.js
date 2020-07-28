const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=c88dc173852e7148098f251147949329&query=37.8267,-122.4233'


//
// Goal: Print a small forecast to the user
//
// 1. Print: "It is currently 9 degrees out. It feels like 5 degrees out."
// 2. Test your work.


request({ url: url, json: true}, (error, response) => {
    // console.log(response.body.current)
    console.log('It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.')
})



