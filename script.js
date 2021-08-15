// Assignment code here

//defined global variables
var enter;
var confirmNumber;
var confirmSpecial;
var confirmUpper;
var confirmLower;
var criteria;

// input arrays (numbers, special characters, uppercase letters, lowercase letters)
number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ":", ";", "'", "<", ">", ",", ".", "?", "/"];

upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function generatePassword() {

  enter = parseInt(prompt("How many characters would you like in your password? Please choose between 8 and 128."));

// first criteria alert
if (!enter) { 
  window.alert("Please enter a value!");
}

// second criteria alert/prompt
else if (enter < 8 || enter > 128) {
  enter = parseInt(prompt("Inputted value not between 8 and 128. Please try again."));
}

// user criteria input
else {
  confirmNumber = window.confirm("Should this contain numbers?");
  confirmSpecial = window.confirm("Should this contain special characters?");
  confirmUpper = window.confirm("Should this contain uppercase letters?");
  confirmLower = window.confirm("Should this contain lowercase letters?");
};

// alert for if all negative 
if (!confirmNumber && !confirmSpecial && !confirmUpper &&!confirmLower) {
  criteria = window.alert("Please enter a criteria!");
}

// if all criteria chosen 
else if (confirmNumber && confirmSpecial && confirmUpper && confirmLower) {
  criteria = number.concat(special, upper, lower);
}

// if 3 criteria chosen
else if (confirmNumber && confirmSpecial && confirmUpper) {
  criteria = number.concat(special, upper);
}

else if (confirmNumber && confirmSpecial && confirmLower) {
  criteria = number.concat(special, lower);
}

else if (confirmNumber && confirmUpper && confirmLower) {
  criteria = number.concat(upper, lower);
}

else if (confirmSpecial && confirmUpper && confirmLower) {
  criteria = special.concat(upper, lower);
}

// if 2 criteria chosen
else if (confirmNumber && confirmSpecial) {
  criteria = number.concat(special);
}

else if (confirmNumber && confirmUpper) {
  criteria = number.concat(upper);
}

else if (confirmNumber && confirmLower) {
  criteria = number.concat(lower);
}

else if (confirmSpecial && confirmLower) {
  criteria = special.concat(lower);
}

else if (confirmSpecial && confirmUpper){
  criteria = special.concat(upper);
}

else if (confirmUpper && confirmLower) {
  criteria = upper.concat(lower);
}

// if 1 criteria chosen

else if (confirmNumber) {
  criteria = number;
}

else if (confirmSpecial) {
  criteria = special;
}

else if (confirmUpper) {
  criteria = upper;
}

else if (confirmLower) {
  criteria = lower;
}

// input length placeholder
var password = [];

// random generation based on chosen criteria
for (var i=0;i<enter.length;i++) {
  var pickCriteria = criteria[Math.floor(math.random() * criteria.length)];
  password.push(pickCriteria);
}}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// 
generateBtn.addEventListener("click", writePassword);






