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
    it("resets the temperature to _START_TEMPERATURE", function() {
      thermostat.increaseTemperature();
      thermostat.resetTemperature();
      expect(thermostat.checkTemperature()).toEqual(20);
    })
  });

  describe("#isPowerSavingModeOn", function() {
    it("checks the power saving mode is on at start", function() {
      expect(thermostat.isPowerSavingModeOn()).toEqual(true);
    })
  });
  describe("#turnOffPowerSavingMode", function() {
    it("turns off the power saving mode", function() {
      thermostat.turnOffPowerSavingMode();
      expect(thermostat.isPowerSavingModeOn()).toEqual(false);
    })
  });
  describe("#turnOnPowerSavingMode", function() {
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
  });
  describe("#getPowerSavingModeStatus", function() {
    it("returns on if the power saving mode is turned off", function() {
      thermostat.turnOffPowerSavingMode();
      expect(thermostat.getPowerSavingModeStatus()).toEqual("off");
    })
    it("returns off if the power saving mode is turned off", function() {
      thermostat.turnOffPowerSavingMode();
      expect(thermostat.getPowerSavingModeStatus()).toEqual("off");
    })
  });

  describe("#checkEnergyUsage", function() {
    it("displays green if temperature is <18 degrees", function() {
      for(let i = 0; i < 3; i++) {
        thermostat.decreaseTemperature();
      }
        expect(thermostat.checkEnergyUsage()).toEqual("e-green");
    })
    it("displays yellow if temperature is between 18 and 24 degrees", function() {
      for(let i = 0; i < 3; i++) {
        thermostat.decreaseTemperature();
      }
      for (let i = 0; i < 7; i++) {
        thermostat.increaseTemperature();
        expect(thermostat.checkEnergyUsage()).toEqual("e-yellow");
      }
    })
    it("displays red if temperature is >25 degrees", function() {
      for(let i = 0; i < 5; i++) {
        thermostat.increaseTemperature();
      }
        expect(thermostat.checkEnergyUsage()).toEqual("e-red");
    })
  });
});
