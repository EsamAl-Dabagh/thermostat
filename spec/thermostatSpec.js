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
      for(var i = 20; i >= 10; i--) {
        thermo.decrease();
      }
      expect( function(){ thermo.decrease(); } ).toThrowError("Cannot go below 10c");
    });
  });

  describe("isPowerSave", function() {
    it("returns true or false", function() {
      expect([true, false]).toContain(thermo.isPowerSave());
    });
  });

});
