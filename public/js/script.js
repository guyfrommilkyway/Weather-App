const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const address = document.querySelector('#address')
const temperature = document.querySelector('#temperature')
const humidity = document.querySelector('#humidity')
const wind_speed = document.querySelector('#wind_speed')
const errorMessage = document.querySelector('#errorMessage')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchDataCleaned = search.value
    const location = searchDataCleaned.toString()

    address.textContent = ''
    temperature.textContent = ''
    humidity.textContent = ''
    wind_speed.textContent = ''
    errorMessage.textContent = ''
    document.getElementById('result').style.display = 'none'
    document.getElementById('errorMessage').style.display = 'none'

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                document.getElementById('errorMessage').style.display = 'block'
                errorMessage.textContent = data.error

                console.log(data.error)
            } else {
                document.getElementById('result').style.display = 'block'
                address.textContent = data.location
                summary.textContent = data.forecast.summary
                temperature.textContent = data.forecast.temperature
                humidity.textContent = data.forecast.humidity
                wind_speed.textContent = data.forecast.wind_speed
            }
        })
    })
})