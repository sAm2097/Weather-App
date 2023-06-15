const apiKey = '34c7780021f297829ac7277411518241&units'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
const searchBox = document.querySelector('.search input')
const searchButton = document.querySelector('.search button')
const icon = document.querySelector('.weather-icon')
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    if (response.status == 404) {
        document.querySelector('.error').style.display = 'block'
        document.querySelector('.weather').style.display = 'none'
    }
    else {
        var data = await response.json()
        console.log(data);
        document.querySelector('.city').innerHTML = data.name
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C'
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%'
        document.querySelector('.wind').innerHTML = data.wind.speed + 'km/hr'

        if (data.weather[0].main == 'Clouds') {
            icon.src = 'images/clouds.png'
        }
        else if (data.weather[0].main == 'Clear') {
            icon.src = 'images/clear.png'
        }
        else if (data.weather[0].main == 'Mist') {
            icon.src = 'images/mist.png'
        } else if (data.weather[0].main == 'Snow') {
            icon.src = 'images/snow.png'
        } else if (data.weather[0].main == 'Drizzle') {
            icon.src = 'images/drizzle.png'
        }
        document.querySelector('.weather').style.display = 'block'
        document.querySelector('.error').style.display = 'none'
    }
}
searchButton.addEventListener('click', () => {
    checkWeather(searchBox.value)
})
