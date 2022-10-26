//Q1 greet arrow function that accepts a name as argument
let greet = (name) => "Hey " + name +"!";
console.log(greet("Marta"));


//Q2 arrow function to check if num is even
let isEven = (num) => (num%2 === 0);
console.log(isEven(4));
console.log(isEven(5));

//Q3 counter function in arrow function synstax
let counterFunct = (counter) => {
    if (counter> 100) {
        counter = 0;
    }
    else {
        counter++;
    }
    return counter;
    };

console.log(counterFunct(54));

//Q4 Name age arrow function
let nameAge = (name, age) => {console.log("Hello " + name); console.log("You are " + age + " years old");};
nameAge("Marta", 32);

//Q5 Print only arrow function
let printOnly = ()=> console.log("printing");
printOnly();

//Q6 Sum arrow function
let sum = (num1, num2) => num1 + num2;
console.log(sum(3,4));




