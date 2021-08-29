// Assignment code here
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var symbols = "!@#$%^&*--+=";

var generatePassword = function() {
// Take User input and generate password

// use confirm statement for lower/upper/etc

  var hasLowercase = confirm("Use lowercase letters?");
  var hasUppercase = confirm("Use uppercase letters?");
  var hasNumbers = confirm("Use numbers?");
  var hasSymbols = confirm("Use symbols?");
  // validate at least 1 character type selected
  if (!(hasLowercase || hasUppercase || hasNumbers || hasSymbols)) {
    alert("Please choose at least one character type.")
    return "";
  }

// ask for length

  var length = prompt("Please enter a password length from 8-128");


// validate length is a # & within range
  if(Number.isNaN(length)) {
    alert("Please enter a valid number");
    return "";
  }
// try later - use math floor/ceil to force whole number
// also check between 8-128


// generate password
// possible tools: math.random, hasLowercase[0,1,2,etc], for loop
// make 1 large string for all wanted characters i.e. hasLowercase + hasUppercase
  var characters = "";
  if (hasLowercase) {
    characters += lower
  }
  if (hasUppercase) {
    characters += upper
  }
  if (hasNumbers) {
    characters += numbers
  }
  if (hasSymbols) {
    characters += symbols
  }
  console.log(characters);
// loop through the large string and randomly select from all characters
var passwordGen = "";

for (var i = 0; i < Number(length); i++) {
// range is between 0 & characters.length - 1
var index = Math.floor(Math.random() * characters.length)
var characterToAdd = characters[index];
passwordGen += characterToAdd;
}
// check to force at least 1 character from each set


return passwordGen;

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
