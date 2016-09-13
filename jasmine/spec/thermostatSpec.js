'use strict';

describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  })

  describe("check temperature", function() {
    it("has 20 degrees at start", function() {
      expect(thermostat.checkTemperature()).toEqual(20);
    })
    it("has a minimum temperature of 10 degrees", function() {
      for(let i = 0;i < 11; i++) {
        thermostat.decreaseTemperature();
      }
      expect(thermostat.checkTemperature()).toEqual(10);
    })
    it("temperature cannot be more than the default max temperature", function() {
      thermostat.turnOffPowerSavingMode();
      for(let i = 0; i < 13; i++) {
        thermostat.increaseTemperature();
      }
      expect(thermostat.checkTemperature()).toEqual(32);
    })

  });

  describe("change temperature", function() {
    it("increases the temperature by one", function() {
      thermostat.increaseTemperature();
      expect(thermostat.checkTemperature()).toEqual(21);
    })

    it("decreases the temperature by one", function() {
      thermostat.decreaseTemperature();
      expect(thermostat.checkTemperature()).toEqual(19);
    })
  });

  describe("handling power saving mode", function() {
    it("checks the power saving mode is on at start", function() {
      expect(thermostat.isPowerSavingModeOn()).toEqual(true);
    })
    it("turns off the power saving mode", function() {
      thermostat.turnOffPowerSavingMode();
      expect(thermostat.isPowerSavingModeOn()).toEqual(false);
    })
    it("turns on the power saving mode", function() {
      thermostat.turnOffPowerSavingMode();
      thermostat.turnOnPowerSavingMode();
      expect(thermostat.isPowerSavingModeOn()).toEqual(true);
    })
    it("sets the max temperature to 25 degrees", function() {
      for(let i = 0; i < 6; i++) {
        thermostat.increaseTemperature();
      }
      expect(thermostat.checkTemperature()).toEqual(25);
    })
  })
});
