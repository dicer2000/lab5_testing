// Vehicle Prototype
// by Brett Huffman
// CSCI 324
// Feb 13, 2025
//

// Constructor Function for Vehicle
function Vehicle(make, year) {
    this.make = make;
    this.year = year;
}
// Start Engine function
Vehicle.prototype.startEngine = function() {
    return new Promise((resolve) => {
        setTimeout(() => {
           resolve("Engine Started");
        }, 1000);
    });
};

module.exports = { Vehicle };

/*
// Test example
const vehicle = new Vehicle("Prius", 2000);
vehicle.startEngine()
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.error(error);
    });

*/