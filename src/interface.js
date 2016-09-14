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

  function updateTemperature() {
    $('#temperature').text(thermostat.checkTemperature());
    $("#power-saving-status").text(thermostat.getPowerSavingModeStatus());
  }
});
