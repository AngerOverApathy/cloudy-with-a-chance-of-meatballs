const button = document.getElementById('btn')

button.addEventListener('click', searchCityWeather)

function searchCityWeather(){
    const cityInput = document.getElementById('city-input').value
    console.log(cityInput)
}