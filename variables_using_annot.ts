let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean= true;

let nothingMuch: null = null;


console.log(apples);
console.log(speed);
console.log(hasName);
console.log(nothingMuch);

// built in objects
let now: Date = new Date();
console.log(now);

//array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true, true, false];

console.log(colors);
console.log(myNumbers);
console.log(truths);

//classes
class Car{
    
}
let car: Car = new Car();
console.log(car);

//object literal
let point: { x: number; y:number } = {
    x:10,
    y:20
};
console.log(point);

//functions
const logNumber: (i: number) => void = (i:number) => {
    console.log(i);
}