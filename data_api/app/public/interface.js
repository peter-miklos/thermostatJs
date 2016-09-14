"user strict"

$(document).ready(function() {
  var thermostat = new Thermostat();
  loadTemperature();
  loadWeather();
  setTimeout(function() {
    updateTemperature();
    updateWeather();}, 50);


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
    updateWeather();
  });

  $("#dcity-2-submit").click(function() {
    var city = $("#dcity-2").val();
    var target = "#dcity-2-app"
    displayWeather(city, target);
    updateWeather();
  });

  $("#dcity-3-submit").click(function() {
    var city = $("#dcity-3").val();
    var target = "#dcity-3-app"
    displayWeather(city, target);
    updateWeather();
  });

  $("#dcity-4-submit").click(function() {
    var city = $("#dcity-4").val();
    var target = "#dcity-4-app"
    displayWeather(city, target);
    updateWeather();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.currentTemperature);
    $("#temperature").attr("class", thermostat.checkEnergyUsage());
    $("#power-saving-status").text(thermostat.getPowerSavingModeStatus());
    $.post("http://localhost:9292/thermostat", {appid: 1, temperature: thermostat.checkTemperature(), mode: thermostat.isPowerSavingModeOn(), temperatureunit: "metric"});
  }

  function updateWeather() {
    displayWeather($("#dcity-1").val(), "#dcity-1-app");
    displayWeather($("#dcity-2").val(), "#dcity-2-app");
    displayWeather($("#dcity-3").val(), "#dcity-3-app");
    displayWeather($("#dcity-4").val(), "#dcity-4-app");
    $.post("http://localhost:9292/cities", {appid: 1, city_1: $("#dcity-1").val(), city_2: $("#dcity-2").val(), city_3: $("#dcity-3").val(), city_4: $("#dcity-4").val() });
  }

  function displayWeather(city, target) {
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city;
    var token = "&mode=html&APPID=1bed5f3ef484a3d22e5d5d4f5c7ae34d";
    var units = "&units=metric"
    $.get(url+token+units, function(data) {
      $(target)[0].innerHTML = data;
    })
  }

  function loadTemperature() {
    $.get("http://localhost:9292/thermostat?appid=1", function(data) {
      thermostat.currentTemperature = data.temperature,
      thermostat.powerSavingMode = data.mode;
    })
  }

  function loadWeather() {
    $.get("http://localhost:9292/cities?appid=1", function(data) {
      console.log(data);
      document.getElementById("dcity-1").value = data.city_1,
      document.getElementById("dcity-2").value = data.city_2,
      document.getElementById("dcity-3").value = data.city_3,
      document.getElementById("dcity-4").value = data.city_4;
    })
  }

});
