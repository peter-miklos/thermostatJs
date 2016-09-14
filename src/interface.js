"user strict"

$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $("#temperature-up").click(function(){
    thermostat.increaseTemperature();
    updateTemperature();
  });

  $("#temperature-down").click(function(){
    thermostat.decreaseTemperature();
    updateTemperature();
  });

  $("#temperature-reset").click(function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $("#powersaving-on").click(function() {
    thermostat.turnOnPowerSavingMode();
    updateTemperature();
  });

  $("#powersaving-off").click(function() {
    thermostat.turnOffPowerSavingMode();
    updateTemperature();
  })

  $("#weather-submit").click(function() {
    var city = $("#weather-city").val();
    displayWeather(city);
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.checkTemperature());
    $("#temperature").attr("class", thermostat.checkEnergyUsage());
    $("#power-saving-status").text(thermostat.getPowerSavingModeStatus());
  }

  function displayWeather(city) {
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city;
    var token = "&mode=html&APPID=1bed5f3ef484a3d22e5d5d4f5c7ae34d";
    var units = "&units=metric"
    $.get(url+token+units, function(data) {
      $("#weather-app")[0].innerHTML = data;
    })
  }


});
