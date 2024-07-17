/* let user = 'Davide';
let age = 37;
let city = 'Palermo';

let message = `Ciao! Mi chiamo ${user}, sono nato a ${city} e ho ${age} anni.`;

alert(message); */

/* let access = false;

if (access) {alert(`Welcome!`)} 
else {console.log(`I'm sorry, you don't have access!`);}

let age = 17;

if (age >= 18) {alert(`Benvenuto sul nostro sito!`)}
else {alert(`Mi dispiace, non puoi accedere al sito.`)}
*/

/* let user = undefined;

if(user) {
    console.log(`This value is true!`)
} else {
    console.log(`This value is false!`)
} */

/* function welcome(user) {
    alert(`Welcome to my website ${user}!`);
}

function signUp() {
    let user = prompt(`What's your name?`);
    welcome(user);
}

signUp(); */

/* function max(nr1, nr2) {
    if(nr1 > nr2) {
        console.log(`Il numero maggiore tra ${nr1} e ${nr2} è ${nr1}.`);
    } else if (nr1 == nr2) {
        console.log(`${nr1} e ${nr2} hanno lo stesso valore.`);
    } else {
        console.log(`Il numero maggiore tra ${nr1} e ${nr2} è ${nr2}.`);
    }
}

let calc = max(-2, -1);
console.log(calc); */

/* let user = {
    name: 'Davide',
    age: 37,
    married: false,
    job: 'developer',
    saluto: (user) => {console.log(`Benvenut* ${user}!`)}
}

user.saluto(prompt('Ciao, come ti chiami?'));*/

/* function saluto(text) {
    console.log(`Benvenuto ${text}!`);
}

saluto(prompt('Insert random string here'));
console.log(`code here`);
console.log(`code bla bla`);
saluto('Davide'); */

/* function somma1(x, y) {return x + y;}

let s1 = somma1(2, 2);

console.log(`Somma1 è uguale a ${s1}.`);

let somma2 = somma1(s1, 6);

console.log(`Somma2 (somma totale) è uguale a ${somma2}.`);
*/

/*function saluto(name) {
    return 'Ciao ' + name + '!';
}

let ret = saluto('Filippo');

console.log(ret); */

/*let nome = 'Davide';    // let age = 37;
console.log('My name is ' + nome + ' and I am ' + age + '.'); */

/* let happy = true; let fun = true;
console.log(!happy && fun); */

/* let a = undefined;    let b = null;
console.log(typeof a, typeof b); */

/* let a = false;    let b = true;
console.log(a == b); */

/* let myName = 'Davide';

function printName() {
    console.log(myName);
}

printName(); */

/* function sum(a, b, c) {
    console.log(a + b - c);
}
sum(1, 2, 3); */

/* function printName(a, b) {
    console.log(a);
    console.log(b);
}
printName('Davide', 'John'); */

/* function sum(a, b) {
    return a + b
}

let sum1 = sum(10, 2);
let sum2 = sum(sum1, 5);

console.log(sum2); */

/* function sayHi(a) {
    return 'Hello ' + a + '!'
}

let message = sayHi('Davide');

console.log(message); */

/* function printVar(a) {
    console.log(a);
}

function func(callprintVar) {
    callprintVar('Ciao!')
}

func(printVar); */

/* function printName(a, callback) {
    callback('Hello ' + a);
}

printName('Davide', function(a) {
    console.log(a);
}); */

/* function sum(a, b) {
    return a + b;
}

console.log(sum(5, 8));


let sumArrow = (a, b) => {
    return a + b;
}

console.log(sumArrow(10, 5));

console.log(sum)
console.log(sumArrow) */

/* function printName(a) {
    console.log(a);
}

let printArrow = (a) => {
    console.log(a);
}

printArrow(1); */

/* function printHi(a) {
    return "Hi " + a;
}

let hiAr = a => "Hello " + a + '!';

console.log(hiAr('Bob'));*/

/* function func(a, callback) {
    callback(a)
}

func(10, (a) => console.log(a)); */

/* function myName() {
    console.log('Davide');
}

myName();
*/

/* let colours = function () {
    console.log('red')
    console.log('green')
    console.log('blue')
}

let myColours = colours;

myColours(); */

/* document.getElementById('test').innerHTML = "I have been changed with js!"; */

/**
 * 
 * @param {number} num1 the first number
 * @param {number} num2 the second number
 */

/*
function greatest(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is greater than ${num2}.`);
    } else if (num1 === num2) {
        console.log(`${num1} is equal to ${num2}.`);
    } else {
        console.log(`${num2} is greater than ${num1}.`);
    }
}

greatest(10.00000001, 10.0000001); */

/*alert('JS is cool!');
console.log(prompt('What country are you from?', 'Country name:'));
console.log(confirm('Continue to learn JS?'));
console.log('I am learning JS ;)');*/

/* let favFood = 'Pizza';
let favColor = 'Red';
let favDrink = 'Lemonade';

console.log(favFood);

favFood = 'Pasta';

console.log(favFood);

let myBirthday = '11-06-1987'; */

/* let myList = ['Davide', 37, 'Palermo', false, 'developer'];

console.log(typeof myList[3]);*/

/*let favDrinks = 'Coca-Cola';
let favNum = '29';

let myFavs = function () {
    console.log(favDrinks, favNum);
};

myFavs();

let person = {
    name: 'John',
    age: 30,
}

console.log(person); */

/* let num1 = 10;
let num2 = 20;

console.log(num1 + num2);
console.log(num1 % num2);

let total = 10;
total++;
console.log(total); */

/* let x = 30;
x += 10;
x /= 2;
x *= 3;
x -= 5;
x %= 5;
console.log(x);

let xp = 250;
xp *= 2;
console.log(xp); */

/* let num = 1e3;
console.log(num);
console.log(typeof num);

let num2 = 2.345;
console.log(num2);
console.log(typeof num2); */

/* let PI = 3.14159;

console.log(PI.toFixed(3));

let num2 = PI.toPrecision(3);

console.log(num2);

let lightSpeed = 186000;

console.log(lightSpeed.toExponential());*/

/* let s = 'single';
let d = "double";
let b = `backtick`;

let speech = "Martin Luther King said: \"I have a dream\".";

let tip = "We can escape quotes by using \\.";

console.log(speech, tip); */

/* let learn = "I am learning ";
let language = "CSS";

let result = learn + language;

console.log(result);
console.log(result.concat()); */

/* let firstName = 'Davide';
let course = 'JavaScript';
let channel = 'Dev Dreamer';
let mood = "awesome";

let oldInfo = firstName + " is learning " + course + "\n" + "with " + channel + ".";
console.log(oldInfo);


let info = `${firstName} is learning ${course} 
with ${channel} and it's ${mood}!`;
console.log(info); */

/* let x = 'I am watching Dev Dreamer';
console.log(x.toUpperCase());

console.log(x.slice(14, 25)); */

/* let num1 = Math.random().toFixed(1) * 10;
console.log(num1);

let num2 = Math.random().toFixed(1) * 10;
console.log(num2);

let num3 = Math.random().toFixed(1) * 10;
console.log(num3);

let max = Math.max(num1, num2, num3);
console.log(max); */

/* let a = 10;
let b = 15;

console.log( a > b);

console.log( a == '10');

console.log( a === '10');

let x = '5';
let y = 6;

console.log( x !== y ); */

/* let course;    console.log( course ?? 'Please select a course'); */

/* let user = 'employee';

if (user === 'guest') {
    console.log('Login Denied');
} else if (user === 'employee') {
    console.log('Succesful logged in');
} */


/*let myName = 'David';

let myNameLength = myName.length;

if (myNameLength > 5) {
    console.log(`${myName} has more than 5 letters.`);
} else if (myNameLength === 5) {
    console.log(`${myName} has exactly 5 letters.`);
} else {
    console.log(`${myName} has less than 5 letters.`);
}*/

/* let favFood = 'pizza';

switch(favFood) {
    case 'pasta':
        console.log(`I'm sorry, my favorite food is not pasta, my favorite food is ${favFood}!`);
        break;
    case 'bread':
        console.log(`I'm sorry, my favorite food is not bread, my favorite food is ${favFood}!`);
        break;
    case 'pizza':
        console.log(`You are right: my favorite food is ${favFood}!`);
        break;
    default:
        console.log(`I'm sorry, my favorite food is ${favFood}!`);
} */

/* let body = document.querySelector('body');

let choice = 'light';


choice === 'dark' ? body.classList.add('dark-mode') : null;

choice === 'light' ? body.classList.add('light-mode') : null; */


/* let message = (10 > 10) ? `Condition is true` : `Condition is false`;

console.log(message);

let time = '12:01';

let greeting = time < '12:00' ? 'Good morning' : 'Good evening';

console.log(greeting) */























