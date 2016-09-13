"use strict";

function Thermostat() {
  const _START_TEMPERATURE = 20;
  this._MIN_TEMPERATURE = 10;
  this.currentTemperature = _START_TEMPERATURE;
};

Thermostat.prototype = {
  checkTemperature: function() {
    return this.currentTemperature;
  },
  increaseTemperature: function() {
    this.currentTemperature++;
  },
  decreaseTemperature: function() {
    if (this.checkTemperature() === this._MIN_TEMPERATURE) {
      return
    }
    else {
      this.currentTemperature--;
    }
  }
};
