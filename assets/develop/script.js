// Begins the password generator prompt once page is loaded
document.addEventListener(
  "DOMContentLoaded",
  (event) => {
    // Creates a variable generateBtn that is set equal to the elements with the #generate ID, which is the red Generate Password button in html
    var generateBtn = document.querySelector("#generate");

    // A way to create variable arrays without having to type each letter separated by ""
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    var lowerCase = "abcdefghijklmnopqrstuvwyxz".split("");
    var symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~".split("");
    var numbers = "0123456789".split("");

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
          "We insist that password length is a number between 8 and 128. Please try again."
        );
        promptForPasswordLength();
      }
      return passwordLength;
    };
    // promptForPasswordLength();

    var userInputLowerCase;
    var userInputUpperCase;
    var userInputSymbols;
    var userInputNumbers;

    // Four function expressions to ask user if they want to include certain criteria for their password

    var promptForLowerCase = function () {
      // var lowerCase = "";
      userInputLowerCase = confirm(
        "Should your password have LOWERCASE letters?"
      );
      // userInputLowerCase === true
      //   ? (lowerCase = userInputLowerCase)
      //   : lowerCase !== userInputLowerCase;

      return userInputLowerCase;
    };

    var promptForUpperCase = function () {
      // var upperCase = "";
      userInputUpperCase = confirm(
        "Should your password have UPPERCASE letters?"
      );

      // userInputUpperCase === true
      //   ? (upperCase = userInputUpperCase)
      //   : upperCase !== userInputUpperCase;

      return userInputUpperCase;
    };

    var promptForSymbols = function () {
      // var symbols = "";
      userInputSymbols = confirm(
        "Should your password have SPECIAL CHARACTERS?"
      );

      // userInputSymbols === true
      //   ? (symbols = userInputSymbols)
      //   : symbols !== userInputSymbols;

      return userInputSymbols;
    };

    var promptForNumbers = function () {
      // var numbers = "";
      userInputNumbers = confirm("Should your password have NUMBERS?");

      // userInputNumbers === true
      //   ? (numbers = userInputNumbers)
      //   : numbers !== userInputNumbers;

      return userInputNumbers;
    };

    // solution 1 - trying to wrap 4 condition function expressions inside if/else/if statement

    function runConditions() {
      if (userInputLowerCase) {
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
      } else if (userInputUpperCase) {
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
      } else if (userInputSymbols) {
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
      } else if (userInputNumbers) {
        var promptForNumbers = function () {
          var numbers = "";
          var userInputNumbers = confirm("Should your password have NUMBERS?");

          userInputNumbers === true
            ? (numbers = userInputNumbers)
            : numbers !== userInputNumbers;

          return numbers;
        };
      } else {
        alert("You must select at least one condition. Please try again.");
        promptForPasswordLength();
        // generatePassword();
      }
    }

    // solution 2 - trying to give while loop a variable so it doesn't run infinitely

    // var no = !true;
    // while (no) {
    //   var promptForLowerCase = function () {
    //     var lowerCase = "";
    //     var userInputLowerCase = confirm(
    //       "Should your password have LOWERCASE letters?"
    //     );

    //     userInputLowerCase === true
    //       ? (lowerCase = userInputLowerCase)
    //       : lowerCase !== userInputLowerCase;

    //     return lowerCase;
    //   };

    //   var promptForUpperCase = function () {
    //     var upperCase = "";
    //     var userInputUpperCase = confirm(
    //       "Should your password have UPPERCASE letters?"
    //     );

    //     userInputUpperCase === true
    //       ? (upperCase = userInputUpperCase)
    //       : upperCase !== userInputUpperCase;

    //     return upperCase;
    //   };

    //   var promptForSymbols = function () {
    //     var symbols = "";
    //     var userInputSymbols = confirm(
    //       "Should your password have SPECIAL CHARACTERS?"
    //     );

    //     userInputSymbols === true
    //       ? (symbols = userInputSymbols)
    //       : symbols !== userInputSymbols;

    //     return symbols;
    //   };

    //   var promptForNumbers = function () {
    //     var numbers = "";
    //     var userInputNumbers = confirm("Should your password have NUMBERS?");

    //     userInputNumbers === true
    //       ? (numbers = userInputNumbers)
    //       : numbers !== userInputNumbers;

    //     return numbers;
    //   };
    //   alert("You must select at least one condition. Please try again.");
    //   promptForPasswordLength();
    // };

    // Function expression to create variables for choosing random values for all assigned password character option values
    var getRandomIndex = function (array) {
      var max = array.length;
      var min = 0;
      var randomIndex = Math.floor(Math.random() * (max - min) + min);
      console.log(randomIndex, "I am random index");
      return randomIndex;
    };

    // Function expression to join password characters based on the criteria user selected from options above
    var buildAvailablePasswordValuesArray = function (
      isLowerCase,
      isUpperCase,
      hasSymbols,
      hasNumbers
    ) {
      var availablePasswordValues = [];

      console.log(isLowerCase, isUpperCase, hasSymbols, hasNumbers);

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

      console.log(availablePasswordValues + "243");
      return availablePasswordValues;
    };

    // Function to create the password
    function generatePassword() {
      var password = "";

      var passwordLength;
      var passwordLowerCase;
      var passwordUpperCase;
      var passwordSymbols;
      var passwordNumbers;
      var availablePasswordValues;

      // runConditions();

      while (
        password.includes("undefined") ||
        password === "" ||
        password === undefined
      ) {
        passwordLength = promptForPasswordLength();

        passwordLowerCase = promptForLowerCase();
        passwordUpperCase= promptForUpperCase();
        passwordSymbols = promptForSymbols();
        passwordNumbers = promptForNumbers();
        // runConditions();
        availablePasswordValues = buildAvailablePasswordValuesArray(
          passwordLowerCase,
          passwordUpperCase,
          passwordSymbols,
          passwordNumbers
        );

        if (availablePasswordValues.length > 0) {
          for (var i = 0; i < availablePasswordValues.length; i++) {
            password =
              password +
              availablePasswordValues[getRandomIndex(availablePasswordValues)];
          }
        } else {
          password = "You must select at least one condition. Press Generate Password to try again."
        }

        console.log(availablePasswordValues);
        console.log(password);
      }
      return password;
    }

    // Write password to the #password input
    // Call the generatePassword function (above) and then we store the value from that function into this password variable.
    function writePassword() {
      // solution 3
      // if (!userInputLowerCase && !userInputUpperCase && !userInputSymbols && !userInputNumbers)
      //  { return true;
      // } else {
      //   alert("You must select at least one condition. Please try again.");
      //   return false;
      // };

      var password = generatePassword();
      console.log(password);
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
