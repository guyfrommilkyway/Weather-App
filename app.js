const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=c88dc173852e7148098f251147949329&query=37.8267,-122.4233'


request({ url: url, json: true}, (error, response) => {
    console.log(response.body.current)
})