"use strict";

function Thermostat() {
  const _START_TEMPERATURE = 20;
  this._MIN_TEMPERATURE = 10;
  this._PSM_MAX_TEMPERATURE = 25;
  this._MAX_TEMPERATURE = 32;
  this.currentTemperature = _START_TEMPERATURE;
  this.powerSavingMode = true;
};

Thermostat.prototype = {
  checkTemperature: function() {
    return this.currentTemperature;
  },
  increaseTemperature: function() {
    if (this.isPowerSavingModeOn() && this.checkTemperature() === this._PSM_MAX_TEMPERATURE) {
      return
    }
    if (this.isPowerSavingModeOn() === false && this.checkTemperature() === this._MAX_TEMPERATURE) {
      return
    }
    this.currentTemperature++;
  },
  decreaseTemperature: function() {
    if (this.isMinTempReached()) {
      return
    }
    else {
      this.currentTemperature--;
    }
  },
  isMinTempReached: function() {
    return this.checkTemperature() === this._MIN_TEMPERATURE;
  },
  isPowerSavingModeOn: function() {
    return this.powerSavingMode;
  },
  turnOffPowerSavingMode: function() {
    this.powerSavingMode = false;
  },
  turnOnPowerSavingMode: function() {
    this.powerSavingMode = true;
  }
};
