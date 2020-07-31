console.log('Client side JavaScript file has been loaded.')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const address = document.querySelector('#messageOne')
const summary = document.querySelector('#messageTwo')
const errorMessage = document.querySelector('#errorMessage')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    address.textContent = ''
    summary.textContent = ''
    errorMessage.textContent = ''
    document.getElementById('result').style.display = 'none'
    document.getElementById('errorMessage').style.display = 'none'

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                document.getElementById('errorMessage').style.display = 'block'
                errorMessage.textContent = data.error

                console.log(data.error)
            } else {
                document.getElementById('result').style.display = 'block'
                address.textContent = data.location
                summary.textContent = data.forecast

                console.log(data.location)
                console.log(data.forecast)
            }
        })
    })
})