var thermostat = new Thermostat;

$(document).ready(function() {

  $("#plus").click(function(event) {
    thermostat.increase();
    $("#energyUsage").html(thermostat.currentEnergyUsage());
    $("#temp_num").html(thermostat.temp);
  });

  $("#minus").click(function(event) {
    thermostat.decrease();
    $("#energyUsage").html(thermostat.currentEnergyUsage());
    $("#temp_num").html(thermostat.temp);
  });

  $("#reset").click(function(event) {
    thermostat.reset();
    $("#energyUsage").html(thermostat.currentEnergyUsage());
    $("#temp_num").html(thermostat.temp);
  });

  $("#powerSave").click(function(event) {
    thermostat.togglePowerSave();
    $("#powerSaveDisplay").toggle("fast", function() {
      $("#powerSaveDisplay").css("color", "lime")
    });
    thermostat.checkTemp();
    $("#temp_num").html(thermostat.temp);
  });

  $("#energyUsage").html(thermostat.currentEnergyUsage());

  $.get("http://api.openweathermap.org/data/2.5/weather?q=london&units=metric&APPID=5a57afc798d4cc0ce5d2a7963e915f03", function(data) {
    var currentTemp = data.main.temp;
    $("#weather").html(Math.floor(currentTemp));
  });

});
