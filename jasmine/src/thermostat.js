"use strict";

function Thermostat() {
  const _START_TEMPERATURE = 20;
  this.currentTemperature = _START_TEMPERATURE;
};

Thermostat.prototype = {
  checkTemperature: function() {
    return this.currentTemperature;
  },
  increaseTemperature: function() {
    this.currentTemperature++;
  }
}
