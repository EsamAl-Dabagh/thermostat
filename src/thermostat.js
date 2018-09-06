'use strict'; 

function Thermostat() {
  this.temp = 20;
  this.MIN_TEMP = 10;
  this.MAX_PS_ON = 25;
  this.MAX_PS_OFF = 32;
  this.powerSave = true;
}

Thermostat.prototype.increase = function() {
  if(this.isMaxTemp()) {
    return;
  }
  
  this.temp++;
}

Thermostat.prototype.decrease = function() {
  if (this.temp < this.MIN_TEMP) {
    throw new Error("Cannot go below 10c");
  } else {
    this.temp--;
  }
}

Thermostat.prototype.isPowerSaveOn = function() {
  return this.powerSave;
}

Thermostat.prototype.togglePowerSave = function() {
  this.powerSave = !this.powerSave
}

Thermostat.prototype.isMaxTemp = function() {
  if(this.isPowerSaveOn() === false) {
    return this.temp === this.MAX_PS_OFF;
  } 
  return this.temp === this.MAX_PS_ON;
}

Thermostat.prototype.currentEnergyUsage = function() {
  if(this.temp < 18) {
    return "low-usage"
  } else if (this.temp < 25) {
    return "medium-usage"
  } else {
    return "high-usage"
  }

}
