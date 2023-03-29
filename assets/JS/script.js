let latitude=''
let longitude = ''
const button = document.getElementById('btn')

button.addEventListener('click', getWeather)


function getWeather(){
    const cityInput = document.getElementById('city-input').value.toLowerCase()
    console.log(cityInput)

    // const state = document.getElementById('state-input').value.toLowerCase()
    // console.log(state)

    //get lat and lon
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityInput},US&limit=1&appid=f39fccfcbec15d0db53d6767eddf67f7&units=imperial`)
            .then(res => res.json()) // parse response as JSON
            .then(data => {
                latitude = data[0].lat
                longitude = data[0].lon
                
                fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=f39fccfcbec15d0db53d6767eddf67f7&units=imperial`)
                    .then(res => res.json()) // parse response as JSON
                    .then(data => {

                        console.log(data)
                    
                        document.getElementById('city-name').innerText = data.city.name
                        document.getElementById('temp').innerText = data.list[0].main.temp + '°F'
                        document.getElementById('wind').innerText = data.list[0].wind.speed
                        document.getElementById('humidity').innerText = data.list[0].main.humidity + '%'

                })
                .catch(err => {
                    console.log(`error ${err}`)
                });

            })
            .catch(err => {
                console.log(`error ${err}`)
            });

}
