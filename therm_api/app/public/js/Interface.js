//first we check the document has loaded & display with business logic.
$( document ).ready(function() {
  displayWeather("Worcester");
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
        $.post("http://localhost:9292/thermostat", {temperature: thermostat._currentTemp, mode: thermostat._powerSaving});

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

    function displayWeather(city){
      var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city;
      var token = "&mode=html&APPID=1bed5f3ef484a3d22e5d5d4f5c7ae34d";
      var units = "&units=metric"
      $.get(url + token + units, function(data){
        $("#weather")[0].innerHTML = data;
        });
      }
  });
