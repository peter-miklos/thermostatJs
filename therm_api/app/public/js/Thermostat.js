function Thermostat() {
  this._currentTemp = 20;
  this._powerSaving = true;
}

Thermostat.prototype.increaseTemp = function () {
  if (this._powerSaving && this._currentTemp >= 25) {
    throw new Error("Max temp is 25 when power saving mode on");
  }
  else if (!this._powerSaving && this._currentTemp >= 32) {
    throw new Error("Max temperature reached");
  }
  else {
    this._currentTemp += 1;
  }

};

Thermostat.prototype.decreaseTemp = function () {
  if (this._currentTemp <= 10) {
   throw new Error("Minimum temperature reached");
  }
  else {
    this._currentTemp -= 1;
  }
};

Thermostat.prototype.switchPowerMode = function () {
  if (this._powerSaving) {
  this._powerSaving = false;
  }
  else {
    this._powerSaving = true;
  }
};

Thermostat.prototype.reset = function () {
  this._currentTemp = 20;
};

Thermostat.prototype.indicator = function () {

  if (this._currentTemp < 18) {
    return 'green';
  }
  else if (this._currentTemp <25) {
    return 'yellow';
  }
  else {
    return 'red';
  }
};
