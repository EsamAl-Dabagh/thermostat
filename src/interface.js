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

  });

  $("#energyUsage").html(thermostat.currentEnergyUsage());



});
