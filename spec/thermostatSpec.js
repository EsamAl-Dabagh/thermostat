describe("Thermostat", function(){

  var thermo;

  beforeEach(function(){
    thermo = new Thermostat();
  });

  it("starts at 20 degrees", function() {
    expect(thermo.temp).toEqual(20);
  });

  describe("increase", function() {
    it("increases the temp by 1", function() {
      thermo.increase();
      expect(thermo.temp).toEqual(21);
    });
  });

  describe("decrease", function() {
    it("decreases the temp by 1", function() {
      thermo.decrease();
      expect(thermo.temp).toEqual(19);
    });
  });

  describe("MIN_TEMP", function() {
    it("won't allow user to set temp below 10 degrees", function() {
      for(var i = 20; i > 10; i--) {
        thermo.decrease();
      }
      expect( function(){ thermo.decrease(); } ).toThrowError("Cannot go below 10c");
    });
  });

  describe("isPowerSave", function() {
    it("returns true or false", function() {
      expect([true, false]).toContain(thermo.isPowerSaveOn());
    });
  });

  describe("togglePowerSave", function() {
    it("changes powerSave to false if currently true", function() {
      thermo.togglePowerSave();
      expect(thermo.isPowerSaveOn()).toEqual(false);
    });

    it("changes powerSave to true if currently false", function() {
      thermo.togglePowerSave();
      thermo.togglePowerSave();
      expect(thermo.isPowerSaveOn()).toEqual(true);
    });
  });

  describe("when powerSave is true", function() {

    it("max temp is 25 degrees", function() {
      for (var i = 0; i < 7; i++) {
        thermo.increase();
      }
      expect(thermo.temp).toEqual(25);
    });
  
  });

  describe("when powerSave is false", function() {

    it("max temp is 32 degrees", function() {
      thermo.togglePowerSave();
      for (var i = 0; i < 15; i++) {
        thermo.increase();
      }
      expect(thermo.temp).toEqual(32);
    });

  });

  describe("currentEnergyUsage", function() {

    it("returns low when temp is < 18", function() {
      for (var i = 0; i < 5; i++) {
        thermo.decrease();
      }

      expect(thermo.currentEnergyUsage()).toEqual("low-usage");
    });
    
    it("return medium when temp is < 25", function() {
      expect(thermo.currentEnergyUsage()).toEqual("medium-usage");
    });
    
    it("returns high when temp is above 25", function() {
      for (var i = 0; i < 6; i++) {
        thermo.increase();
      }

      expect(thermo.currentEnergyUsage()).toEqual("high-usage");
    });

  });

  describe("reset", function() {
    it("resets temp to 20", function() {
      thermo.increase();
      thermo.reset();

      expect(thermo.temp).toEqual(20);
    });
  });

});
