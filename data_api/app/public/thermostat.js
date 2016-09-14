"use strict";

function Thermostat() {
  this._START_TEMPERATURE = 20;
  this._MIN_TEMPERATURE = 10;
  this._PSM_MAX_TEMPERATURE = 25;
  this._MAX_TEMPERATURE = 32;
  this.currentTemperature = this._START_TEMPERATURE;
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
  getPowerSavingModeStatus: function() {
    if (this.isPowerSavingModeOn() === true) {
      return "on"
    }
    else {
      return "off"
    }
  },
  turnOffPowerSavingMode: function() {
    this.powerSavingMode = false;
  },
  turnOnPowerSavingMode: function() {
    this.powerSavingMode = true;
  },
  resetTemperature: function() {
    this.currentTemperature = this._START_TEMPERATURE;
  },
  checkEnergyUsage: function() {
    if (this.checkTemperature() <18) {
      return "e-green";
    }
    else if (this.checkTemperature() <25) {
      return "e-yellow";
    }
    else {
      return "e-red";
    }
  }
};
