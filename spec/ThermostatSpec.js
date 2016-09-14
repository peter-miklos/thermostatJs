
describe("Thermostat", function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('Thermostat has a default value of 20 degrees', function(){
  expect(thermostat._currentTemp).toEqual(20);
  });

  it('You can increase temperature by 1', function(){
    thermostat.increaseTemp();
    expect(thermostat._currentTemp).toEqual(21);
  });

  it('You can decrease temperature by 1', function(){
    thermostat.decreaseTemp();
    expect(thermostat._currentTemp).toEqual(19);
  });

  it('Should have a minimum temperature of 10 degrees', function(){
    var i;
    for (i = 0; i < 10; i++) {
      thermostat.decreaseTemp();
    }
    expect(function(){ thermostat.decreaseTemp();}).toThrowError("Minimum temperature reached");
  });

  it('Thermostat has a reset button', function () {
    for (i = 0; i < 10; i++) {
      thermostat.decreaseTemp();
    }
    thermostat.reset();
    expect(thermostat._currentTemp).toEqual(20);
  });

    describe("PowerSavingMode", function(){

      it('Power saving on by default', function(){
        expect(thermostat._powerSaving).toEqual(true);
      });

      it('Max temp 25 when power saving on', function(){

        for (var i = 0; i < 5; i++) {
          thermostat.increaseTemp();
        }
        expect(function(){ thermostat.increaseTemp();}).toThrowError("Max temp is 25 when power saving mode on");
      });

      it('Power saving mode can be turned off', function(){
        thermostat.switchPowerMode();
        expect(thermostat._powerSaving).toEqual(false);
      });

      it('Max temp 32 degrees when power saving is off', function(){
        thermostat.switchPowerMode();
        for (var i = 0; i < 12; i++) {
          thermostat.increaseTemp();
        }
        expect(function(){ thermostat.increaseTemp(); }).toThrowError("Max temperature reached");
      });
    });

    describe("Display", function(){

      it('should return yellow at 20 degrees', function(){
        expect(thermostat.indicator()).toEqual('yellow');

      });

      it('should return red at 26 degrees', function(){
        thermostat.switchPowerMode();
        for (var i = 0; i < 6; i++) {
          thermostat.increaseTemp();
        }
        expect(thermostat.indicator()).toEqual('red');

      });

      it('should return green at 17 degrees', function(){
        for (var i = 0; i < 3; i++) {
          thermostat.decreaseTemp();
        }
        expect(thermostat.indicator()).toEqual('green');

      });
    });

});
