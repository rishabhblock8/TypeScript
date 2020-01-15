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
//when to use annotations
// 1) Funtion that returns the 'any' type
var json = '{"x":154, "y":762}';
var coordinates = JSON.parse(json);
console.log(coordinates);
// how to avoid any 
var jsonn = '{"x":154, "y":762}';
var coordinatess = JSON.parse(jsonn);
console.log(coordinates);
// 2) When we declare a variable on one line
// and initialize it later
var words = ['red', 'green', 'blue'];
var foundWord;
for (var i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}
console.log(foundWord);
// 3) Variable whose type cannot be inferred correctly
var numbers = [-10, -1, 12];
var numberAboveZero = false;
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}
console.log(numberAboveZero);
