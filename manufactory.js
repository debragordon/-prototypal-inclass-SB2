/*
  Create a function named Car with one property named `manufactured_date`
  whose value will be Date.now()
 */
function Car () {
  this.manufactured_date = Date.now();
}

/*
  Create a constructor function named Make with one
  argument that will hold the manufacturer of the Make (see below).

  Set its prototype to a new instance of the Car function.

  Define a property `manufacturer` and assign the
  manufacturer property to the argument value.
 */
function Make (maker) {
  this.manufacturer = maker;
}

Make.prototype = new Car ();


// Set the prototype to Car

/*
  1. Create a new constructor function for the make of your favorite car.
  2. It must inherit from the general Make function.
  3. It must have one argument that will to hold the model name.
  4. The constructor must define a property to hold the model name.
 */
function Audi (name) {
  this.modelName = name;
}
Audi.prototype = new Make("Audi");

/*
    1. Create a constructor function named after your favorite car model.
    2. It must inherit from the specific make type you created in previous step.
    3. When creating the inheritance relationship, pass in the model name
       to the make constructor function
*/
function A3Cabriolet () {

}
// Set the prototype to appropriate model you created above and set the model name argument
A3Cabriolet.prototype = new Audi("A3Cabriolet");

/*
    Being an avid car collector, you own three different cars all of
    same model from your favorite manufacturer.

    1. Create three new instances of your favorite car.
    2. Create a new property on each object to hold the license plate
       number for each car.
*/

var mine = new A3Cabriolet();
mine.license = "404TF6";
var forTara = new A3Cabriolet();
mine.license = "TY67Y7";
var forSilas = new A3Cabriolet();
mine.license = "8TYU62";

console.log("mine", mine, mine.license);
console.log("forTara", forTara);
console.log("forSilas", forSilas);







