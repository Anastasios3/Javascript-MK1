/*

let js = 'amazing';
console.log(18 + 88 + 188);
console.log('Anastasios');
console.log('29');

let firstName = "Georgia";
let firstNamePersonOne = "George";
let firstNamePersonTwo = "Stavros";

console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);

let myFirstJob = 'bartender';
let myCurrentJob = 'software engineer';

console.log(myCurrentJob);

let country = "Greece";
let continent = "Europe";
let population = 11000000;

console.log(country);
console.log(continent);
console.log(population);



let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Anastasios"); // don't forget the brackets

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1994;
console.log(typeof year);

console.log(typeof null);


let isIsland = true;
let language;
let population = 11000000;
let country = "Greece";

console.log(typeof isIsland);
console.log(typeof language);
console.log(typeof population);
console.log(typeof country);



let age = 30;
age = 31;

const birthYear = 1994;
// birthYear = 1990;

const language = "Greek";

console.log(language);


const now = 2024;
const ageAnastasios = now - 1994;
const ageGeorgia = now - 1994
console.log(ageAnastasios, ageGeorgia);

console.log(ageAnastasios * 2, ageGeorgia / 2, 2 ** 3)
// Double asterisc ** is 2 to the power of 3 (2^3)

const firstName = "Anastasios";
const lastName = "Tatarakis - Larentzos";
console.log(firstName + " " + lastName);

//Assignment Operators
let x = 10 + 5;
x += 10; // x = x + 10 !!
x *= 10; // cant you imagine what it is?
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

//Comparison operators
console.log(ageAnastasios > ageGeorgia);
console.log(ageGeorgia >= 18);

const isFullAge = ageGeorgia >= 18;

console.log(now - 1991 > now - 2018);


const now = 2024;
const ageAnastasios = now - 1994;
const ageGeorgia = now - 1994
console.log(ageAnastasios, ageGeorgia);

console.log(now - 1991 > now - 2018);

const averageAgeFalse = ageAnastasios + ageGeorgia / 2
console.log(ageAnastasios, ageGeorgia, averageAgeFalse);

const averageAgeCorrect = (ageAnastasios + ageGeorgia) / 2
console.log(ageAnastasios, ageGeorgia, averageAgeCorrect);


// Coding Challenge #1 - JavaScript Fundamentals – Part 1

let massMark = 78;
const heightMark = 1.69;
let massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMIMark > BMIJohn;


console.log(BMIJohn, BMIMark, markHigherBMI);
*/

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!!`;
console.log(jonasNew);