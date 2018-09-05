function Thermostat() {
  this.temp = 20;
  this.MIN_TEMP = 10;
  this.powerSave = true;
}

Thermostat.prototype.increase = function() {
  this.temp++;
}

Thermostat.prototype.decrease = function() {
  if (this.temp < this.MIN_TEMP) {
    throw new Error("Cannot go below 10c");
  } else {
    this.temp--;
  }
}

Thermostat.prototype.isPowerSave = function() {
  return this.powerSave;
}