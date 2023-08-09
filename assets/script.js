// Assignment code here
// prompts for what criteria among length, characters (lower, upper, numeric, special)

// Establish character sets to be chosen from
let lowerCaseChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let upperCaseChars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let numberChars = ['1','2','3','5','6','7','8','9','0'];
let specialChars = ['!','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~'];

// Sequence of functions for user inputs, password construction, and 
function generatePassword() {
  var passwordChars = charConfirm();
  var passwordLength = lengthPrompt();
  var password = passwordBuild(passwordChars, passwordLength);
  return password;
}

// Gathers user preferences for password character criteria - returns array of characters
function charConfirm() {
  // establish empty array for characters
  var passwordChars=[];
  // series of confirms for user to select character criteria - if confirmed, added to array
  let lowerCase = confirm("Do you want to include lowercase characters?")
  if (lowerCase==true) {passwordChars=passwordChars.concat(lowerCaseChars);}
  let upperCase = confirm("Do you want to include uppercase characters?")
  if (upperCase==true) {passwordChars=passwordChars.concat(upperCaseChars);}
  let numb = confirm("Do you want to include numbers?")
  if (numb==true) {passwordChars=passwordChars.concat(numberChars);}
  let specials = confirm("Do you want to include special characters?")
  if (specials==true) {passwordChars=passwordChars.concat(specialChars);}
  // check to make sure at least one prompt was confirmed, otherwise reset to start of the function
  if (passwordChars.length==0){
    alert("Please choose at least one type of character. Try again!");
    charConfirm();
  }
  // Returns user's selection of characters to generatePassword()
  return passwordChars;
}

// Gathers user preference for password length - returns a number
function lengthPrompt() { 
  // Establish empty string for password length
  var passwordLength = "";
  // Prompts user to input a number for password length
  let lengthCheck = prompt("How long would you like your password to be? Please enter a number between 8 and 128.")
  // Check to make sure that password length is within 8 and 128 - if not, reset to start of function
  if (lengthCheck < 8) {
    alert("Password too short, please try again.");
    lengthPrompt();
  } else if (lengthCheck > 128) {
    alert("Password too long, please try again.");
    lengthPrompt();
    // If number is within the acceptable range, return the number to generatePassword()
  } else (passwordLength=passwordLength.concat(lengthCheck)); 
  return passwordLength;
}

// Construct a random password according to user criteria
function passwordBuild(passwordChars, passwordLength) {
  // Establish empty string for password
  var password = "";
  for (var i = 0; i<passwordLength; i++) {
    let randomNumb = Math.floor(Math.random()*passwordChars.length);
    let randomChar = passwordChars[randomNumb];
    password += randomChar;
  }
  return password;
}  
  
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
