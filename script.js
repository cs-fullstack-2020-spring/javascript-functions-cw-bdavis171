// //Exercise 1:

// //Create a 'printNumber' function to print integers from -25 to 20
// function printNumber(){
//     for (let i = -25; i<=20;i++){
//         console.log(i);
//     }
// }
// printNumber();

// //Exercise 2:

// //Create a function that's passed a firstName and lastName. Return lastName comma firstName
// function Name(firstName,lastName){
//     console.log(`${lastName}, ${firstName}`);
// }
// Name('Brandon','Davis');

// //Exercise 3:

// //Create a function that counts from 0 to [NUMBER]
// function countFromZero(number){
//     for (let i =0;i<=number;i++){
//         console.log(i);
//     }
// }
// countFromZero(10);

// //Exercise 4:

// //Create a function called checkPassword and send two string variables into it
// function checkPassword(pass1, pass2) {
//     //Check to see if the two strings match. Return true if so, return false if not
//     if (pass1 == pass2){
//         return true;
//     } else {
//         return false;
//     }
// }
// //Print the results of the function
// let testPass1 = 'hello';
// let testPass2 = 'hllo';
// console.log(checkPassword(testPass1,testPass2));

// //Exercise 5:

// //Create a 'sumOf3Numbers' function that will print out the sum of the three numbers
// function sumOf3Numbers(num1,num2,num3){
//     return num1 + num2 + num3;
// }

// console.log(sumOf3Numbers(3,3,3));

// //Challenge

// //Create four functions called add, subtract, multiply, and divide
// function add(num1, num2) {
//     return num1 + num2;
// }
// function subtract(num1, num2) {
//     return num1 - num2;
// }
// function multiply(num1, num2) {
//     return num1 * num2;
// }
// function divide(num1, num2) {
//     return num1 / num2;
// }

// //Ask the user for two numbers
// let userNum1 = parseInt(prompt('Enter a number'));
// let userNum2 = parseInt(prompt('Enter another number'));

// //Ask the user what function they want to use and print the result
// userFunct = prompt('What function would you like to use? (Add,Subtract,Multiply,Divide)');
// let result;
// if (userFunct == 'Add' || userFunct=='add'){
//     result = add(userNum1,userNum2);
// } else if (userFunct == 'Subtract' || userFunct == 'subtract'){
//     result = subtract(userNum1,userNum2);
// } else if (userFunct == 'Multiply' || userFunct == 'multiply'){
//     result = multiply(userNum1,userNum2);
// } else if (userFunct == 'Divide' || userFunct == 'divide'){
//     result = divide(userNum1,userNum2);
// } else {
//     alert('That is not a function!!!')
// }


// //Alert the result
// alert(`The result is ${result}`);