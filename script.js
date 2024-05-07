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

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!!`;
console.log(jonasNew);

console.log("String with \n\
multiple \n\
lines"); // This is the old way of changing lines

console.log(`String
with
multiple
lines`); // This is the modern way of changing lines with `. It's above Tab!



const age = 15;

if (age >= 18) {
    console.log("He/She can start driving 🚗") // press 🪟(windowskey) & . to add an emoji!
} else {
    const yearsLeft = 18 - age;
    console.log(`He/She is too young wait another ${18 - age} years`)
};

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
    let century = 20;
} else {
    let century = 21;
}

console.log(`You were born on the ${century}st century`);

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`)
}


// type conversions
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coersions!

console.log('I am ' + 23 + ' years old');
console.log('1' + 2 - "3"); // when you use the - symbol the calculations work normally, but when you use the + symbol the concatinate so in this case the result will be 9 because '1' + 2 = 12 => 12 - 3 = 9 !! LOOOOOL!!!
console.log("23" * 2); // everything works normally!


// The false values => 0, "", undefined, null, NaN look below for more!

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Anastasios"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {  // if the number 0 so the condition is false! So you get the else statement
    console.log("Don't spend it all");
} else {
    console.log("You should get a job!");
}

let height;


const age = "18";
if (age === 18) console.log("You just became an adult! - STRICT :D"); //HAS TO BE THE SAME VARIABLE IN ORDER TO GET YOU TRUE RESULT IN THIS CASE IT THINKS IT IS A FLOAT BUT IT IS A STRING
if (age == 18) console.log("You just became an adult! - LOOSE :D");

const favourite = prompt("What's you favourite number?")

console.log(favourite);
console.log(typeof favourite);

if (favourite == 23) {
    console.log('Cool! You must really like Michael Jordan!');
} else if (favourite === 3) {
    console.log("You must really like Dwayne Wade!");
} else if (favourite === 7) {
    console.log("You must really like New York Carmello Anthony!");
} else {
    console.log("Will get back to it soon!")
}

if (favourite !== 23) console.log("How come it not be 23 though?! LLOOOOLL!")


const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision); // AND
console.log(hasDriversLicense || hasGoodVision); // OR
console.log(!hasDriversLicense); // REVERSE

if (hasDriversLicense && hasGoodVision) {
    console.log("Able to Drive!");
} else {
    console.log("Isn't able to drive!");
}


const isTired = true;

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!!");
} else {
    console.log("Someone else should drive!!!")
}


const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins Win!");
} else if (scoreDolphins < scoreKoalas) {
    console.log("Koalas win!");
} else {
    console.log("It's a draw!");
}


// BONUS 1 + 2
const scoreDolphins = (97 + 112 + 81) / 3;
const scoreKoalas = (109 + 95 + 86) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins > 99) {
    console.log("Dolphins Win!");
} else if (scoreDolphins < scoreKoalas && scoreKoalas > 99) {
    console.log("Koalas win!");
} else if (scoreDolphins === scoreKoalas && scoreDolphins > 99 && scoreKoalas > 99) {
    console.log("It's a draw!")
} else {
    console.log("No one wins the trophy 🥲");
}


const day = 'monday';

switch (day) {
    case 'monday':
        console.log('Plan course structure!');
        console.log("Go to coding meetup!");
        break;
    case 'tuesday':
        console.log("Prepare theory videos!");
        break;
    case "wednesday":
    case "thursday":
        console.log("Write code examples!");
        break;
    case "friday":
        console.log("record videos");
        break;
    case "saturday":
    case "sunday":
        console.log("Enjoy the weekend");
        break;
    default:
        console.log("Invalid input!");
}



const age = 23;
age >= 18 ? console.log("I wanτ to get wasted!🍷") : console.log("Just water! 💦");



const age = 15;
age >= 18 ? console.log("I like to drink wine! 🍷") : console.log("I like to drink soda! 🥤"); //this is not used that much!

const drink = age >= 18 ? "wine" : "soda";
console.log(drink); // this as you can understand can be much faster. then make a console.log with ` ` and use the {} to present the answer!

let drink2;  // this is the worst possible way to do this. old school OR noobie approach. DONT USE!
if (age >= 18) {
    drink2 = "wine";
} else {
    drink2 = "soda";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine!" : "soda!"}`); // this is the Optimal way of writing the code ! in 1 line please!!
*/

// <<<!!!---!!!---!!!---!!!>>> CODING CHALLENGE #4

const bill = 49;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${bill + tip} 🍻🙏`);
