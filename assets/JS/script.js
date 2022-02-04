var cityText = $("#cityText");
var tempText = $("#tempText");
var humidityText = $("#humidityText");
var windText = $("windText");
var uvText = $("#uvText");
var forecastText = $("forecastText");
var cardDisplay = $("#cardDisplay");
var cardRows = $("#carardRows");
var forecastDate = {};
var forecastIcon = {};
var forecastTemp = {};
var forecastHum = {};

var date = moment().format('DD' + "/" + 'MM' + '/' + 'YYYY');

var url = "https://api.openweathermap.org/data/2.5/weather?q=";
var APIKey = "14be78c51cceb2d6a0448333fa09a1223";

var citiesArr = JSON.parse(localStorage.getItem("Saved City")) || [];

$(document).ready(function (){
    var userInput = citiesArray[citiesArray.length - 1];
    currentWeather(userInput);
    forecast(userInput);
    lastSearch ();

});

function currentWeather () {
    
}