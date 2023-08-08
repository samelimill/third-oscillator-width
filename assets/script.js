// Assignment code here
// prompts for what criteria among length, characters (lower, upper, numeric, special)

// Establish character sets to be chosen from
let lowerCaseChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let upperCaseChars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let numberChars = ['1','2','3','5','6','7','8','9','0'];
let specialChars = ['!','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~'];

var password = "";
var passwordChars = [];
var totalChars = [];
var passwordLength = "";

// Sequence of user inputs for characters and length;
function generatePassword() {
  totalChars=[];
  passwordLength = "";
  totalChars = charConfirm();
//  charCheck();
  passwordLength = lengthPrompt(); 
  password = passwordBuild();
  return password;
}

function charConfirm() {
  passwordChars=[];
  let lowerCase = confirm("Do you want to include lowercase characters?")
  if (lowerCase==true) {passwordChars=passwordChars.concat(lowerCaseChars);}
  let upperCase = confirm("Do you want to include uppercase characters?")
  if (upperCase==true) {passwordChars=passwordChars.concat(upperCaseChars);}
  let numb = confirm("Do you want to include numbers?")
  if (numb==true) {passwordChars=passwordChars.concat(numberChars);}
  let specials = confirm("Do you want to include special characters?")
  if (specials==true) {passwordChars=passwordChars.concat(specialChars);}
  return passwordChars;
}


function lengthPrompt() { 
  let lengthCheck = prompt("How long would you like your password to be? Please enter a number between 8 and 128.")
  if (lengthCheck < 8) {alert("Password too short, please try again.")
  } else if (lengthCheck > 128) {alert("Password too long, please try again.")
  } else (passwordLength=passwordLength.concat(lengthCheck));
  return passwordLength;
}

function passwordBuild() {
  password = "";
  for (var i = 0; i<passwordLength; i++) {
    let randomNumb = Math.floor(Math.random()*totalChars.length);
    let randomChar = totalChars[randomNumb];
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
