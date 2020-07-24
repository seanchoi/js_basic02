

// var age = prompt('What is your age?');
// document.getElementById('someText').innerHTML = 'Oh your age is ' + age + '?';


// while loops

var num = 0;
while(num<100) {
    num += 1; // num = num + 1
    console.log(num)
}

// for loops
for (let num2 = 0; num2<=100; num2++){
    console.log(num2);
}

// Data types
let yourAge = 18; // number
let yourName = 'Bob'; // string
let name = {first: 'Sean', last: 'Choi'}; //object
let truth = false;  // boolean
let groceries = ['apple', 'banana', 'oranges']; //array
let random; //undefined
let nothing = null; //value null


// string
let fruit = 'banana';
let moreFruits = 'banana\napple'; // '\n' - new line

console.log(fruit.length);
console.log(fruit.indexOf('nan')); // index starts from '0' 
console.log(fruit.slice(2,3));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2)); 
console.log(fruit[2]);
console.log(fruit.split(',')); // split by a comma
console.log(fruit.split('')); // split by chracters <-> toString()

//Array

let fruits = ['banana', 'apple', 'orage', 'pineapples'];
fruits =  new Array('banana', 'apple', 'orage', 'pineapples');
console.log(fruits[2]);

fruits[0] = 'berry';
console.log(fruits[0]);

for (let i = 0; i<fruits.length; i++) {
    console.log(fruits[i]);
}

// Array Commands

// toString, join ex) join("+") - make all the elements joined with "+" each other.

// pop, push, shift, unshift, slice, reverse

// sort
let someNumbers = [5,10,2,25,3,255,1,2,5,32,1];

console.log(someNumbers.sort(function(a,b) {return a-b})); //ascending order
console.log(someNumbers.sort(function(a,b) {return b-a })); //descending order

let emptyArray = new Array();
for (let num =0; num<10; num++) {
    emptyArray.push(num);
}
console.log(emptyArray);

//Objects in JS
//dictionaries in Python

let student = {
    first: 'Sean', 
    last:'Choi', 
    age:'42', 
    height:'5\'11\"',
    studentInfo: function () {
        return this.first + '\n' + this.last
    }
};

console.log(student.first);
console.log(student.last);
console.log(student.height);

student.first = 'Jong';

console.log(student.studentInfo());


// conditionals, control flows (if else)

var age = 25 //prompt('What is your age?');

if ( (age >=18) && (age<=35) ) {
    status = 'target demo';
    console.log(status);
}
else {
    status = 'not my audience!!'
    console.log(status);
}

// Switch statements
// diffentiate between weekday vs. weekend
// day 0 ---> Sunday --> weekend
// day 6 --> Saturday --> weekend
// Day 4 --> Thursday --> weekday


switch (2) {
    case 0:
        text = 'weekend'
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'weekday';
}

console.log(text);

//  JSON
