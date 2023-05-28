class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  // create mehtod
  getDescription() {
    return this.make + " " + this.model + " " + this.year;
  }
}

class ElectricCar extends Car {
  constructor(make, model, year, range) {
    super(make, model, year);
    this.range = range;
  }
  // create mehtod
  getDescription() {
    return super.getDescription() + " " + this.range + " miles";
  }
}
var aCar = new Car("TESLA", "ModelS", "2019");
console.log(aCar.getDescription());

var myCar = new ElectricCar("Tesla", "ModelS", "2019", "300");
console.log(myCar.getDescription());
