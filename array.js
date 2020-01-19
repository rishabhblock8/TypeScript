var carMakers = ['ford', 'toyota', 'chevy'];
var dates = [new Date(), new Date()];
console.log(carMakers);
console.log(dates);
var carsByMake = [];
// help with inference when extracting values
var car = carMakers[0];
console.log(car);
var myCar = carMakers.pop();
console.log(myCar);
// help with map
carMakers.map(function (car) {
    return car.toUpperCase();
});
