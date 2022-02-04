var cityText = $("#cityText");
var tempText = $("#tempText");
var humidityText = $("#humidityText");
var windText = $("windText");
var uvText = $("#uvText");
var forecastText = $("forecastText");

var cities= [];

var date = moment().format('DD' + "/" + 'MM' + '/' + 'YYYY');

var myKey = "14be78c51cceb2d6a0448333fa09a1223";
var url = "https://api.openweathermap.org/data/2.5/weather?q=";


startSearch ();

function startSearch () {
    var storedCities = JSON.parse(localStorage.getItem("cities"));
      if (storedCities !== null) {
        cities = storedCities;
      }

    renderCities();

};

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
      //city array input
      cities.push(city);
      // Store updated cities in localStorage, re-render the list
    saveCities();
    createCities();
    });
  
