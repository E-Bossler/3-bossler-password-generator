//var options = ['A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'V', 'v', 'W', 'X', 'x', 'Y', 'y', 'Z', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')']

var specialOptions = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']
var letterOptions = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numberOptions = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var lowerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


// options are 26 + 26 + 10 +10 = 72 total character options

// console.log(options)
// console.log(options[45])

// for (var i = 0; i < 30; i++) {
//     var num = Math.floor(Math.random() * options.length);
//     console.log(options[num]);
//   }

var specialChar = document.getElementById("special");
var upperCase = document.getElementById("upper");
var lowerCase = document.getElementById("lower");
var numbers = document.getElementById("numbers");
var passwordLength = document.getElementById("passwordLength")

// console.log(specialChar)

document.getElementById("generate").addEventListener("click", function () {
  var options = {
    //key: value,
    specialChar: specialChar.checked,
    upperCase: upperCase.checked,
    lowerCase: lowerCase.checked,
    numbers: numbers.checked,
    passwordLength: parseInt(passwordLength.value),
  }

  var blankOptions = []

  if (options.specialChar === true) {
    blankOptions = blankOptions.concat(specialOptions);
    // console.log('here')
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

  // console.log(blankOptions)

  var password = []

  for (var i = 0; i < options.passwordLength; i++) {
    var char = Math.floor(Math.random() * blankOptions.length);
    //console.log(blankOptions[char]);
    password.push(blankOptions[char])
  }

  console.log(password.join(''));

  document.getElementById("password").value = password.join('');


});

document.getElementById("copy").addEventListener("click", function () {
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");

});
  //validate at least one is checked - show an alert
