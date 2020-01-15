var apples = 5;
var speed = 'fast';
var hasName = true;
var nothingMuch = null;
console.log(apples);
console.log(speed);
console.log(hasName);
console.log(nothingMuch);
// built in objects
var now = new Date();
console.log(now);
//array
var colors = ['red', 'green', 'blue'];
var myNumbers = [1, 2, 3];
var truths = [true, true, false];
console.log(colors);
console.log(myNumbers);
console.log(truths);
//classes
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
console.log(car);
//object literal
var point = {
    x: 10,
    y: 20
};
console.log(point);
//functions
var logNumber = function (i) {
    console.log(i);
};
