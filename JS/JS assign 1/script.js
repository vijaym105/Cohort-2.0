// / Assignment 1 
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

// Expressions
// let x = (5+10) *2;
// console.log(x);


// DataTypes
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




// / assign 2 
// Basic Operators (Arithmetic, Assignment, Increment, Decrement,
// Comparison, Logical, Bitwise
// (A).
//  a = 10;
//  b = 3;
//  console.log(a+b);
//  console.log(a-b);
//  console.log(a/b);
//  console.log(a%b);
// (B).
// let x = 5;
// x += 5;
// x -= 5;
// x /= 2;
// x %= 5;
// console.log(x);
// (C).
// let count = 5;
// count++;
// count--;
// console.log(count);
// (D).
// if(isStudent && ID){
//     console.log("Permission granted");
// } // is both condition satisfy then log will be printed
// if(isStudent || ID){
//     console.log("Permission granted");
// } // any one of conidition is satisy it will run log.
// if(!true) // it will return false.


// Variable Hoisting in JavaScript
// (a).
// console.log(a);
// var a = 10; // undefined
// let a = 10; // cannot access before initialize.
// const a = 10; // cannot access before initialize.
// (b).
// test()
// function test() { console.log("Hello") }
// let fnc = function test(){console.log("Hell nahh");
// } // test is not defined
// (e).
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

// 13. Print numbers divisible by 7 from 1 to 50
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


// 💚💚💚💚
// Level 1 – Basic Function, Array & Object Code
// Tasks (Easy)

// 1. Write a function `sayHello()` that prints `"Hello
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
// let user = {
//     name: "Vijay",
//     age: 20,
//     address: {
//         city: "Pune"
//     }
// };
// let city = user.address.city;


// OOPS In Js

// Task 1
// Create 3 users using the same class
// Store them in an array
// Loop & call getDetails() for each user

// class User{
//     constructor(username, email, age){
//         this.username = username;
//         this.email = email
//         this.age = age
//     }
//     login(){
//         console.log("User is logged in.");
        
//     }
//     logout(){
//         console.log("User is logged out.");

//     }
//     getDetails(){

//     }
// }

// let user1 = new User("Vijay" , "malusarevijay10@gmail.com", 21)
// let user2 = new User("Ajay" , "malusare@gmail.com", 19)
// let user3 = new User("Jaddu" , "Jaddu@gmail.com", 109)


// ProtoType

// class Human{
//     constructor(){
//         this.name = "vj";
//         this.age = 27;
//     }
    
// }

// Human.prototype.Oxygen =function(){
//         console.log("Breathing....");
        
//     }
//  Human.prototype.Eating = function(){
//                 console.log("Eating....");

//     }
// let human1 = new Human();
// let human2 = new Human();

// Prototype is used to avoid same field of code to write every time ,(Saves memeory and enhance performance) .
// Here, Oxygen & Eating method shares field of code in class Human , now whenever instances are created both methods will be present 


// this keyword

// Global --> window
// console.log(this) --> Window

// fnc --> window
// function ab(){
//     console.log(this);   
// }
// ab() --> Window

// es5 fnc inside object --> object
// let obj = {
//     name : "vijay",
//      fnc: function(){
//         console.log(this);
        
//     }
// }
// obj.fnc() --> name: 'vijay'

// es5 fnc inside es5 fnc inside onject --> window
// let obj = {
//     name : "vijay",
//      fnc: function(){
//        function def(){
//         console.log(this);
//     }    
//     def()
//     }
// }
// obj.fnc --> Windows


// es6 fnc inside es5 fnc inside onject --> object
// let obj = {
//     name : "vijay",
//      fnc: function(){
//            let def=()=>{
//         console.log(this);
//     }    
//     def()
//     }
// }
// obj.fnc --> name:vijay



// // Call , blind , apply
// ek-function-mein-this-ki- value-window-hoti-hai, -agar-aap- chaahte-ho-ki-wo-value-window- naa-ho-par-koi-aur-object-ho- tab-aap-use-kr-skte-ho-call- apply-bind- ka

// call = It runs a fnc and sets value of 'this'
// let obj = {
//     name: "Vj"
// }

// function ab(){
//     console.log(this);
    
// }
// ab.call(obj)

// apply = same as call , stores 'this' value as first argument and array as second args
// let obj = {
//     name: "Vj"
// }

// function ab(a,b){
//     console.log(this, a ,b);
    
// }
// ab.apply(obj,[12,23])


// ## 4. `bind()`

// Returns a new function with fixed `this`.

// function welcome() {
//   console.log("Welcome", this.user);
// }

// const newFn = welcome.bind({ user: "Anubhav" });
// newFn();


// Setter and Getter
// class Nm{
//     constructor(name,price){
//         this.name = name;
//         this._price = price; // _ indicates that following parameter is private;
//     }

//     get price(){   
//     console.log("getter called");
//      return '$(this._price)';  
//     }

//     set price(val){
//         if(val<=0){
//             console.log("Invalid price");
//             return; 
//         }
//         this._price = val
//     }
// }

// let anm = new Nm("vijay", 2000);
// console.log(anm._price);
// anm.price = -2000;


// SECTION 1: Objects and OOPS Thinking (Foundation)

// 1.	Create a user object that stores name and email and has a login method which prints “User logged in”.
// let user = {
//     name: "Vijay",
//     email: "ma@.gmail.com",
//     login: function(){
//         console.log("User logged in");
        
//     }
// }
// user.login()

// 2.	Imagine you now have 3 users.
// First, think how you would manage them without using a class.
// Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches.
// Without Class
// let user = {
//     name: "Vijay",
//     email: "ma@.gmail.com",
//     login: function(){
//         console.log("User logged in");
        
//     }
// }
// user.login()


// let user2 = {
//     name: "Vijay",
//     email: "ma@.gmail.com",
//     login: function(){
//         console.log("User logged in");
        
//     }
// }
// user2.login()

// let user3 = {
//     name: "Vijay",
//     email: "ma@.gmail.com",
//     login: function(){
//         console.log("User logged in");
        
//     }
// }
// user3.login()

// With using class
// class User{
//     constructor(){
//         this.name = "Vijay";
//         this.email = "email";
//     }
//     isLogin(val){
//         console.log(`${val}`+" is logged in");
        
//     }
// }

// let user1 = new User();
// user1.isLogin("User1");
// let user2 = new User(); 
// user2.isLogin("User2");
// let user3 = new User(); 
// user3.isLogin("User3")


// 3. Create a product object that stores name and price and has a method which returns the final price after discount.

// let product = {
//     name: "Vj",
//     price: 10000,
//     dis: function(){
//        let ab =  this.price *5/ 100;
//        return ab;
//     }
// }
// let sad =product.dis()
// console.log(sad);

// The goal of this section is to understand why keeping data and behavior together makes code easier to manage.

// SECTION 2: Classes and Objects
// 4.	Create a Car class with the following: brand speed a drive method that prints the car brand and speed

// class Car{
//     constructor(brand, speed){
//         this.brand = brand;
//         this.speed = speed;
//     }
//     drive(){
//         console.log("Car belongs to "+`${this.brand}` +" brand and has top speed of "+ `${this.speed}`);
        
//     }
// }
// let car1 = new Car("BMW", 200);
// car1.drive();
// console.log(car1);

// Answer this in your own words:
// If classes did not exist, how would you write this logic and what problems might occur when the project becomes large?
// 1). More line of code .
// 2). Reusability wouldn't be there.
// 3). In larger projects it would cause major issue.


// SECTION 3: Constructor and this keyword
// 	7.	Create a Student class whose constructor accepts name and roll number. Add a method introduce that prints both values.
// class Student{
//     constructor(name, roll_no){
//         this.name = name;
//         this.roll_no = roll_no;
//     }
//     introduce(){
//         console.log("Name : "+ `${this.name}` + ", Roll no : " + `${this.roll_no}`);
        
//     }
// }
// let stud1 = new Student("Vijay", 46);
// stud1.introduce();

// 8.	Inside the constructor, set values using this.
// Then try removing this and notice what error occurs and why.
// class Student{
//     constructor(name, roll_no){
//         name = name;
//         roll_no = roll_no;
//     }
//     introduce(){
//         console.log("Name : "+ `${name}` + ", Roll no : " + `${roll_no}`);
        
//     }
// }
// let stud1 = new Student("Vijay", 46);
// console.log(stud1);
// undefined or black Object(that is created using 'new') , 'this' stores the value in blank object whenever respective class is trigger for creating object.

// 9.	Create an object with two methods: One method using a normal function One method using an arrow function Inside both, print this and observe the difference.
// let obj = {
//     fnc1: function(){
//         console.log(this);
        
//     },
//     fnc2: ()=>{
//         console.log(this);
//     }
// }
// obj.fnc1() // A es5 function , O/p --> object
// obj.fnc2() // Gives es6 fnc , o/p --> windows



// SECTION 4: Constructor Functions and Prototypes

//10. Create a User constructor function (do not use class syntax).

// function User(name, age){
//     this.name = name;
//     this.age = age;
// }

// let ud = new User("vijay", 21);
// console.log(ud);

// 11.	Add a login method in two ways: First, inside the constructor Then, move the method to the prototype
// Method 1:
// function Std(name, email){
//     this.name = name;
//     this.email = email;

//     function login(){
//         console.log(`${name} has logged in...`);
        
//     }
//     login()
// }
// let sd = new Std("Vijay", "mal@MediaList.com");

//Method 2:
// function Std(name, email){
//     this.name = name;
//     this.email = email;

// }
// Std.prototype.login = function(){
//         console.log(`${this.name} has logged in...`);
        
//     }
// let sd = new Std("Vijay", "mal@MediaList.com");
// sd.login();
// let s1= new Std("Dj", "mal@aisasdiosh.com");
// s1.login();

// 12.	Create two User objects and compare their login methods using equality.
// Explain why the result is true or false.

// function User(name, age){
//     this.name = name;
//     this.age = age;

//     this.login = function(){
//         console.log(`${this.name} has logged in successfully`);
//     }
    
// }

// let user1 = new User("Vijay", 21)
// let user2 = new User("Ajay", 25)

// console.log(user1.login === user2.login); // o/p is false . reason -> even if the method are same but the data inside method differs so resultants false.


// SECTION 5: call, apply, bind

// 13.	Create a function that prints this.name.
// Use call to run the function using the object
// Use apply to run the function using the object
// Use bind to create a new function and then call it

//      function Con(name){
//     this.name = name;
// }

// let obj = {
//     name: "Malusare"
// }


// Con.call(obj,"Vijay"); 

// Con.apply(obj, [1,2])

// let sui = Con.blind({name: "Dj"});
// sui();


//  15.	Borrow a method from one object and run it for another object using call.
// let obj1 = {
//     fnc: function ab(){
//         console.log(`${this.name}`+" borrowed");
        
//     }
// }
// let obj2 = {
//     name: "Vijay"
// }
// obj1.fnc.call(obj2);


// CallBack Hell

// function ab(fn){
//     fn(function(fn3){
//         fn3(function(name){
//             console.log(`${name}`);
            
//         })
//     })
// }

// ab(function(fnc2){
//     fnc2(function(fn4){
//         fn4("Vijay")
//     })
// })

// function ab(Address , cb){
//     console.log("Fetching...");
    
//     setTimeout(()=>{
//         cb({lat: 203 , long: 302})
//     },2000)
    
// }

// ab("Famous", function(dets){
//     console.log(dets);
    
// })

// function icecream(kutliCream, cb){
//     cb({ShopLocation: "Newzealand", Flavour: "DarkCurrent"})
// }
// icecream("Magnum", function(dets){
//     console.log(dets);
    
// })


// # Day 60 — Exercises

// ## Exercise 1 — Very Easy (Warming up)
// **Task (Hindi):** Ek function banao `afterDelay`
// **Requirements:**
// - Ye function do cheezein lega:
//   1. `time` (milliseconds)
//   2. `callback` function
// - Given `time` ke baad `callback` call kare
// - Callback ke andar `"Callback executed"` print hona chahiye

// **Use case:**
// // > “2 second baad ek kaam karna hai”
// **Goal:**
// - Samajhna ki callback delay ke baad kaise execute hota hai
// - Ye `setTimeout` + callback connection hai

// function afterDelay(time, cb){
//     setTimeout(() => {
//         cb("2 second baad ek kaam karna hai")
//     }, `${time}`);
    
// }

// afterDelay(2000,function(dets){
//     console.log(dets +  " CallBacck executed");
// })


// ## Exercise 2 — Intermediate (Data flow)

// **Task (Hindi):** Ek function banao `getUser`
// **Requirements:**
// - `getUser` `username` lega
// - 1 second ke baad `callback` ko ek object de:
//   - `id`
//   - `username`
// **Then:**
// - Callback ke andar ek aur function call karo `getUserPosts`
// **`getUserPosts` requirements:**
// - `userId` lega
// - 1 second ke baad `callback` ko `posts` ka array de

// **Final output:**
// - User ka `username` print ho
// - Fir uske `posts` print ho

// **Goal:**
// - Samajhna ki ek async ka result next async ko kaise milta hai
// - Callback chaining practice

// function getUser(username, cb){
//     setTimeout(() => {
//         cb({id:102, username:"Vijay"})
//     }, 2000);
// }

//     function getUserPosts(id , cb2){
//     setTimeout(()=>{
//         cb2(["Vijay","Sumit", "lads"])
//     },1000)
//     }

// getUser("Vijay", function(cbdets){
//     getUserPosts(cbdets.id, function(post){
//         console.log(cbdets.username , post );
//     })

// })


// ## Exercise 3 — Intermediate (Callback dependency — thoda painful)

// **Task (Hindi):** Teen functions banao:

// 1. `loginUser`
//    - 1 second baad callback ko `user` object de
// 2. `fetchPermissions`
//    - `userId` lega
//    - 1 second baad callback ko `permissions` array de
// 3. `loadDashboard`
//    - `permissions` lega
//    - 1 second baad callback ko `"Dashboard loaded"` bole

// **Flow:**
// - Pehle `loginUser`
// - Uske andar `fetchPermissions`
// - Uske andar `loadDashboard`
// - Final output console mein print ho

// **Goal:**
// - Callback nesting ko feel karna
// - Yehi structure baad mein callback hell banta hai


// function loginUser(username, cb){
//     setTimeout(()=>{
//         cb({username: "Vijay", gmail:"mal@gmail.com"})
//     },1000)
// }

// function fetchPermissions(userId, cb){
//     setTimeout(()=>{
//         cb([101, 102, 104])
//     },1000)
// }
// function loadDashboard(perm , cb){
//     console.log("Taking permission...");
//     setTimeout(()=>{
//         cb("Dashboard Loaded!")
//     },2000)
// }


// loginUser("Vijay", function(dets){
//     console.log(dets);
//     fetchPermissions("101", function(permissions){
//         console.log(permissions);
//         loadDashboard("Granted", function(parma){
//             console.log(parma);
            
//         })
//     })
    
// })


// Promises -> promises returns 3 types of promises , pending, resolve, reject

// let p = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve()
//     },2000)
// })
// p.then(function(){
//     console.log("Resolved");
// })
// .catch(()=>{
//     console.log("Rejected");
    
// })

// Fetch use case

// fetch('https://randomuser.me/api/').then((raw)=> raw.json())
// .then((data)=>{
//     console.log("Data is Loading...");
    
//     console.log(data.results[0].name);
    
// })

// async makes a function return a Promise.
// await -> `await` pauses execution until the Promise resolves. You can use `await` only inside `async` functions 

// async function getDetails(){
// let pr = await fetch('https://randomuser.me/api/');
// let data = await pr.json();
//  console.log(data);
 
// }
// getDetails()


// try() catch()
// try {
//   let obj = undefined;
//   obj.name; 
// } catch (err) {
//   console.log("Name:", err.name);      //`name` – error type: `ReferenceError`, `TypeError`, `SyntaxError`, etc.
//   console.log("Message:", err.message); //  message` – description of the error 
//   console.log("Stack:", err.stack);  // stack trace (where the error occurred)
// }


// Exception handling
// try{
//     let num = 10 / 0;
//     console.log(num);
    
// }catch(error){
//     console.log("Something went wrong");
// }

// finally -> executes whether an error occurs or not.
// try{
//     let a = 12
//     console.log(a.name.first);
// }catch(err){
//     console.log("Something went wrong");
    
// }
// finally{
//     console.log("chal jhatu");
    
// }


// API example (OpenWeatherMap):

// `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`

// ## Scenario 1 — Weather Dashboard with Error Handlingt weather data from a public weather API (e.g., OpenWeatherMap).
// Build a small weather dashboard that fetches current weather data from a public weather API (e.g., OpenWeatherMap).

// ### Requirements
// - Make the API request asynchronously using `fetch` with `async/await`.
// - Handle API request failures (for example, invalid city name) using `try/catch`.
// - Create and throw custom errors based on weather conditions (e.g., extremely high or low temperature) and handle them appropriately.

// ### Suggested tasks
// - Build a simple UI to input a city name and display the result.
// - Show user-friendly error messages for network errors, invalid input, or API errors.
// - Demonstrate at least one custom thrown error (e.g., `ExtremeTemperatureError`) and handle it in the UI.


// async function weather(city){
//     try{
//     let apikey = `afe149b5ef80f50a0df3b5576823053f`;
//    let raw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`)
//    let data = await raw.json();
//    let temp =  data.main.temp;
//    if(temp > 30) console.log("Too hot out there " + temp+"℃");
//    else if(temp < 30 && temp >= 12) console.log("Tempreature is cold , tilted towards cold " +temp+"℃");
//    else if(temp < 0 ) { console.log("Too damn cold " + temp+"℃")}
//     else{
//         console.log("Tempreature not found")
//     }
   
//     console.log(data); 
    
// if(!raw.ok){
//      throw new Error("Something went wrong or city not found");
// }
//   let real = await raw.json();
//   console.log(real);

// }catch(err){
//     console.log(err.message);
    
// }
// }
// weather("mumbai");

// Scenario 2 — Bulk Email Sending Simulation with Parallel Promises and Error Handling
// Simulate sending bulk emails to 5 users. Treat each email-sending operation as a `Promise` (simulate delays with `setTimeout`).

// ### Requirements
// - Send all emails in parallel using `Promise.all`.
// - If any email fails (e.g., due to a simulated random failure), catch the error and clearly indicate which specific email failed.
// - Use a `finally` block to display a message indicating that the "Email process is complete." (regardless of success/failure).

// ### Suggested tasks
// - Create an array of 5 mock email tasks that resolve or reject based on a random condition.
// - Call `Promise.all` and handle success and failure cases. Show a breakdown of which emails succeeded and which failed.
// - Ensure the `finally` block runs to update the UI or console indicating completion.

let emails = [
  "Malusarevijay@gmail.com",
  "xyzx@gmail.com",
  "nallesh@gmail.com",
  "hackur@gmail.com"
];

function sendEmail(email) {
  return new Promise((resolve, reject) => {
    let time = Math.floor(Math.random() * 5);

    setTimeout(() => {
      let prob = Math.floor(Math.random() * 10);
      if (prob <= 5) resolve(`Email sent to ${email}`);
      else reject(new Error(`Email failed for ${email}`));
    }, time * 1000);
  });
}

async function emailList(userList) {
  let promises = userList.map((email) => {
    return sendEmail(email)
      .then((data) => data)
      .catch((err) => err.message)
      .finally(() => {
        console.log("Operation performed successfully ✅");
      });
  });

  let results = await Promise.all(promises);

  results.forEach((result) => {
    console.log(result);
  });
}

emailList(emails);





