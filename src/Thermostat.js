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

//first we check the document has loaded & display with business logic.
$( document ).ready(function() {
    thermostat = new Thermostat();
    $( "#temp" ).html(thermostat._currentTemp);
    $( ".power_saving" ).html("Power Saving: " + thermostat._powerSaving);
    if (thermostat.indicator() === "green" ) {
      $( "#temp" ).css("color", "green");
    }
    else if (thermostat.indicator() === "red") {
      $( "#temp" ).css("color", "red" );
    }
    else {
      $( "#temp" ).css("color", "yellow" );
    }

//this listens to clicking the increase button.
  $( '[name="increase_btn"]' ).click(function(){
      thermostat.increaseTemp();
    });

    $( '[name="decrease_btn"]' ).click(function(){
      thermostat.decreaseTemp();
    });

    $( '[name="reset_btn"]' ).click(function(){
      thermostat.reset();
    });

    $( '[name="power_mode_btn"]' ).click(function(){
      thermostat.switchPowerMode();
    });

//this listens to every click on a page.
    $( document ).click(function(){
        $( "#temp" ).html(thermostat._currentTemp);
        $( ".power_saving" ).html("Power Saving: " + thermostat._powerSaving);

        if (thermostat.indicator() === "green" ) {
          $( "#temp" ).css("color", "green");
        }
        else if (thermostat.indicator() === "red") {
          $( "#temp" ).css("color", "red" );
        }
        else {
          $( "#temp" ).css("color", "yellow" );
        }


    });




});
