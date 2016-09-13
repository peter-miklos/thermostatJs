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
});
