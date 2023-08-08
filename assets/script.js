// Assignment code here
// prompts for what criteria among length, characters (lower, upper, numeric, special)

// Establish character sets to be chosen from
let lowerCaseChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let upperCaseChars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let numberChars = ['1','2','3','5','6','7','8','9','0'];
let specialChars = ['!','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~'];
let passwordChars= [];

function generatePassword() {
  lowerCasePrompt()
  upperCasePrompt()
  numberPrompt()
  specPrompt()
  lengthPrompt()
  createPassword()
}

function lowerCasePrompt() {
  let lowerCase = confirm("Do you want to include lowercase characters?")
  if (lowerCase=true) {passwordChars.push(lowerCaseChars);}
}

function upperCasePrompt() {
  let upperCase = confirm("Do you want to include uppercase characters?")
  if (upperCase=true) {passwordChars.push(upperCaseChars);}
}

function numberPrompt() {
  let numb = confirm("Do you want to include numbers?")
  if (numb=true) {passwordChars.push(numberChars);}
}

function specPrompt() {
  let specials = confirm("Do you want to include special characters?")
  if (specials=true) {passwordChars.push(specialChars);}
}

function lengthPrompt() {
  let rawLength = prompt("How long would you like your password to be? Please enter a number between 8 and 128.")
  
}
console.log(passwordChars);

function rawPassword() {
  let password = 

}

for (var i=0; i < userInput)
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
