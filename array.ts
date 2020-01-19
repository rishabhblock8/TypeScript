const carMakers : string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

console.log(carMakers);
console.log(dates);

const carsByMake: string[][] = [];

// help with inference when extracting values
const car = carMakers[0];
console.log(car);
const myCar = carMakers.pop();
console.log(myCar);


// help with map
carMakers.map(
    (car:string): string => {
        return car.toUpperCase();
    }
);
