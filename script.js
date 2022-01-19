//VERY EASY: Write a function named min that takes two arguments and returns their minimum.//
///VERY EASY///

function min( firstNum, secondNum ) {
	if ( firstNum < secondNum )
      return firstNum;
    else
      return secondNum;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

///VERY EASY///



//EASY: Create an array of students holding their last name, first name, and age with 3 students. To validate, please log a greeting with the first name, last name and age of the 2nd student. The output should look like "Hello, my name is John Doe and I'm 19 years old."//

////EASY/////

let lastName  = ["Mulia", "James", "Davis"];
let firstName = ["Seth", "Lebron", "Anthony"];
let age = [21, 37, 28];


console.log(`Hello, my name is ${firstName[1]} ${lastName[1]} and I'm ${age[1]} years old.`);


/////EASY////


//MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console that number and its corresponding month. For example: if the user enters the number 3, then it should return the month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// this is a function triggered by the onclick attribute tied to a button on our page.
function submit (input) {
  console.log("submitted!", this.input);
}
let gucci = "yo seth"

this.submit(this.gucci)




/*HARD: Given the information below for Tom and Jerry. 

Tom - height:  9in   mass: 8 g
Jerry - height: 10in mass: 45 g
Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:

    BMI = mass / height ^2 = mass / (height * height)

Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry. Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).
*/