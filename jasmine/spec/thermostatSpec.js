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
  })

});
