var thermostat = new Thermostat;

$(document).ready(function() {

  $("#plus").click(function(event) {
    thermostat.increase();
  });

  $("#minus").click(function(event) {
    thermostat.decrease();
  });

  $("#reset").click(function(event) {
    thermostat.reset();
  });

  $("#powerSave").click(function(event) {
    thermostat.togglePowerSave();
  });

});