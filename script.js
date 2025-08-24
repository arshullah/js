// what is variable ?

// ans-- variable is container that hold data
// and help us store reuse and update information

// they are 3 types var, let , const
// var is old and risky and and it is function scoped & it can be redeclared and reassigned and hoisted to the top undefined value
// let is block scoped it can reassigned but not redeclared and hoisted always temporal dead zone
// const scoped blocks cannot be reassigned and redeclared and also TDZ applied

// data types
// they are 2 types in js
// 1 primitive and 2 refrence
// primitive--> these are most basic datatypes. they store single value and are immutable
// [string, Number, boolean undefined Null bglnt symbol]
// refrence--> these are store collection or complex object they are mutable and stored by refrence
// {object array function}

// string  '' , "" , ``
// number 1,2.3,
// boolean true and false
// null isme ham variable kko null asign krte hai
// undefined me ham variable create krte hai usme value assign nhi krte
// symbol->> unique immutable value as an identifier use hota hai
// bglnt--> greater numbers ke liye

// Array->> an array is a special variable that can hold multiple values in a single variable.
// Object->>In JavaScript, an object is a collection of key-value pairs. It’s used to store related data and functionality — like properties and methods.
// function-->In JavaScript, a function is a block of code designed to perform a specific task. Functions are used to reuse code .

// NaN js me failed number operation haib
// Dynamic typing---> js me static typing nahi hai and yaha par hai dynamic typing jiska matlab hota hai aap data ko change kr sakte ho kuki yaha par dynamic data types hai

// let a=12;
// a=true;
// a ="arsh"
// a=[];

// type coercion (== vs===)
// truthy vs falsy value
// = false "" null undefined NaN document.all ->false
// rest all--> true

// Operator --> In programming, an operator is a symbol or keyword that tells the computer to perform a specific operation on variables and values.
// arithmetic , comparsion , logical , assignment, unary, ternary..
// + - / * % ** arithmetic operators
// = == === != !==  >= <= > <  comparsion operator
// = += -= *= %= /=

// let a=12;
// a+=3;
// a-=11;
// a*=2;
// a/=2;
// a%=3

// locial operator
// && And And  || or or !Not
// And opertor --> if both operand true then then return true
// or Operator -->if at least one condition true then give true
// ! Not opertor---> reverse a boolean True-> false and false-> true

// falsy --> false, 0, "", null, undefined, NaN
// truthy---> reamin are true

// Unary operator -->A unary operator is an operator that works with only one operand.
// + - ! typeof ++ --

// Ternary operator -->The ternary operator is a shorthand for if-else statements.
// It is called "ternary" because it takes three operands:

// ?:

// condition ? true hue ka code : false hue ka code
// 12>14?console.log("true"):console.log("flase");

// let x= 10;
// let y =20;
// if (x>5 && y<25) {
//     console.log("true");

// } else{
//     console.log("False");

// }

// let isAdmin = true;
// let isLoggedIn = false;

// if (isAdmin || isLoggedIn) {
//     console.log("Access Granted");
// }
// else{
//     console.log("Access deny");

// }

// let temp = 35;
// if (!(temp < 30 )) {
//     console.log("Hot");

// }else{
//     console.log("Normal");

// }

// let a= 0;
// if (a) {
//     console.log("Truthy");

// }else{
//     console.log("Falsy");

// }

// let score = 80;
// let grade = score >= 90 ? "A": score>= 75? "B": score>= 60? "C": "Fail"

// console.log(grade);

//  let points = 20;
//  let status = points>100?"Gold" : points >50 ? "Silver" : "Bronze"
//  console.log(status);

//  let a= 4;
//  let b = a++;
//  console.log(a ,b);

// Control flow statements are used to control the order in which code is executed. They allow the program to make decisions, repeat actions, or jump to different parts of the code.
// if else else if
// switch case  --->switch...case ek control flow statement hai jo ek variable ke value ke base par multiple decision lene ke liye use hota hai
// early returnn pattern --->  return statement ek function ke andar use hota hai jisse function koi value wapas (return) karta hai. Aur jaise hi return chalta hai, function turant terminate (band) ho jata hai.

// Question ---> Write a function getGrade(score) that .
// Takes a student marks (0 to hundred )
//  Return the grade based on the logics:
// 90-100 A+
// 80-89 A
// 70-79 B
// 60-69 C
// 33-59 D
// 0-23 fail
// Anything else

// function getGrade(score)
// {
//     if(score >=90 && score<=100){
//         return "A+";
//     }
// else if(score >=80 && score <=89){
//     return "A";
// }
// else if(score >=70 && score<=79)
//   {
//     return "B";
//   }
//   else if(score >=60 && score<=69){
//     return "C";
//   }
// else if(score >=33 && score<=59)
//   {
//     return "D";
//   }
//   else if(score >=0 && score<=23){
//     return "F";
//   }
//   else{
//     return "Invalid MARKS"
//   }

// }
// console.log(getGrade(-9))

//  Rock -PAper Scissor logic

// function RockPaperScissor( user , machine){

//     if(user=== machine) return "draw";
//     if(user === 'rock' && machine=== "scissor") return "user";
//     if(user === 'scissor' && machine=== "Paper") return "user";
//     if(user === 'paper' && machine=== "rock") return "user";

//    return "computer";
// }
// console.log(RockPaperScissor("rock","scissor"));

// let x=2;
// switch(x){
//     case 2:
//         console.log("Two");
//         break;
//         case 3:
//             console.log("Three");

//         break;

// }

// Q1----> Check the number +ve and negative and zero
//  let taakeNum = parseFloat(prompt("Enter a number"));
//  if (taakeNum > 0) {
//     console.log("positive");
//  }
// else if(taakeNum<0){
//     console.log("negative");
// }
// else{
//     console.log("zero");

// }

// Q2---> check the number even or odd

// let number = parseFloat(prompt("Enter the number"));
// if (number %2===0) {
//     console.log("Even");
// }else{
//     console.log("odd");

// }

// Q3--->Develop a program that takes a numerical grade (e.g., 0-100) and converts it to a letter grade (A, B, C, D, F) using appropriate ranges.

// let marks = parseFloat(prompt("Enter the marks"));
// if (marks >=90 && marks<=100 ) {
//     console.log("A");
// }
// else if(marks>=75 && marks<=89){
//     console.log("B");

// }
// else if(marks>=60 && marks<=74){
// console.log("c");

// }
// else if( marks>=50 && marks <=59){
// console.log("D");

// }
// else if(marks>=40 && marks<=49){
// console.log("E");

// }
// else{
//     console.log("F");

// }

// Q3--->Implement a program that calculates the price of a movie ticket based on age:
// Age below 12: $5
// Age 12-17: $10
// Age 18-59: $20
// Age 60 and above: $15

// let age = prompt("enter the age:");
// let price;
// if (age<12) {
//     price =5;
// }
// else if(age<=17){
//     price =10;
// }
// else if(age<=59){
//     price = 20;
// }else{
//     price= 15;
// }
// console.log(`Ticket price : $${price}`);

// Q4---> Write a program that takes a number (1-7) representing a day of the week and prints the corresponding day name (e.g., 1 for Monday, 7 for Sunday) using a switch statement..

// let dayNumber = parseInt(prompt("Enter the number (1-7):"));

// switch (dayNumber) {
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//         console.log("Wednesday");
//         break;
//     case 5:
//         console.log("Thursday");
//         break;
//     case 6:
//         console.log("Friday55");
//         break;
//     case 7:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Invalid  day Number ");

// }

// LOOP

//    LOOP---> A loop allows you to run the same block of code multiple times as long as a certain condition is true.
//  Loop Type	Kab Use Hota Hai
// for	Jab iterations ka exact count pata ho
// while	Jab condition ke basis pe repeat karna ho
// do...while	Kam se kam ek baar code chalana ho
// for...of	Array ke elements ke liye
// for...in	Object ke properties ke liye

// where to go from ---> where to go reach---> how to go
// for loop best condition k liye

// where to go from --->kab rukna hai ---> how to go ..eg girlfriend mil jaye toh toh rukna while loop
// While loop

// for(start; End; change){

// }

// for(let num = 1; num <=100; num++){
//     console.log(num);

// }

// start
// while(end){
//     //code
//     change
// }

// let i = 1;
// while (i<=32) {
//     console.log(i);
//     i++;
// }

// DO-while loop  ---> ye loop ek baar jarur chalega chahe condition false ku na ho
// let number = 101
// do {
//     console.log(number);
//     number++;
// } while (number<100);

// example for break
// for(let  number =1; number<=100; number++){
//     console.log(number);
//     if( number === 40)
//         break;

// }

// example for continue
// for (let number= 2; number<500; number++){

// if (number === 201) {
//     continue;
// }
// console.log(number);
// }

// Q1.. Print  number from 1 to 100 using for loop

// for(number = 1; number<=100; number++){
//     console.log(number);

// }

// Q2.. print number from 10 to 1 a while loop.

// let n = 10;
// while (n > 0) {
//     console.log(n);
//     n--;
// }

// Q3. print the even number from 1 to 100 using for loop.

// for(let int= 1; int <=100; int++){
//     if(int % 2 === 0){
//         console.log(int);

//     }
// }

// Q4. print odd number from 1 to 1000 using while loop.

// let digit = 1;
// while(digit<=100){
//     if(digit%2 != 0){
//         console.log(digit);

//     }
//       digit++;
// }

// Q5.. Print the multipli cation table of 5 ( i.e., 5 x 1 = 5... 5 x 10 =50;)

// for(let mulno = 1; mulno <= 10; mulno++){
//    console.log(`5*${mulno} = ${5*mulno}`);

// }

// Q6.. print the all number between 1 to 1000 and they divisible 3.

// for(let num = 1 ; num <= 1000; num ++){
//     if(num % 3 === 0)
//     {
//     console.log(num);

//     }
// }

// Q7.. find the sum of number from 1 to 1000 using loop.
//     let addition = 0;
// for (let i= 1; i<= 1000; i++){
//     addition = addition + i;

//  }
//  console.log(addition);

// Q8.. Ask the user for a number  and  print whether each number from 1 t that number is even or odd.

//  let userNumber = prompt("Enter the number") ;
//  for (let num = 1; num<= userNumber; num++){
//     if(num%2 === 0 ){
//         console.log(`${num} is even`);
//     }
//     else{
//         console.log(`${num} is odd`);
//     }
//  }

// Q9..  count the how many numbers between 1 to 1000  are divisible by both 3 and 5.
//    for( let i = 1; i<= 1000; i++){
//     if(i%3===0 && i%5===0){
//         console.log(i);

//     }
//    }

// Q10.. Stop at First Multitple of 7.
// Write a loop 1 to 100 that
// * Print each number
// * stop completely when its find the first number divisible by 7

// for(let i = 1; i <= 100; i++){
//    if(i % 7 === 0){
//    break;

//    }
//    console.log(i);

// }

// Q11.. write a from 1 to 1000 that.
// skip the multiple of 3
// print all other number

// for(let num = 1; num <= 1000; num ++){
//     if(num%3 !== 0){
//     console.log(num);
//     }

// }

// Q12.. print first 5 odd number only in 1 to 100;
//  let count = 0;
// for(let i = 1; i<=100; i++){
//     if(i% 2 ===1){
//         count++;
//         console.log(i);

//     }
//     if(count === 5) break;

// }

// Print the sum of even numbers from 1 to 100
// let sum = 0;
// for(let i=1; i <=100; i++){
//     if(i%2===0){
//     sum += i
//    console.log(sum);

//     }

// }

// FizzBuzz from 1 to 20
// console.log("FizzBuzz from 1 to 20");
// for(let i =1; i <= 20; i++){
//     if (i%3 === 0 && i%5===0) {
//         console.log("fizzbuzz");
//     }
//     else if(i%3 === 0){
//         console.log("fizz");

//     }
//     else if(i%5===0){
//         console.log("Buzz");

//     }
//     else{
//         console.log(i);

//     }
// }

//     🔸 Challenge 1: Factorial of a Number
// 👉 Given let n = 5, print the factorial of n.
// 📌 (Factorial of 5 = 5 × 4 × 3 × 2 × 1 = 120)

//  let n = 5;
//  let factorial= 1;
// for(let i = 1; i<= 5; i++){
//     factorial= factorial*i
// }
// console.log(" FActorial of", n ,"is", factorial);

// ✅ Challenge 2: Count the Multiples of 3 between 1 and 50

// let count = 0 ;
// for ( let i = 1; i<=100; i++){
//     if (i%3===0) {
//         count++;

//     }
// }
// console.log("multiple of 3", count);

//  Reverse a String using for loop
//  let str = "ARSHULLAH";
//  let Rstr = "";
//  for(let i = str.length-1;i >=0; i--){
//     Rstr=Rstr+str[i]
//  }
//  console.log("reversed str" , Rstr);

//  Squares of Numbers from 1 to 10
// let Squares =1;
// for(let i =1; i <=100; i++){
//     Squares = i *i;
//     console.log(i + "^2",+Squares);

// }

//  Find the Largest Number in an Array

// let arr=[12,33,44,55,66,11,13,14,80,101,1,22]
// let max = arr[0];
// for(let i = 1; i<arr.length; i++){
//     if(arr[i]> max){
//         max =arr[i];
//     }
// }
// console.log(max);

//  Find the Sum of All Elements in an Array
// let array =[1,2,3,4,5,6,7,8,9,0];
// let sum = 0;
// for(let i = 0; i<array.length; i++){
//    sum = sum+array[i];

// }
//  console.log("sum of number",sum);

// Create a Multiplication Table from 1 to 10

// for(let i = 1; i<=10; i++){
//  console.log(`5*${i} = ${5*i}`);

// }

// *
// * *
// * * *
// * * * *
// * * * * *

// for(let i =1; i<=5; i++){
//     let row= "" ;  //Empty string for each row

//     for(let j =1; j<=i; j++){
//         row = row +'*'
//     }
//     console.log(row);

// }

// * * * * *
// * * * *
// * * *
// * *
// *

// Que--
//     *
//    * *
//   * * *
//  * * * *
// * * * * *

// let row =5;
// for(let i = 1; i<=row; i++){
//     let pattern ="";

//  // 🔸 Inner Loop 1 – for jagah

//  for(let spaces = 1; spaces<= row - i; spaces++){
//     pattern= pattern+ " ";
//   // 🔸 Inner Loop 2 – for stars
// }
//   for(let star = 1; star <=i ; star++){
//     pattern =pattern+ "* ";

//  }
// console.log(pattern);

// }

// Inverteed triangle

// Outer loop: controls number of rows
//  for(let i = 5; i>=1; i--){
//     let row = "";
//     for(let j = 1; j <= i; j++){
//         row = row  + "*"
//     }
//     console.log(row);

//  }

// 2. Number Triangle

// for (let i =1; i<=5; i++){
//     let Row = "";
//     for(let j = 1; j<=i; j++){
//         Row = Row  + j;
//     }
//     console.log(Row)
// }

// Hollow Triangle
// let rows = 5;

// for(let i=1; i<=rows; i++){
//   let pattern = "";

//   for(let j = 1; j<=i; j++){
//     if(j===1 || j===i || i === rows){
//         pattern = pattern + "*";
//     }else{
//         pattern=pattern+"  ";  // 2 spaces for alignment
//     }
//   }
//   console.log(pattern);

// }

// WHILE LOOP PRACTICE

// Q1
// let i = 0;
// while(i<=10){
//     console.log(i);
//     i++;
// }

// Q2  Print even numbers from 2 to 20
// let i = 1;
// while (i <= 20) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
//     i++;
// }

// Q   Print the sum of numbers from 1 to 100
// let sum =0;
// let i = 1;
// while(i<=100){
//    sum = sum +i
//     i++;
// }
// console.log(sum);

// Q Print reverse numbers from 10 to 1
// let i = 100;
// while(i>=1){
//     console.log(i);
//     i--;
// }

// Q   Table of a number 5x1=5

// let i = 1;
// while (i <= 10)
//  {
//     console.log(`5*${i}=${5 * i}`);
//     i++;
// }

// Q  Count the digits of a given number

// let num = prompt("enter the number");
// let count = 0;
// if(num===0){
//     count= 1;
// }else{
//     while(num>0){
//         num = parseInt(num/10);
//         count++;
//     }
// }
// console.log(count);

// let pnum = prompt("enter the any number");
// let count = 0;
// if(pnum === 0 ){
//     count=1;
// }else{
//     for(;pnum>0; pnum= parseInt(pnum/10)) {
//         count++;
//     }
// }

// console.log(count);

// Q   Reverse a number using while loop

// let num = prompt("enter the number");
// //Create a variable to store the reversed number
// let reversed = 0;
// for (; num > 0; num = parseInt(num / 10)) {
//     let digit = num % 10;
//     reversed = reversed * 10 + digit;
// }
// console.log(reversed);

// let num = prompt("ENter the number")
// let reversed = 0;
// while(num>0){
//     num = parseInt(num/10);
//     let digit= num % 10;
//     reversed = reversed *10+digit;
// }
// console.log(reversed);

// Q   Check Palindrome Number

// let num =prompt("Enter the number for check is palindrome or not");
// // Original number ko save kar liya, kyunki hum num ko loop me divide karte jayenge.
// let orginalNum = num;
// let reversed= 0 ;
// for(; num >0; num = parseInt(num/10)){
//     let digit = num%10;
//     reversed = reversed *10 +digit;
// }
// if(reversed===orginalNum){
//     console.log("yes its a palindrome");

// }else{
//     console.log("its not a palindrome");

// }

// Q  Find the sum of digits of a number
// let num = prompt("Enter the number for calculate the sum")
// let sum = 0;
// for(; num>0; num = parseInt(num/10)){
//     let digit = num % 10;
//     sum = sum  +digit;
// }
// console.log(sum);

// Count how many times a digit appears in a number  .. check 3

// let num = prompt("enter the number for counting check");// yeh input ke liye
// let targetDigit= 3 //yaha konse digit count krni hai
// let count = 0; // yaha ek counter rakhege kitni baar digit mila

// for(;num>0; num = parseInt(num/10)){
//     let digit = num % 10 ;
//     if(digit === targetDigit){
//         count++;
//     }
// }
// console.log(count);

// Find the factorial of a number ..
// let num = 5; // yaha wo number jiska niklna hai
// let fact = 1; // initial factorial ki value 1 se start ho gi
// for(let i = 1; i<=num; i++){
//     fact = fact * i;
// }
// console.log(`faactorial of ${num} is ${fact}`);

// Print Fibonacci series up to n terms

// let n = 10; //How many term we want to print
// let first = 0;
// let second = 1;

// console.log(first);
// console.log(second);

// for(let i = 3; i<=n; i++){
//     let next = first +second;
//     console.log(next);

//     first = second;
//     second = next;
// }

// for(let i =1; i<=10; i++){
//     let row ="";

//     for(let j = 1; j<=i; j++){
//        row = row + "*";
//     }

//     console.log(row);

// }

// let row = 5;
// for(let i = 1; i<=row; i++){
//     let pattern = "";
//     for(let spaces = 1; spaces<= row-i; spaces++){
//         pattern = pattern+ " ";
//     }

//     for(let star = 1; star<=i; star++){
//         pattern = pattern +"8 ";
//     }
//     console.log(pattern);

// }

// Function in Javascript

// function declaration
// function bhai(){

// }

// function expression
// let bhai1 = function(){

// }

// fat arrow function

// let bha2 = ()=>{

// }

// PARAmetr in function

// function friend(e){
//     console.log(`${e} is my friend`);
// }
// friend("Abid bhai");
// friend("Faisal bhai");
// friend("Yakoob bhai");
// friend("Aamir bhai");

// function jodna(num1,num2){ // parameter num1, num2
//     console.log(num1 + num2);

// }
// jodna(2, 3)//argument 2,3,

// rest and spread --> jab argument bhauut sare ho to hame utne hi parameter banane padege,,isse bachne ke liye rest/spread (...) ka use krte hai  and agar wo parameter ke andar lage toh wo rest operator hai.
// function digit(...b){
// console.log(b);

// }
// digit(1,2,3,4,5,6,7,8,9)

// return--> jaha se aye wahi daal duga
// function abcd(){
//     return 12;
// }
// let val =abcd();
// console.log(val);

// first class function ---> isme ham function kko variable me store kra skte hai
// let fnc = function(){
//     //function work like value
// }
// ---------
// function abcd(val){
//    val();
// }

// abcd(function(){
//     console.log("arshullah")

// })

// higher order function--> wo function hota hai ho return kare function ya fir accept kare ek func apne value me

// function abcd(){

// }
// abcd( function(){

// })

// 2
// function abcd(){
//     return function(){
// console.log("aaa");

//     }
// }
// abcd()();

// pure and impure function
// let a = 12;
// function abcd(){
//     console.log("aaa");

// }

// let b=1;
// function bts(){
//     b++;
// }
// bts()

// closure--ek function return kre another function and return hone wala function hamesha use krega pattern function ka koi variable

// function abcd(){
//     let a = 12;
//     return function(){
//         console.log(a);

//     }
// }

// lexical scoping
// function jjj(){
//     let a= 12;
//     function ff(){
//         let b = 13;
//         function nn(){
//             let c= 14;
//         }
//     }
// }

// IFE (immediately invoked function expression )

// (function(){
// console.log(12333);

// })();

// hoisting difference between declaration and expression

// abc()
// function abc(){
//     console.log("heyheyhey");

// }

// // use rest parameter to accept any number of score and return total
// function getScore(...score){
//     let total = 0;
//     score.forEach(function(val){
//         total = total +val;
//     });
//    return total;

// }

// console.log(getScore(12,12,12,131,165,778798,8798));

// use early return
// function checkAge(age){
//     if (age < 18) return "too young";
//     return "allowed";
// }
// console.log(checkAge());

// can you assign a function in variable and then call it ?
// let varr = function(){

// }
// varr()

// passed a function into another function and execute it inside.

// function bbb(val){
// val()
// console.log("sdsad");

// }
// bbb(function(){
// console.log("abababa");

// })

// identify higher order function
// [1,2,3].map(function(x){
//     return x *2;
// })

// identify function pure or not.
// let total = 0;
// function addTotal(num){
// total = total + num;
// }   // it is impure

// what is clousre

// function abcd (){
//     let val =  0;
//     return function(){
//         console.log(val);

//     }
// }

// function outer(){
//     let count = 0;
//     return function (){
//         count ++;
//         console.log(count);

//     }
// }

// const counter = outer();
// counter();
// counter()

// (function arsh(){
// console.log("arshullah");

// })()

// write a BMT calculator
// function bmi(weight , height){
//  return weight /(height*height)  //weight kg me hona chiye hsquare se divide
// }

// console.log(bmi(70, 1.7).toFixed(2));  // point ke baad ke value tofixed ka use hota hai

// ceate a reusable discount claculator (HOF)
// function discountCalculator(discount){
//     return  function(price){
//         return price- price * (discount/100);
//     }
// }

// let  ten  = discountCalculator(10);
// let bees = discountCalculator(20);
// console.log(ten(1200));
// console.log(bees(1200));

// ex2
// function counter(){
//     let count = 0;
//     return function(){
//         count++;
//        return count;

//     }
// }

// let c= counter();
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());

// let d = counter()
// console.log(d());

// ceate a pure function to transform a value
// function cc(v){
// return v * 2;
// }
// console.log(cc(4));

// use iffe to isolate variable

// (function (){
//     const pass = "secret pass"
//     console.log(pass);

// })()

// paractice question

// easy mode

// Q1
// function print(){
//     console.log("hello javascript");

// }
// print()

// Q2
// function identity(name){
//    console.log(name);

// }
// identity("arshullah")
// identity('faisal')
// identity("yakoob gaddi")

// Write a function that adds two numbers and returns the result

// function addition(a,b){
// return a+b;
// }
// console.log(addition(2,2));

// Write a function that checks if a number is even or odd.
// function checkOddEven(num){
// if(num % 2 === 0){
//     console.log(num + "is even");

// }else{
//     console.log(num + "is odd");

// }
// }

// checkOddEven(10)
// checkOddEven(11)

// return method
// 1. Function banaya jo ek number lega
// function ChkEvenOdd(num) {

//     // 2. Check kiya remainder (modulus %) 2 se
//     if (num % 2 === 0) {

//         // 3. Agar remainder 0 → Even return karo
//         return "even";

//         // 4. Agar remainder 0 nahi → Odd return karo
//     } else {
//         return "Odd";
//     }
// }

// // 5. Function call karke result ek variable me store kiya

// // note-->  bina variable me store kraye value pint kra skte hai but agar hamne variable me value store krai to ham uska reuse kr sakte hai.
// let result1 = ChkEvenOdd(4)
// let result2 = ChkEvenOdd(999)

// console.log(result1);
// console.log(result2);

// Write a function that converts Celsius to Fahrenheit.

// function changeFahrenheit(celcius){
//   let fahrenheit = (celcius*9/5) + 32
//   return fahrenheit;
// }

// let fahrenheit1 = changeFahrenheit(25);
// let fahrenheit2 = changeFahrenheit(22);

// console.log(fahrenheit1);
// console.log(fahrenheit2);

// Write a function to find the largest of three numbers.

// 1) Function define karo jo 3 numbers lega
// function largestOfThreeNumber(a,b,c){
//     // 2) Sabse pehle ek variable bana ke maan lo largest = a
//     let largerst =a;
//     //  3) Ab b ko check karo agar b bada hai to largest = b
//     if(b>largerst){
//         largerst = b;
//     }

//     // 4) Phir c ko check karo agar c bada hai to largest = c
//     if(c>largerst){
//         largerst = c;
//     }

//      // 5) Ab final largest return karo
//      return largerst;
// }

//    let checkLarger  =  largestOfThreeNumber(2,1,3)
//    console.log(checkLarger);

//    Write a function to calculate the factorial of a number.

//    function calculateFactorial(factorialNumber){
// // ye code jab kaam krega jab value 0 hogi ya toh negative
// if(!Number.isInteger(factorialNumber) || factorialNumber<0){
//     return "inavlid Input";

// }

//     let currentFactorial = 1;
//         for(let i = 2; i<=factorialNumber; i++){
//              currentFactorial = currentFactorial  * i;
//         }
//         return currentFactorial;
//    }

//    let checkfact = calculateFactorial(-3);
//    console.log(checkfact);

// Write a function that takes a string and returns it reversed.

//  ye question bina array ke solve nhi hoga use kiye array method se solve krege
// function inputString(str){

//      // 1) String ko characters ke array me badlo
//      let ConvertArray = str.split("")

//      // array ko reverse krege
//      ConvertArray.reverse();

//      // phir us array ko dubara string bana do
//      return ConvertArray.join("")
// }

// console.log(inputString("Bhaijaan"));

// Write a function to check if a word is a palindrome (same forward & backward).

// function InputWord(str){
//       // agar input string na ho to string me convert kar lo (safe-guard)

//       if(typeof str !=='string')
//         str  = String(str)

//         // 1) normalize: lowercase + non-alphanumeric characters hata do
//         let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");

//   // 2) reverse the cleaned string
//   let reversed = cleaned.split('').reverse().join('');

//   //3) check kro clened string == hai ki nhi rversed ke
//   return cleaned = reversed;
// }

// let chkPalindrome=InputWord("Myname is arshullah");
// console.log(chkPalindrome);

// check the number is palindrome or not

// function InpputNumber(num) {
//     if(num<0) return false;
//     let orginal = num
//     let reverse = 0;

//     while(num>0){
//         let digit = num %  10 ;
//         reverse = reverse * 10 + digit;
//         num = parseInt(num/10)
//     }

//     return orginal = reverse;
// }

// console.log(InpputNumber());

// Write a function to find the sum of all numbers

// function sumOfNumber(num){
//     let sum = 0;
//     for(let i = 1; i<=num; i++){
//              sum +=i;
//     }
//    return sum;
// }
// let checksum = sumOfNumber(4);
// console.log(checksum);

// sum of digit
// function SumofAllDigit(num){
//     let sum = 0;
//     for(;num>0; num =parseInt(num/10)){
//         let digit = num % 10  //last  digit
//         sum = sum+digit;
//     }
//         return sum;
// }

// console.log(SumofAllDigit(1234));

// Write a function that uses IIFE to run immediately and print a message

// (function(){
//     console.log("Arshullah");

// })();

// print 1 to n prime by use loop
// for(let num =2; num<50; num++){
//     let isPrime = true;
//     for(let i = 2; i <=Math.sqrt(num); i++){

//         if(num%i===0){
//             isPrime=false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(num);

//     }
// }

// check number prime or not
// let num = 20 ;
// let isPrime = true ;
// if(num<2){
//  isPrime = false;
// }else{
//     for(let i = 2; i<num; i++){
//         if(num%i===0){
//             isPrime= false;
//             break;
//         }
//     }
// }

// if(isPrime){
//     console.log(num, "is prime");
// }else{
//     console.log(num,"is not prime");

// }

// Write a function that returns all prime numbers from 1 to N.

// function prime1toN(n){
// let prime = [];

// for(let num = 2; num<=n; num++){
//     let isprime= true;

//     for(let i =2; i<Math.sqrt(num); i++)
//     {
//         if(num % i ===0){
//             isprime = false;
//             break;
//         }
//     }

//     if(isprime){
//         prime.push(num)
//     }
// }

// return prime;
// }

// console.log(prime1toN(100));

//Write a function that takes another function as a parameter and calls.
//  function callme(callback){
//     if(typeof callback !== 'function'){

//        console.log("Error : callback ko function hi pass karo");
//        return;

//       }

//       console.log("callme: kaam shuru");
//       callback();
//       console.log("toh yaha ko kaamhua");

//    }

//    function greet() {
//       console.log("good morning");

//    }

//    callme(greet);

//    callme(()=>{
//       console.log("hello from anonymous call back");

//    })

// Write a function that remembers a value and returns another function that adds to it (closure example)

//outer function
// function abcd(initial){

//    return function (n){
//       return initial+n;
//    };
// }

// let add10 = abcd(10);
// console.log(add10(5));

// Write a recursive function to calculate the Fibonacci series

// function Fibonacci(n){
//    if(n===0)
//       return 0;

//    if(n===1)
//       return 1;

//    //recursive case
//    return Fibonacci(n-1) + Fibonacci(n-2);
// }

// let term = 10;
// for(let i = 0; i<term; i++){
//    console.log(Fibonacci(i));

// }

// Write a function that returns a function to multiply numbers (function factory

// <-------- practice qestion  --------->

// Q1. Write a HOF that takes a function as an argument and calls it.
// function greet(val){
//     console.log("Arshullah"); //main func

// }

// function higerOrder(parameter){
// parameter();  // calling func
// }
// higerOrder(greet);

//Write a HOF that takes two numbers and a function (add, subtract, multiply) and applies the function.
// function add(a,b){
// return a+b;
// }
// function subtract(a,b){
//     return a-b;
// }
// function multi(a,b){
//     return a*b;
// }

// function higherorder(num1 ,num2 , operation){
//   return operation(num1, num2)
// }

// let claculation =higherorder(5,3,add)
// console.log(claculation);

// Write a function counter() that returns a function to increment and return a counter value.
// function counter(){
//     let count = 0;
//     return function(){
//         count++;
//         return count;
//     }
// }

// let mycount = counter();

// Create a closure that remembers your name and prints a greeting

// function naam(name){
//     return function(){
//         console.log(name);

//     }
// }

// let b = naam("arshuhllah")
// b();

//Write a function inside another function and try accessing outer variables.
// function outer(){
//     let OuteRvariable  = "arshullah" ;

//     function inner(){
//         console.log(OuteRvariable);

//     }
//     inner()
// }
// outer()

// <--------------- ARRAY--------->
// n JavaScript, an array is a special kind of object used to store ordered collections of values.
// Arrays are dynamic in size, can hold mixed data types,

//map
// let arr = [22,44,5,6,4,3];

// let newarr = arr.map(function(val){
//      if (val>10) {
//         return val;
//      }
// })
// console.log(newarr);

//filter
//  let arrr = [22,44,5,6,4,3];
// let  newarrr=arrr.filter(function (val){
//     if(val>4){
//         return true;
//     }
//  })
//  console.log(newarrr);

//reduce
// let arr = [1,2,3,4,5,6]

// let ans =arr.reduce(function(accumulator , val){
//     return accumulator + val;
// },0);
//  console.log(ans);

//FIND

// let arr = [1,2,3,4,5,6,7,8,9];
// let value =arr.find(function(val){
//   return val>4;
// })
// console.log(value);

// let arrObject=[
//     {id:1, name:"Arshullah"},
//     {id:2, name:"Yakooob"},
//     {id:3, name:"Faisal"},
//     {id:4, name:"sadab"}
// ]

// let fin = arrObject.find(function(user){
// return user.id === 4;
// })
// console.log(fin);

//SOME -- true false me deta hai value
//  let arrScore=[20,3,30,13,90,55,22,67];
//  let newarr = arrScore.some(function(val){
//     return val>91
//  })
//  console.log(newarr);

// every

//  let arr = [33,4,5,65,7,879,98,9,787];
//  let boss = arr.every(function player(val){
//     return val>67;
//  })
//  console.log(boss);

// destructuring
// let array  = [1,2,3,4,5,6,7,8,9];
// let [b,c,a] = array;
// console.log(a);

// spread

// 1. case ----> copy
// let arr= [2,3,4,5,6,7,8,9];
// let arr1 =[...arr];
// console.log(arr1);

//  2. case ----> merged
// let arrayOne = [2,4,6,8]
// let arrayTwo = [10,12,14,16]
// let merged = [...arrayOne,...arrayTwo]
// console.log(merged);

// 3 case add the elemnt
// let arr= ["arsh","ullah", 'zainab',"Iqra","Sanchi","mariyam"]
// let arr2 =["noori", ...arr,"Akriti", "swati"];
// console.log(arr2);

// case 4  string to array
// let str = 'bhaijaan';
// let arr = [...str];
// console.log(arr);

// <-----------------------practice question ---------------------<

// CREATE AN ARRAY WITH 3 FRUIT AND PRINT THE 2ND FRUIT.
// let fruit = ["apple", "mango","banana"];
// console.log(fruit[1]);

// ADD MANGO AT THE END AND PINEAPPLE AT THE BEGINNING OF THE ARRAY:

// let fruit = ["apple", "PAPAYA","banana"];
// fruit.push("mango");
// fruit.unshift("pineapple")
// console.log(fruit);

// REPLACE BANANA WITH KIWI IN ARRAY ABOVE;
// let fruit = ["apple", "mango","banana"];
// fruit.pop();
// fruit.push("kiwi");
// console.log(fruit);

// what is the deffrenece between .push and unshift()?
// push add the element at the end in array
// unshift add the element at the beginning in array

// remove the last item in array using method.
// let fruit = ["apple", "mango","banana"];
// fruit.pop()
// console.log(fruit);

// insert "red" and "blue " at the index 1 in this aray
// let color = ["yellow", "indigo"];
// color.splice(1,0,"Red","blue")
// console.log(color);

//Extract only the middle 3 elements from this array;

// let friend = ["faisal","yakoob","babu","shaqib","Aamir"];
// let news = friend.slice(1,4);
// console.log(news);

// short this array alphabetically and then reverse it .

// let family = ["Abdul Saleem","Rahmat Ullah","Shamim Rahmat","Arshullah","Arshan Uallah","umar ullah"];
// family.sort().reverse();
// console.log(family);

// use map to square each number
// let num = [10,22,11,13,12];
// let squares = num.map(function square(val){
// return val**2;
// });
// console.log(squares);

//Use filter() to keep number greater than 10;
// let number = [22,23,1,3,45,67,8,9,];
// let greater10 = number.filter(function campareny10(val){
// return val>10
// })
// console.log(greater10);

// use reduce to find the sum of this array
// let arr =[1,2,3,4,5,6,7,10];
// let newarr = arr.reduce((accumulator,value)=>{
//     return accumulator + value
// },0)
// console.log(newarr);

//  use find() and get the first  number less than 10;
// let arr = [22, 33, 55, 6, 78, 9, 2, 3];
// let newarr = arr.find((element, index, fullaray) => {
//     console.log("checking element:", element);
//     console.log("at index:", index);
//     console.log("full array:",fullaray);
//     console.log("<---------------->");

//     return element<10;

// }
// );
// console.log(newarr);

//use some() to check if array any student has scored betlow 35
// let score = [ 44,56,67,88,34,76];
// let newScore = score.some((val)=>{
//     return val<35;
// });

// console.log(newScore);

// use every() to check if all number is even:

// let arr = [2,4,6,7,12,14];
// let even = arr.every((val)=>{
//     return val%2===0;
// })

// console.log(even);

//destructure this array to get firstName and last name

// let arrayName = ["Bhaijaan","Arshullah","Umar","Arshan"];
//  let [a,b,c,d]=arrayName;
//  console.log(a,d);

// Merge two array use spread operator

// let array1 = [1,2,3,4,5,6,7,8]
// let arr2= ['arshullah','bhaijaan','babu']
// let merged =[...array1,...arr2]
// console.log(merged);

// <<<--------- practice set 2------->>>>

// Create an array of 5 fruits and:

// Add one fruit to the end (push)

// Add one fruit to the start (unshift)

// Remove the last fruit (pop)

// Remove the first fruit (shift)

// let fruitset = ["Mango","Banana","litchi","guava","Apple"];
// fruitset.pop();
// fruitset.shift();
// fruitset.push("PineApple");
// fruitset.unshift("Kiwi");
// console.log(fruitset);

// Q2
// Make an array [1, 2, 3, 4, 5] and:

// Use slice to get [2, 3, 4]

// Use splice to remove the middle element.

// let numArray = [1, 2, 3, 4, 5];

// let boby= numArray.slice(1,4)
// console.log(boby);

// numArray.splice(2,1)
// console.log(numArray);

// Q3.  Reverse an array of numbers [1, 2, 3, 4, 5].
// let sorted = [1,2,3,4,5];
// sorted.reverse()
// console.log(sorted);

// Q4.Sort an array of strings alphabetically

// let Str = ["Banana", "Apple", "Mango", "Cherry", "Orange"];
// Str.sort()
// console.log(Str);

// Q%.Use forEach to print each element of an array.

// let array = ["Banana", "Apple", "Mango", "Cherry", "Orange"];
// array.forEach((val)=>{
//     console.log(val);

// })

//Q6. Use map to create a new array where each number is doubled.

// let arrayNum = [12,13,16,35,78,67,65];
// let NewArray= arrayNum.map((val)=>{
//     return val*2;
// })
// console.log(NewArray);

//Q7.Use filter to keep only even numbers from [1,2,3,4,5,6].
// let num = [1,2,3,4,5,6];
// let NewNum = num.filter((val)=>{
//     return  val % 2===0;
// })
// console.log(NewNum);

//Q8.Use find to get the first number greater than 10 from [5, 12, 8, 130].
// let box = [5, 12, 8, 130];
// let newBox = box.find((val)=>{
//     return val>10
// })
// console.log(newBox);

// Q9. Use some to check if any number in [3, 6, 9] is greater than 8.
// let cond = [3, 6, 9];
// let x = cond.some((val)=>{
//     return val>8;
// })
// console.log(x);

//Q10.Use every to check if all numbers in [10, 20, 30] are greater than 5.
// let pack = [10,20,30];
// let v = pack.every((val)=>{
//     return val>5;
// })
// console.log(v);

//2️⃣ Medium Level – Logic Building
//Q1.
//  From [1, 2, 3, 4, 5, 6, 7, 8]:

// Remove the first two numbers using splice

// Reverse the remaining array

// let Arrays = [1, 2, 3, 4, 5, 6, 7, 8];
// Arrays.splice(0,2)
// Arrays.reverse();
// console.log(Arrays);

// Q2. Create an array of students’ ages [18, 21, 17, 19, 22]:

// Filter out minors (age < 18)

// Sort the remaining in descending order.

// let Age = [18, 21, 17, 19, 22];
// let filterAge = Age.filter(val => val >= 18)
// .sort((a,b) => b-a);
// console.log(filterAge);

// Q3.Given an array of names, use map to return the length of each name.
// let names = ["Arsh", "Sara", "Jonathan", "Ali", "Zara"];
// let lengths = names.map((val)=>{
//     return val.length ;
// })
// console.log(lengths);

//Q4.Use reduce to find the sum of [10, 20, 30, 40].
// let num = [10, 20, 30, 40];
// let sum = num.reduce((accumulator,value)=>{
//     return accumulator+value;
// },0);
// console.log(sum);

// Q5.From [1, 4, 9, 16]:

// Use map to get square roots.

// Use some to check if any square root is greater than 3.

// let box = [1,4,9,16];
// let root = box.map(val => Math.sqrt(val))
// .some((boxs)=>{
//     return boxs>3;
// })
// console.log(root);

//Q6..Merge two arrays [1, 2] and [3, 4] using the spread operator

// let arr = [ 1,2];
// let aerr1= [ 3,4];
// let merged = [...arr ,...aerr1];
// console.log(merged);

//Q7, Extract only the name property from an array of objects using destructuring inside map.
// let people = [
//     {name:"Arshullah",Age:21,city:"maudaha"},
//     {name:"Faisal",Age:24,city:"nizamipura"},
//     {name:"Rahmat",Age:55,city:"hussaingnj"},
//     {name:"Aamir",Age:32,city:"Bangha"}
// ];

// let extract = people.map(function(person){
// let {name} = person;
// return name;
// });
// console.log(extract);

// Q8.Find the first word that starts with "C" from ["Apple", "Banana", "Cherry", "Date"].
// let arrays= ["Apple", "Banana", "Cherry", "Date"];
// let newArray = arrays.find((word)=>{
//   return  word[0] ===  "C";
// })
// console.log(newArray);

//Q9. Create a function that accepts an object {name, age} and uses destructuring to log "Name: X, Age: Y".
// function printPerson({name,age}){
// console.log(`Name: ${name}. Age:${age}`);

// }

// let person = {name:"Arsh",age:21}

// printPerson(person)

// Remove the middle element from an array using splice without knowing its index beforehand.
// const arr = [10, 20, 30, 40, 50];
// const Middleelement = Math.floor(arr.length/2);
// arr.splice(Middleelement,1)
// console.log(arr);

// <-------------------------------------------->

// From an array of products:

// [
//   { name: "Laptop", price: 50000 },
//   { name: "Phone", price: 20000 },
//   { name: "Tablet", price: 30000 }
// ]

// Filter only items with price > 25000

// Sort them by price in ascending order

// Map to get only product names.

// let ProductDetail = [
//   { name: "Laptop", price: 50000 },
//   { name: "Phone", price: 20000 },
//   { name: "Tablet", price: 30000 }
// ];

// let extract = ProductDetail.filter(function(p){
//     return p.price> 25000;
// });
// console.log("Step 1 - filter (>25000)",extract);

// let sorted =[...extract].sort((a,b)=>{
//   return a.price - b.price;
// });
// console.log("Step 2 - price in ascending Order",sorted);

// let nameOnly = sorted.map((p)=>{
//   return  p.name;
// });
// console.log("Step 3 - Nmae only ", nameOnly);

// Q2.Given [1, 2, 3, 4, 5]:

// Use reduce to return an object { sum: X, average: Y }.

// let numArr = [1, 2, 3, 4, 5];

// let Sum = numArr.reduce((acc, val,idx)=>{
//      let newAcc  = acc + val;
//         console.log(
//     `Iter ${idx + 1}: acc(before)=${acc}, val=${val} -> acc(after)=${newAcc}`
//   );
// return newAcc
// },0)

// console.log(Sum);

// let average = Sum/ numArr.length;
// console.log(average);

// const result = {Sum,average};
// console.log(result);

//Q3. Check if all students passed:

// [
//   { name: "Ali", marks: 45 },
//   { name: "Sara", marks: 55 },
//   { name: "John", marks: 32 }
// ]

// Pass mark is 33 — use every.

// let personDetail = [
//   { name: "Ali", marks: 45 },
//   { name: "Sara", marks: 55 },
//   { name: "John", marks: 32 }
// ]
// let Passed = personDetail.every(function(student,idx){
//    return student.marks>=33;
// })
// console.log(Passed);

// Q4. Reverse the words in a sentence "I love JavaScript" without reversing the letters.

// let Quote = "I love JavaScript"
// //  Step 1: Split into words

// let Revrsed = Quote.split(" ").reverse().join()
// console.log(Revrsed);

// Q5. Given two arrays [1, 2, 3] and [3, 4, 5], find unique elements using filter + includes.

// let Array1 = [1,2,3];
// let Array2 = [3,4,5];

// Step 1 - Array1 me har wo element nikalo jo bhi Array2 me nahi hai.
// let OnlyInArray1 = Array1.filter(function(num){
//     return !Array2.includes(num)
// });
// console.log(OnlyInArray1);

// let OnlyInArray2 = Array2.filter(function(num){
//     return !Array1.includes(num)
// }); console.log(OnlyInArray2);

// let merged = [...OnlyInArray1,...OnlyInArray2];
// console.log(merged);

//Q6..  Deep destructuring:

// const user = {
//   id: 1,
//   profile: { name: "Arsh", contact: { email: "a@test.com", phone: "1234" } }
// };

// Extract name and email using destructuring.

//let user = {
//     id: 1,
//     profile: {
//         name: "Arsh"
//         , contact: {
//             email: "ullaharshullah@gmail.com",
//             phone: "9451414220"
//         }
//     }
// };

// Step 2: Deep destructuring ka use karte hain
// Yaha pe direct andar ke objects ko destructure karenge

// let {
//     profile: {      //Profile ke andar jao
// name,           // name ko destructure kia
// contact:{       //Object ke andar jao
// email //     // Email ko destructure kia
//         }
//     }
// } = user;

// console.log(name,email);

// Group numbers into even & odd using reduce:

// [1, 2, 3, 4, 5]
// Output: { even: [2, 4], odd: [1, 3, 5] }

// function groupEvenOdd(arr){
//     return arr.reduce(function(acc,num){
//         if(num%2===0){
//             acc.even.push(num);
//         }else{
//             acc.odd.push(num)
//         }
//         return acc;
//     },{even:[],odd:[]});
// }

// console.log(groupEvenOdd([1,2,3,4,5])
// );

// Q8..  From an array of words, find the longest word using reduce.

// let words = ["Apple", "Banana", "Pineapple", "Mango", "Strawberry", "Kiwi"];

// let long = words.reduce((Accum, current)=>{
//     if (Accum.length > current.length){
//         return Accum;
//     }else{
//         return current;
//     }
// }, "")
// console.log(long);

// Implement your own version of map() function using forEach

// function definiation
//  function myMap(arr,callback,thisArg){
//     // type check kro call back
//     if(typeof callback !== 'function'){
//         throw new TypeError(callback+"is not a function");

//     }

//     // resultarray to collect mapped value
//     let result= [];
//     // iterate using forEach
//     arr.forEach(function(cureentValue,index,array){
//         let  mappedvalue = callback.call(thisArg,cureentValue,index,array)

//         result.push(mappedvalue)
//     });
//     return result;
//  }

//  let nums = [1,2,3];
//  let doubled = myMap(nums, (x) => {
//    return x*2;
//  });
//  console.log(doubled);

// Q10. Combine filter, map, and reduce to:

// Take [1, 2, 3, 4, 5, 6]

// Keep only even numbers

// Double them

// Sum the result.

// let arr = [1, 2, 3, 4, 5, 6]
//   .filter((num) => num % 2 === 0)
//   .map((num) => num * 2)
//   .reduce((acc, val) => acc + val, 0);
// console.log(arr);

// <--------------OBJECTS------------------>
// Object is a non-primitive data type in JavaScript that stores data in the form of key-value pairs.
// Key (also called property name) → always string or symbol type hota hai.
// Value → kuch bhi ho sakta hai (string, number, boolean, array, object, function, etc.).

//  BASIC understanding in object
//  let obj ={
//   name:"Arsh",
//   age:21,
//   favoriteFood:"Biryani",

//  };

//  let aa = "name";
//  obj[aa]

// deep object

// const user = {
//   name: "Arsh",
//   address: {
//     city: "Lucknow",
//     pin: 226002,
//     location: {
//       latitude: 23.2,
//       longitude: 77,
//     },
//   },
// };

// user.address.location.longitude

//OR

// let { latitude, longitude } = user.address.location;

// <-----------For...in-------->
// let obj = {
//   name:"Arshullah",
//   age:21,
//   eamil:"ullharshullah@gmail.com"
// };

// for(let key in obj ){
// console.log(key);   //yaha sirkey dekhaye dege o/p me means name , age ,email

// Agar hame key ke sath sath value bhi dekhne hai tab obj ke sath square bracket lagate hai
// console.log(key,":" ,  obj[key]);

// }

// <-------------Objects.keys------------>
// jabhb hame array return krwana ho keys k tab tab ham Object.keys() use krege
// let person = {
//   name: "Arshullah",
//   age: 21,
//   eamil: "ullharshullah@gmail.com",
// };

// console.log(Object.keys(person));

// <----------Object.entries------->

// let Personal = {
//   name: "Arshullah",
//   age: 21,
//   eamil: "ullharshullah@gmail.com",
// };

// console.log(Object.entries(Personal));

//<-----------------ObjectCopying:Spread, Object.assign, deep clone  ---------->

// let Obj1 = {
//   name: "Arshullah",
//   age: 21,
//   eamil: "ullharshullah@gmail.com",
//};
//let obj2={...Obj1}    // Spread operator
// let obj3 = Object.assign({},Obj1);
// console.log(obj3);

//   FOR nested object : Copying method  Deep Clone
//  it make deep copy obj include nested obj and you can change clone did not effect in original obj

// let obj1 = {
//   name: "Arshullah",
//   age: 21,
//   eamil: "ullharshullah@gmail.com",
//   address:{
//     city:"Lucknow",
//   },
// };

// let obj2 = JSON.parse(JSON.stringify(obj1));

// obj2.address.city = "maudaha";
// console.log(obj2);
// console.log(obj1);

// <------------------Optional chaining------------>

// let obj1 = {
//   name: "Arshullah",
//   age: 21,
//   eamil: "ullharshullah@gmail.com",
//   address: {
//     city: "Lucknow",
//   },
// };

// console.log(obj1.address.city);
// console.log(obj1?.address?.district);

// <-------------------Computed Properties-------------->

// let role = "Admin";

// let obj1 = {
//   name: "Arshullah",
//   age: 21,
//   eamil: "ullharshullah@gmail.com",
//   address: {
//     city: "Lucknow",
//   },
//   [role]:" ARshullah Bhaijaan"
// };
// console.log(obj1);

//<-----------------Practice Question--------------->

// Q1. Create an object for a student with name ,age and isEnrolled.

// let studentDetail = {
//     name:"Arsh",
//     Age:21,
//     isEnrolled: true
// }

// Q2. Can an object key be a number or boolean.
//   yes  it is possible

// let news ={
//     true:"Arshullah",
//     21:"boss"
// }
// console.log(news[21]);

// Q3.Access the value of "first-name"from this object.

// let user ={
//     "First-name":"Arsh",
// };
// console.log(user["First-name"]);

// Q4. Give a dynamic key let key ="age", how will you access user[key]?/

// let key = "age";

// const user ={
//     age : "26"
// }
// console.log(user[key]);

// Q5. From the object below , pint the latitude:
// let locations = {
//   city: "Lucknow",
//   coordinates: {
//     lat: 23.2,
//     lng: 77.4,
//   }
// };
// console.log(locations.coordinates.lat);

// Q6. Desturcture the city and lat from the location object above.

// let locations = {
//   city: "Lucknow",
//   coordinates: {
//     lat: 23.2,
//     lng: 77.4,
//   },
// };

// let { city } = location;
// let { lat } = locations.coordinates;

// console.log(locations);

// Q7. Desturcture the key "First-name"as a variable called firstName.

// const user = {
//     "first-nmae":"Arsh",

// };

// let {"first-name": firstName} = user;

// Q8. user for..in loop to log all key in object this object:
// const course ={
//     title:"javaScript",
//     duration:"4 week"
// };

// for(let key in course){
//     console.log(key);

// }

// Q9. Use Object.entries() to print all key-value pairs as:

// let locations = {
//   city: "Lucknow",
//   Local:"Hussainganj",
//   };

// Object.entries(locations).forEach((val)=>{
//     console.log(val[0]+ ":"+val[1] );

// })

// Q10. copy this object using sprit Operator

// let nums ={a:1,b:2}
// let copy ={...nums}

// Q11. what is  problem with this.

// const obj1 = {
//     info:{
//         score:80
//     }
// }

// const clone = {...obj1}
// clone.info.score= 100;
// console.log(obj1.info.score);

// Q12. deep clone the obj1 safely

// const obj1 = {
//   info: {
//     score: 80,
//   },
// };

// let nemu = JSON.parse(JSON.stringify(obj1))
// nemu.info.score = 100;
// console.log(nemu);
// console.log(obj1);

// Q13. rewrite the safely using optional chaning :

// const person ={}
// console.log(person?.profile?.name);

// Q14. use the variable dynamic assign the properties:

// const dynamicRole = "Role";
// let obje ={
// name:"Arsh",
// [dynamicRole]:"Admin",
// }

// console.log(obje);

// <----------------New Object Question-------------->
// Q15.Create an object representing a student with properties: name, age, and grade. Print the object.

// const student ={
//     name:"Arshullah",
//     age:21,
//     grade:"A"
// }
// console.log(student);

// Q16. Access object properties using dot notation and bracket notation.
// const student = {
//   name: "Arshullah",
//   age: 21,
//   grade: "A",
//   locations:"Maudaha"
// };

// console.log(student.name, student.age);
// console.log(student["locations"], student["grade"]);

// Q17. Add a new property to an existing object and delete a property.
// let student = {
//   name: "Arshullah",
//   age: 21,
//   grade: "A",
//   locations: "Maudaha",
// };

// student.School = "V.M.H.S Rahmaniya Inter college";
// student["quality"]= "Quick Learner"

// delete student.grade;
// Agar multiple properties add krno ho to Object.assign ka use krte hai.
// console.log(student);

// Q18.Create a nested object (object inside another object) and access inner values.
// let student = {
//   name: "Arshullah",
//   age: 21,
//   grade: "A",
//   locations: "Maudaha",
//   family: {
//     father: "Rahmat Ullah",
//     mother: "Shamim Bano",

//     brother: {
//       younger1: "Arshan",
//       Younger2: "Umar ullah",
//     },
//   },
// };

// console.log(student["family"]["brother"]["Younger2"]);

// 2nd method
// console.log(student.family.brother.Younger2);

// Q19. Write a function that takes an object and prints all its keys and values using a loop.

// 1) Function banaya jise hamne parameter Object diya hai.
// let printObject = (studentObject) => {
//   //2) Type check kia obj valid hai hi
//   if (studentObject === null || typeof studentObject !== "object") {
//     console.log("savdhan");
//     return;
//   }
//   // 3)loop logao all keys ke liye
//   for (let key in studentObject) {
//     if (Object.prototype.hasOwnProperty.call(studentObject, key)) {
//       let value = studentObject[key];
//       console.log(`key: ${key}, value: ${value}`);
//     }
//   }
// };
// Example chk
// const student = {
//   name: "Arshullah",
//   age: 21,
//   grade: "A",
//   locations: "Maudaha",
// };

// printObject(student)

//Q20.Merge two objects using the spread operator and Object.assign().

// let obj1 = {
//   name: "Arshullah",
//   age: 21,
//   city: "Maudaha",
// };

// let obj2 = {
//   grade: "A",
//   course: "B.Tech",
//   college: "Azad Institute",
// };

// let obj3 = {...obj1,...obj2}

// let obj4 = Object.assign({},obj1,obj2)
// console.log(obj4);
// console.log(obj3);

// Q21.Explain the difference between shallow copy and deep copy of objects with an example.

// let student = {
//   name: "Arshullah",
//   age: 21,
//   address: {
//     city: "Maudaha",
//     state: "UP",
//   },
// };

// let shallowCopy = {...student};
// shallowCopy.name = "umar";
// shallowCopy.address.city="lucknow"
// console.log(student.address.city);
// console.log(student.name);

//  Deep copy

// let deepCopy = JSON.parse(JSON.stringify(student))

// deepCopy.address.city = "Lucknow";
// console.log(student.address.city);

// Q22. Create a nested object and access inner properties safely using optional chaining.

// let details = {
//   name: "Arshullah",
//   age: 21,
//   gender: "male",
//   address: {
//     state: "UttarPradesh",
//     locatlity: {
//       district: "Hamirpur",
//       town: "maudaha",
//       mohallah: "hussainganj",
//     },
//   },
// };

// let mohallahName = details.address?.locatlity?.mohallah
// if (mohallahName) {
//     console.log("Mohalla found :", mohallahName);
    
// } else{
//     console.log("mohallah is  not available");
    
// }


// Q23.Use computed properties to dynamically create keys in an object.


// let keyName1 = "name";
// let keyName2 = "Age";
// let keyName3 = "course";
// let keyName4 = "Email";

// let studentDetail={
//     [keyName1] : "Arshullah",
//     [keyName2] : "21",
//     [keyName3] : "Btech",
//     [keyName4] : "ullaharshullah@gmail.com"
// }
// console.log(studentDetail);


// Q24. Clone an object deeply using the JSON method.

// let details = {
//   name: "Arshullah",
//   age: 21,
//   gender: "male",
//   address: {
//     state: "UttarPradesh",
//     locatlity: {
//       district: "Hamirpur",
//       town: "maudaha",
//       mohallah: "hussainganj",
//     },
//   },
// };

// let clone = JSON.parse(JSON.stringify(details));

//  clone.name=  "Arshanullah";
//  details.gender = "custom";
//  console.log(clone);
//  console.log(details);
 
//  Q25. this use

// let human  = {
//     name : "Arshullah",
//     age:21,
//     greet : function(){
//         console.log("my name :" + human.name+ " and my age:"+ human.age);
        
//     }
// };

// human.greet()


// <------------------------------------------OR---------------------------------------->
// For understnding
// let human = {
//   name: "Arshullah",
//   age: 21,
//   greet: function () {
//     console.log("my name :" + this.name + " and my age:" + this.age);
//   },
// };

// let another = human; // another bhi same object ko point kar raha hai
// human = null; // ab human variable null ho gaya

// another.greet(); 



//Output:  my name :Arshullah and my age:21



// <-----------------------------or------------------------->
// let human = {
//   name: "Arshullah",
//   age: 21,
//   greet: function () {
//     console.log("my name :" + human.name + " and my age:" + human.age);
//   },
// };

// let another = human;
// human = null;

// another.greet(); 


// output: TypeError: Cannot read properties of null (reading 'name')


//Q26. Check if a property exists in an object using in operator..

// let obj = {
//     check:"yes",
//     net:"no",
//     good:"better"
// }
// console.log("print" in obj);
// console.log("check" in obj);



// Q27.get all ket uses object.key()
// let obj2 = {
//   grade: "A",
//   course: "B.Tech",
//   college: "Azad Institute",
// };
// let all = Object.keys(obj2);
// console.log(all);

// Q29.get all ket uses object.value
// let obj2 = {
//   grade: "A",
//   course: "B.Tech",
//   college: "Azad Institute",
// };
// let all = Object.values(obj2);
// console.log(all);


// Q30.get all ket uses object.enteries
let obj2 = {
  grade: "A",
  course: "B.Tech",
  college: "Azad Institute",
};
let all = Object.entries(obj2);
console.log(all);
