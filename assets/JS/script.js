// var cityText = $("#cityText");
// var tempText = $("#tempText");
// var humidityText = $("#humidityText");
// var windText = $("windText");
// var uvText = $("#uvText");
// var forecastText = $("forecastText");
// var cityList = $("#city-list")

var cities= [];

var date = moment().format('DD' + "/" + 'MM' + '/' + 'YYYY');

var myKey = "&appid=130e45b8035df0b2f3d2389f4fb66852&units=imperial";
var url = "https://api.openweathermap.org/data/2.5/weather?q=";


//create search history
function saveCities(){
  localStorage.setItem("cities", JSON.stringify(cities));
};

function createCities() {
    cityList.empty();

      for (var i = 0; i < cities.length; i++) {
        var city = cities[i];
        
        var li = $("<li>").text(city);
        li.attr("id","listC");
        li.attr("data-city", city);
        li.attr("class", "list-group-item");
        cityList.prepend(li);
      }
    
      if (!city){
          return
      } 
      else{
          getResponseWeather(city)
      };
  }   
  

$("#add-city").on("click", function(event){
    event.preventDefault();

    //grab city from user input
    var city = $("#city-input").val().trim();
    // if city is blank
    if (city === "") {
        return;
    }
    searchCurrentWeather(city)
    //city array input
    if(cities.indexOf(city) === -1) {
    cities.push(city);
    window.localStorage.setItem('cities', JSON.stringify(cities))
        createCities();
    }
    // Store updated cities in localStorage, re-render the list
});

//grab current weather
function searchCurrentWeather(city) {
    fetch(url + city + myKey, {
        method: 'GET',
    })
    .then(res => {
        return res.json();
    }).then(data => {
        var lat = data.coord.lat;
        var lon  = data.coord.lon;
        oneCall(lat,lon, city)
    })
}

function oneCall(lat, lon, city) {
    var oneCall = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}` + myKey;
    fetch(oneCall, {
        method: 'GET'
    })
    .then(res => {
        return res.json()
    })
    .then(data => {
    //append data to card
        var currentTemp = data.current.temp
        var currentHumid = data.current.humidity;
        var wind = data.current.wind_speed;
        var uvi = data.current.uvi;
        var pic = data.current.weather[0].icon

        var card = $("<div>").addClass("card");
        var cardBody = $("<div>").addClass("card-body");
        var title = $("<h2>").text("City: " + city  )
        var img = $("<img>").attr("src", "https://openweathermap.org/img/w/" + pic + '.png')
        var temp = $("<h6>").addClass("card-text").text("Temperature: " + currentTemp + " F")
        var humidity = $("<h6>").addClass("card-text").text("Humidity: " + currentHumid + "%")
        var windSpeed = $("<h6>").addClass("card-text").text("Wind Speed: " + wind + "MPH")
        var currentUvi = $("<h6>").addClass("card-text").text("UVI: " + uvi)

        title.append(img)
        cardBody.append(title, temp, humidity, windSpeed, currentUvi)
        card.append(cardBody)
            $("#weatherCard").empty();
            $("#weatherCard").append(card)
        console.log(data)
        });
    }

  
