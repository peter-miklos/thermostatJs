"user strict"

$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
  updateWeather();

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

  $("#dcity-1-submit").click(function() {
    var city = $("#dcity-1").val();
    var target = "#dcity-1-app"
    displayWeather(city, target);
  });

  $("#dcity-2-submit").click(function() {
    var city = $("#dcity-2").val();
    var target = "#dcity-2-app"
    displayWeather(city, target);
  });

  $("#dcity-3-submit").click(function() {
    var city = $("#dcity-3").val();
    var target = "#dcity-3-app"
    displayWeather(city, target);
  });

  $("#dcity-4-submit").click(function() {
    var city = $("#dcity-4").val();
    var target = "#dcity-4-app"
    displayWeather(city, target);
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.checkTemperature());
    $("#temperature").attr("class", thermostat.checkEnergyUsage());
    $("#power-saving-status").text(thermostat.getPowerSavingModeStatus());
  }

  function updateWeather() {
    displayWeather($("#dcity-1").val(), "#dcity-1-app");
    displayWeather($("#dcity-2").val(), "#dcity-2-app");
    displayWeather($("#dcity-3").val(), "#dcity-3-app");
    displayWeather($("#dcity-4").val(), "#dcity-4-app");
  }

  function displayWeather(city, target) {
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city;
    var token = "&mode=html&APPID=1bed5f3ef484a3d22e5d5d4f5c7ae34d";
    var units = "&units=metric"
    $.get(url+token+units, function(data) {
      $(target)[0].innerHTML = data;
    })
  }


});
