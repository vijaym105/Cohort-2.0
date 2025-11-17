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


// // Level 2

// 11. Allow only 3 attempts to enter correct password If user gets it right early, stop. If not → “Account locked”
// let password = "Vijay12";
// for(p = 1; p <= 3; p++){
// let p = prompt("Enter your password");
// if(p === password){
//     console.log("Successfuly logged 💚");
//     break;
// }else{
// console.log("Account is locked");
// }
// }


// 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".
let words = prompt("Enter a words");
var count = 0;
while( words !== "stop"){
    words = prompt("enter a new word")
    console.log(words);
    if(words === "yes"){
       return count++;
    }
    console.log(count);
}

