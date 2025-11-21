/// Assignment 1 
//  Logging and interaction
// console.log("HEy")
// console.info("Tags");
// console.warn("Tags");
// console.error("Tags");
// const vj = prompt("Whats your name");
// alert("Welcome",`${vj}`);
// let age = Number(prompt("Whats's your age?"));
// console.log(typeof age);
// let age = prompt("Enter age");
// console.log(age + 5); // Happens cause age is a string , resultant concatenation happens


// Working with Strings
// let a = "I love Sheriyans";
// a.split(2,6);
// a.split("");
// a.replace("love", "at")
// console.log(a);
// a.includes("love");
// let nam = "Vijay";
// console.log("Hey" , `${nam}`);


// Statements
// let a = 4; b=3;
// console.log(a)
// console.log(a)
// console.log(a)

//Expressions
// let x = (5+10) *2;
// console.log(x);


//DataTypes
// let nam = "VIjay"; String
// let age =  12; number/integer
// let cgpa = 13.4; float
// let isStudent = true; boolean
// let back = null; null
// let skill = ["JS","HTMl","CSS"]; array
// let city = {city:"pune"};  object
// let y; undefined


// Special values
// let nan = Number(12+"bs");
// console.log(nan); // NaN (Not a Number)
// let logs =  1/0;
// console.log(logs); // Infinity
// Write one line explaining when to use null vs undefined. > null is used intentional absence , undefined for unintentional absence.


// Primitive vs Reference
// let x  = 5;
// let y = x;
// y = 10;
// console.log(x,y);
// let obj1 = {name : "Vijay"};
// let obj




/// assign 2 
// Basic Operators (Arithmetic, Assignment, Increment, Decrement,
// Comparison, Logical, Bitwise
//(A).
//  a = 10;
//  b = 3;
//  console.log(a+b);
//  console.log(a-b);
//  console.log(a/b);
//  console.log(a%b);
//(B).
// let x = 5;
// x += 5;
// x -= 5;
// x /= 2;
// x %= 5;
// console.log(x);
//(C).
// let count = 5;
// count++;
// count--;
// console.log(count);
//(D).
// if(isStudent && ID){
//     console.log("Permission granted");
// } // is both condition satisfy then log will be printed
// if(isStudent || ID){
//     console.log("Permission granted");
// } // any one of conidition is satisy it will run log.
// if(!true) // it will return false.


// Variable Hoisting in JavaScript
//(a).
// console.log(a);
// var a = 10; // undefined
// let a = 10; // cannot access before initialize.
// const a = 10; // cannot access before initialize.
//(b).
// test()
// function test() { console.log("Hello") }
// let fnc = function test(){console.log("Hell nahh");
// } // test is not defined
//(e).
// Function declartion and var Variable gets fully hoisted.



// Conditional Operators (if, else, else-if, ternary, switch)
// (A).
// let age = 18;
// if(age >= 18){
//     console.log("You can vote.");
// }
// else{
//     console.log("Can't vote"); 
// }
// (B).
// let marks = 50;
// if(marks >= 90){
//     console.log("A grade");
// }
// else if(marks >= 75){
//     console.log("B grade");
// }
// else if(marks >=60){
//     console.log("C grade");
// }
// else if(marks >= 50){
//     console.log("D grade");
// }
// else{
//     console.log("Failed");
// }
// (C).
// let city = "Delhi";
// if(city === "Maharastra"){
//     console.log("MH is login");
// }
// else if(city == "Delhi"){
//     console.log("Captital");
// }
// else{
//     console.log("Not found");
// }
// (D).
// let score = 40;
// let re = score >= 35 ? "Fail" : "Pass";
// console.log(re);
// (E).
// Convert this if-else into a ternary:
// if (temperature > 30) { “Hot” } else { “Pleasan")
// let temp = 38;
// let res = temp >= 30 ? "hot" : "Pleasan";
// console.log(res);
// (F).
// let days;

// switch (days){
//     case 1: 
//     days = "Monday";
//     break;

//     case 2:
//     days = "Tuesday";
//     break;

//     case 3:
//     days = "Wednesday";
//     break;

//     default :
//     days = "invalid";
// }
// console.log(days)


// Made 5s table using for loop
// for(i=1; i<=10;i++){
//     console.log(`5*${i} = ${i*5}`);
// }

// Made Even no. detecter
// for(i=1; i<=20; i++){
//     if(i % 2 === 0){
//         console.log(`${i} is even`);
//     }
// }

// Made for odd
// for(i=1; i<=20; i++){
//     if(i % 2 != 0){
//         console.log(`${i} is odd`);
//     }
// }

// Level 1
// 7.Ask user’s age and check if eligible to vote If age >= 18 → “Eligible”, else → “Not eligible”
// let age = prompt("Whats your age");
// if(age === null){
//     console.error("You cancelled.");
// }else{
//     if(age.trim() == ""){
//         console.log("Thik se daal bhakhau");
//     }
// else{
//     let ages = Number(age);
//     if(isNaN(ages)){
//         console.error("Only number is allowed");
//     }else{
//         if(age >= 18){console.log("u are eligible to vote");
//         }else{
//             console.log("u aren't eligible..");
//         }
//     }
// }
// }


// // 8.Print multiplication table of 5 . Use loop to print 5 × 1 to 5 × 10.
// for(i=1; i<=10; i++){
//     console.log(`5*${i} = ${5*i}`); 
// }
// 9. Count how many numbers between 1 and 15 are greater than 8
// Loop and count conditionally.
// var count = 0;
// for(i=1;i<=15;i++){
//     if(i>=8){
//         count++;
//     }
// }
// // console.log(count);
// 10. Ask user for password and print access status Hardcoded correct password. Compare with user input.
// let pass = prompt("Enter your password");
// const password = "Vijay@2005";
// if(pass === password){
//     console.log("Successfully login");
// }else{
//     console.log("Acess Denied");
// }


// // Level 2 Assignment 3

// 11. Allow only 3 attempts to enter correct password If user gets it right early, stop. If not → “Account locked”
// let attempts = 0;
// let pass = "VijayBhai";
// let Opened = false
// let password = prompt("Enter your password");
// attempts++;
// if(password === pass) Opened = true;

// while (password != pass) {
//     if(attempts === 3){
//         console.log("Account locked");
//         break;
//     }
//     password = prompt("Enter your password");
//     attempts++;
//     if(password === pass) Opened = true;
// }
// if(Opened == true){
//     console.log("Account Opened");
    
// }

// 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".

// var count = 0;
// let words = prompt("Enter a words");
// count++;
// while( words !== "stop"){
//     words = prompt("enter a new word")
//     console.log(words);
//     if(words === "yes"){
//        return count++;
//     }
//     console.log(count);
// }

//13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.
// for(i=1;i<=50;i++){
//     if(i % 7 === 0){
//         console.log(`${i} is Divisible by 7`)
//     }
// }

// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.
// let sum = 0;
// for(i=1;i<=30;i++){
//     if(i % 2 != 0){
//         sum += i;
//     }
// }
// console.log(`${sum} is sum of odd numbers.`);

// 15. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.
// let num = +prompt("Enter a number");
// while (num % 2 !== 0) {
//      num = +prompt("Enter a number");
//      console.log(num);
// }

// 16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.
// let start = prompt("Enter a first number");
// let end = prompt("Enter the second number");

// for(i=start; i<end;i++){
//      console.log(i);  
// }

// 17. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.
// let count = 0;
// for(i=1; i<=20 && count<3; i++){
//      if(i % 2 !== 0){
//      count++;
//      console.log(i);
//      }
// }

// 18. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.
// let counter = 0;
// let flag = 1;
// let num = +prompt("Enter 1 Numbers");
// flag++
// while(flag <= 5){
//      num = +prompt(`Enter ${flag} number`);
     
//      if(num > 0){
//           counter++;
//           console.log(`${counter} times u entered positive number` );
//      }
//      flag++;
// }

// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”
// let bal = 1000;
// let counter = 0;

// while(bal > 0 && counter !=3){
//  let widthdraw = +prompt("Enter the amount");
//  counter++;
//  if(widthdraw <=bal){
//     bal -= widthdraw;
    
//  }else {console.log("Insufficient balance");
//  }
// }
// console.log(`Balance : ${bal}`);\

// Argument Object
// function AB(){
//     console.log(arguments[1,2]);
// }
// AB("Vijay",20,"Pune")

// function ABa(a,b,c,d){
//     console.log(a,b,c,d);
// }
// let arr = [1,2,3,4,5,6]
// ABa(...arr)

// Reduce 
// function tryin(...num){
//   let ans =  num.reduce(function(acc, val){
//         return acc*val;
//     }, 1);
//     console.log(ans);
    
// }
// tryin(1,2,3,4,5,6,7,8,9,10);


//💚💚💚💚
//Level 1 – Basic Function, Array & Object Code
//Tasks (Easy)

//1. Write a function `sayHello()` that prints `"Hello
// // JavaScript"`.
// function sayHello(nav){
//     console.log(`Hello ${nav}`);
// }
// sayHello("Vijay");

// 2. Create a function `add(a, b)` that returns their sum
// and log the result.
// function add(a,b){
//     return a+b;
// }
// let res = add(2,5);
// // console.log(res);

// 3. Write a function with a default parameter `name =
// "Guest"` that prints `"Hi <name>"`.
// function Def(name = "Guest"){
//     console.log(`Hello ${name}`);
// }
// Def();

// 4. Use rest parameters to make a function that adds
// unlimited numbers.
// function Rest(...num){
//     console.log(num);
// }
// Rest(1,2,3,5,6);

// 5. Create an IIFE that prints `"I run instantly!"`.
// (function(){
//     console.log("I run instantly");
// })();

// 6. Make a nested function where the inner one prints a
// variable from the outer one.
// function Outer(){
//     let a = 10;
//     function Inner(){
//         console.log(a);
//     }
//     Inner();
// }
// Outer();

// 7. Create an array of 5 fruits. Add one at the end and
// remove one from the beginning.
// let arr = ["Apple", "Banana", "Watermelon", "Guava", "Orange"];
// arr.push("peach");
// arr.shift();
// console.log(arr);

// 8. Use a `for` loop to print all elements of an array.
// let arr = [1,2,3,4];
// arr.forEach(val => {
//     console.log(val);
// })

// 9. Create an object `person` with keys `name`, `age`,
// and `city`, and print each key’s value.
// let person = {
//     name : "Vijay",
//     age: 20,
//     city: "Pune"
// }
// for(let key in person){
//     console.log(person[key]); // Method 1 Short
// }
// let nam = person.name;
// console.log(nam); // Method 2 very lengthy

// 10. Use `setTimeout()` to log `"Time’s up!"` after 2
// seconds.
// setTimeout(function() {
//     console.log("Times's Up");
// }, 2000)



// 🟡 Level 2 – Functional Thinking & Logic Tasks
// (Intermediate)

// 1. Write a higher-order function `runTwice(fn)` that
// takes another function and executes it two times.
// function runTwice(Two){
//     Two();
//     Two();
// }
//     function child(){
//         console.log("Running Twice");
//     }
// runTwice(child);

// 2. Create one pure function that always returns the
// same output for a given input, and one impure
// function using a global variable.
// function pure(a,b){
//     console.log(a,b);
// }
// pure(1,2); // 1,2
// pure(1,2); // 1,2
// let global = 0;
// function impure(val){
//     global++;
//     console.log(global + val);
// }
// impure(1); // 2
// impure(1); // 3

// 3. Write a function that uses object destructuring inside parameters to extract and print `name` and `age`.
// function obj({name , age}){
//     console.log(name, age);
// }
// obj({name: "Vijay", age: 20});

// 4. Demonstrate the difference between normal function and arrow function when used as object methods (the `this` issue).
// let obj = {
//     name: "Vijay",
//     lu: function(){
//         console.log(this);
//     }
// }
// obj.lu(); // Vijay
// let obj = {
//     nam: "Vijay",
//     age: 20,
//     sec: ()=>{
//         console.log(this.name);
//     }
// }
// obj.sec();

// 5. Given an array of numbers, use `map()` to create a
// new array where each number is squared.
// let arr = [2,4,5,6,8];
// let arr2 = arr.map((val)=>{
//     return val*val;
// })
// console.log(arr2);

// 6. Use `filter()` to get only even numbers from an
// array.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// let arr2 = arr.filter((val)=>{
//     return val % 2==0 ;
// })
// console.log(arr2);

// 7. Use `reduce()` to find the total salary from an array
// of numbers `[1000, 2000, 3000]`.
// let sal = [1000, 15000, 30000];
// let arr2 = sal.reduce((acc, val)=>{
//     return acc + val;
// }, 0);
// console.log(arr2);

// 8. Create an array of names and use `some()` and
// `every()` to test a condition (e.g., all names longer than
// 3 chars).
// let nam = ["Vij", "aja", "tej", "nagesh"];
// let arr = nam.some((val)=>{
//     return val.length < 4;
// })
// console.log(arr);

// 9. Create an object `user` and test the behavior of
// `Object.freeze()` and `Object.seal()` by
// adding/changing keys.
// let user = {
//     name: "Vijay",
//     age: 20
// };
// let ne = Object.freeze(user);
// ne.age = 22; // Completly gets freezed doesn't change anything

// let se = Object.seal(user);
// se.age = 22; // Only modifies values of obj
// se.city = "Pune";

// 10. Create a nested object (`user → address → city`) and
// access the city name inside it.
let user = {
    name: "Vijay",
    age: 20,
    address: {
        city: "Pune"
    }
};

let city = user.address.city;
