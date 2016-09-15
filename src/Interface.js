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

    $( "#weather_submit").click(function(){
      var city = $("#city").val();
      var country = $("#country").val();

      displayWeather(city, country);
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

    function displayWeather(city, country){
      var url = "http://api.wunderground.com/api/85e43c1814d737e7/conditions/q/";

      $.get(url + country + "/" + city + ".json", function(data){
    
        $("#weather_icon").text(data.current_observation.icon_url);
        $("#full_location").text(data.current_observation.display_location.full);
        $("#temp_c").text(data.current_observation.temp_c);
        $("#wind_mph").text(data.current_observation.wind_mph);
        $("#feelslike_c").text(data.current_observation.feelslike_c);

        });
      }
  });
