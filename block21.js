// Constructor function for Car
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  // Method added to Car prototype
  Car.prototype.getDescription = function () {
    return `Car: ${this.make} ${this.model} (${this.year})`;
  };
  
  // Subclass ElectricCar extending Car
  function ElectricCar(make, model, year, range) {
    Car.call(this, make, model, year);
    this.range = range;
  }
  
  // Inherit Car prototype methods
  ElectricCar.prototype = Object.create(Car.prototype);
  
  // Override getDescription method for ElectricCar
  ElectricCar.prototype.getDescription = function () {
    return `${Car.prototype.getDescription.call(this)} - Range: ${this.range} miles`;
  };
  
  // Create an instance of ElectricCar
  const myElectricCar = new ElectricCar("Tesla", "Model S", 2019, 300);
  const myCar = new Car('Mistubishi', 'Lancer', '2016');
  
  // Call Description methods on the instances
  const electricCardDescript = myElectricCar.getDescription();
  const myNewCar = myCar.getDescription();
  
  console.log(electricCardDescript);
  console.log(myNewCar);