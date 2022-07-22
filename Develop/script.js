// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Hey! You clicked the button!");

// 1. Prompt the user for the password criteria
//    a. Password length 8 < 128
//    b. Lowercase, uppercase, numbers, special characters
//  2. Validate the input
//     a. At least one character type is selected
//  3. Generate password based on criteria

 
//  4. Display the password to the page
  return "Generated password goes here."
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
