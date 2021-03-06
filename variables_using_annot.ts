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

//when to use annotations
// 1) Funtion that returns the 'any' type
const json = '{"x":154, "y":762}';
const coordinates = JSON.parse(json);
console.log(coordinates);

// how to avoid any 
const jsonn = '{"x":154, "y":762}';
const coordinatess: {x:number, y:number} = JSON.parse(jsonn);
console.log(coordinates);

// 2) When we declare a variable on one line
// and initialize it later

let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for(let i=0; i<words.length; i++){
    if(words[i]==='green'){
        foundWord=true;
    }
}
console.log(foundWord);

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number=false;

for(let i=0; i<numbers.length; i++){
    if(numbers[i]>0){
        numberAboveZero=numbers[i];
    }
}
console.log(numberAboveZero);

