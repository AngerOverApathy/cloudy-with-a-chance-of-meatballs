const button = document.getElementById('btn')

button.addEventListener('click', getWeather)


function getWeather(){
    const cityInput = document.getElementById('city-input').value.toLowerCase()
    console.log(cityInput)

    // const state = document.getElementById('state-input').value.toLowerCase()
    // console.log(state)

    //get lat and lon
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityInput},US&limit=1&appid=f39fccfcbec15d0db53d6767eddf67f7`)
            .then(res => res.json()) // parse response as JSON
            .then(data => {
            let lat = data[0].lat
            let lon = data[0].lon
            console.log(lat)
            console.log(lon)
            })
            .catch(err => {
                console.log(`error ${err}`)
            });

}