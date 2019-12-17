var specialOptions = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']
var letterOptions = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numberOptions = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var lowerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var specialChar = document.getElementById("special");
var upperCase = document.getElementById("upper");
var lowerCase = document.getElementById("lower");
var numbers = document.getElementById("numbers");
var passwordLength = document.getElementById("passwordLength")
var pLength = parseInt(passwordLength.value);
var blankOptions = []

document.getElementById("generate").addEventListener("click", function () {
  var options = {
    specialChar: specialChar.checked,
    upperCase: upperCase.checked,
    lowerCase: lowerCase.checked,
    numbers: numbers.checked,
    passwordLength: parseInt(passwordLength.value),
  }
  if (options.passwordLength >= 8 && options.passwordLength <= 128) {
    if (options.specialChar === false && options.upperCase === false && options.lowerCase === false && options.numbers === false) {
      alert("Please select at least one set of characters to include.")
    } else {
      if (options.specialChar === true) {
        blankOptions = blankOptions.concat(specialOptions);
      }
      if (options.upperCase === true) {
        blankOptions = blankOptions.concat(letterOptions);
      }
      if (options.numbers === true) {
        blankOptions = blankOptions.concat(numberOptions);
      }
      if (options.lowerCase === true) {
        blankOptions = blankOptions.concat(lowerOptions);
      }
    }

    var password = []

    for (var i = 0; i < options.passwordLength; i++) {
      var char = Math.floor(Math.random() * blankOptions.length);
      password.push(blankOptions[char])
    }

    console.log(password.join(''));

    document.getElementById("password").value = password.join('');

  } else {
    alert("Total characters must be in range of 8 to 128.")
  }

});

document.getElementById("copy").addEventListener("click", function () {
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");

});

