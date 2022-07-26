// Begins the password generator prompt once page is loaded
document.addEventListener(
  "DOMContentLoaded",
  (event) => {
    // Creates a variable generateBtn that is set equal to the elements with the #generate ID, which is the red Generate Password button in html
    var generateBtn = document.querySelector("#generate");

    // Creates variables to define each set of options that the password will consist of
    // var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    // var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    // var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "/", "=", "?", "<", ">", ";", ":"]
    // var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

    // A way to create variable arrays without having to type each letter separated by ""
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    var lowerCase = "abcdefghijklmnopqrstuvwyxz".split("");
    var symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~".split("");
    var numbers = "0123456789".split("");

    // console.log(upperCase);
    // console.log(lowerCase);
    // console.log(symbols);
    // console.log(numbers);

    // Function expression to prompt user for a series of questions, starting with password length
    var promptForPasswordLength = function () {
      var passwordLength = 8;
      var userInputLength = prompt(
        "Please choose a password length between 8 and 128."
      );

      console.log("USER INPUT: ", userInputLength);

      if (userInputLength >= 8 && userInputLength <= 128) {
        passwordLength = Math.floor(userInputLength);
      } else {
        alert(
          "We insist that password length is between 8 and 128. Please try again."
        );
        promptForPasswordLength();
      }
      return passwordLength;
    };

    // Four function expressions to ask user if they want to include certain criteria for their password
    var promptForLowerCase = function () {
      var lowerCase = "";
      var userInputLowerCase = confirm(
        "Should your password have LOWERCASE letters?"
      );

      userInputLowerCase === true
        ? (lowerCase = userInputLowerCase)
        : lowerCase !== userInputLowerCase;

      return lowerCase;
    };

    var promptForUpperCase = function () {
      var upperCase = "";
      var userInputUpperCase = confirm(
        "Should your password have UPPERCASE letters?"
      );

      userInputUpperCase === true
        ? (upperCase = userInputUpperCase)
        : upperCase !== userInputUpperCase;

      return upperCase;
    };

    var promptForSymbols = function () {
      var symbols = "";
      var userInputSymbols = confirm(
        "Should your password have SPECIAL CHARACTERS?"
      );

      userInputSymbols === true
        ? (symbols = userInputSymbols)
        : symbols !== userInputSymbols;

      return symbols;
    };

    var promptForNumbers = function () {
      var numbers = "";
      var userInputNumbers = confirm("Should your password have NUMBERS?");

      userInputNumbers === true
        ? (numbers = userInputNumbers)
        : numbers !== userInputNumbers;

      return numbers;
    };

    // Function expression to create variables for choosing random values for all assigned password character option values
    var getRandomIndex = function (array) {
      var max = array.length;
      var min = 0;
      var randomIndex = Math.floor(Math.random() * (max - min) + min);
      return randomIndex;
    };

    // Testing the function above
    // console.log(lowerCase[randomIndex]);

    // Function expression to join password characters based on the criteria user selected from options above
    var buildAvailablePasswordValuesArray = function (
      isLowerCase,
      isUpperCase,
      hasSymbols,
      hasNumbers
    ) {
      var availablePasswordValues = [];

      if (isLowerCase) {
        availablePasswordValues = availablePasswordValues.concat(lowerCase);
      }

      if (isUpperCase) {
        availablePasswordValues = availablePasswordValues.concat(upperCase);
      }

      if (hasSymbols) {
        availablePasswordValues = availablePasswordValues.concat(symbols);
      }

      if (hasNumbers) {
        availablePasswordValues = availablePasswordValues.concat(numbers);
      }

      return availablePasswordValues;
    };

    // Function to create the password
    function generatePassword() {
      var password = "";

      var passwordLength = promptForPasswordLength();

      var passwordLowerCase = promptForLowerCase();
      var passwordUpperCase = promptForUpperCase();
      var passwordSymbols = promptForSymbols();
      var passwordNumbers = promptForNumbers();

      var availablePasswordValues = buildAvailablePasswordValuesArray(
        passwordLowerCase,
        passwordUpperCase,
        passwordSymbols,
        passwordNumbers
      );

      for (var i = 0; i < passwordLength; i++) {
        password =
          password +
          availablePasswordValues[getRandomIndex(availablePasswordValues)];
      }

      // var randomIndexLowerCase = getRandomIndex(lowerCase);
      // var randomIndexUpperCase = getRandomIndex(upperCase);
      // var randomIndexSymbols = getRandomIndex(symbols);
      // var randomIndexNumbers = getRandomIndex(numbers);

      // if(passwordLowerCase === true) {
      //   console.log(randomIndexLowerCase, randomIndexUpperCase, randomIndexSymbols, randomIndexNumbers);
      // } else {
      //   console.log(randomIndexUpperCase, randomIndexSymbols, randomIndexNumbers);
      // }

      return password;
    }

    // 1. Prompt the user for the password criteria
    //    a. Password length 8 - 128 characters only
    //          i. validate
    //    b. Include lowercase?
    //          i. yes = true
    //          ii. no = false
    //    c. Include uppercase?
    //          i. yes = true
    //          ii. no = false
    //    d. Include numbers?
    //          i. yes = true
    //          ii. no = false
    //    e. Include special characters?
    //          i. yes = true
    //          ii. no = false
    //  2. Validate the input
    //     a. At least one character type is selected
    //          i. You must do it right
    //  3. Generate password based on criteria

    //  4. Display the password to the page

    // Write password to the #password input
    // Call the generatePassword function (above) and then we store the value from that function into this password variable.
    function writePassword() {
      var password = generatePassword();
      // Creates a variable passwordText that is set equal to the elements with the #password ID, which is the card in html (where generated password displays on the screen)
      var passwordText = document.querySelector("#password");
      // Takes value from generated password and plugs it into what's displayed on the screen
      passwordText.value = password;
    }

    // Add event listener to generate button so that when user clicks the generate button, it will call the writePassword function (above)
    generateBtn.addEventListener("click", writePassword);

    writePassword();
  },
  false
);
