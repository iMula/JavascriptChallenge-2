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
let age = [21, 37, 28]

let student = [lastName, firstName, age];

console.log('Hello, my name is'(student));