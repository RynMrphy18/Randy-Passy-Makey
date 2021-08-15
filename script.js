// Assignment code here

//defined global variables
var enter;
var confirmNumber;
var confirmSpecial;
var confirmUpper;
var confirmLower;

// input arrays (numbers, special characters, uppercase letters, lowercase letters)
number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ":", ";", "'", "<", ">", ",", ".", "?", "/"];

upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// event listener linked to button in content section 
generateBtn.addEventListener("click", function(){
    ps = writePassword();
    document.getElementById("#password").placeholder = ps;
});

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




enter = parseInt(prompt("How many characters would you like in your password? Please choose between 8 and 128."));

// first criteria alert
if (!enter) { 
  window.alert("Please enter a value!");
}

// second criteria alert/prompt
else if (enter < 8 || enter > 128) {
  enter = parseInt(prompt("Inputted value not between 8 and 128."));
}

// user criteria input
else {
  confirmNumber = window.confirm("Should this contain numbers?");
  confirmSpecial = window.confirm("Should this contain special characters?");
  confirmUpper = window.confirm("Should this contain uppercase letters?");
  confirmLower = window.confirm("Should this contain lowercase letters?");
};
