// Assignment Code
var generateBtn = document.querySelector("#generate");
var lower_case = "abcdefghijklmnopqrstuvwxyz";
var upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num_digits = "0123456789";
var special_char = "!@#$%^&*(){}[]<>?:";

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    document.getElementById("password").value = passwordText.value;
}


function generatePassword() {
    var numChar;
    var lowCase;
    var upCase;
    var numDigit;
    var specialChar;
    var passArray = "";
    var result = "";
    var index = 0;

    // function to get number of characters in password
    numChar = numchar();
     console.log(numChar);
    // console.log(typeof(numChar));

    // function to check if lower case to be used in password
    lowCase = lowcase();
    if (lowCase) {
        passArray = passArray.concat(lower_case);
    }

    // function to check if upper case to be used in password
    upCase = upcase();
    if (upCase) {
        passArray = passArray.concat(upper_case);
    }

    // function to check if numbers to be used in password
    numDigit = numdigit();
    if (numDigit) {
        passArray = passArray.concat(num_digits);
    }

    // function to check if special characters to be used in password
    specialChar = specialchar();
    if (specialChar) {
        passArray = passArray.concat(special_char);
    }

    // if at least one character type need to be selected
    var condition = lowCase || upCase || numDigit || specialChar;
    console.log(condition);
    if (condition) {
    // algorithm to generate password
    // used the loop suggested in https://stackoverflow.com/questions/1497481/javascript-password-generator
        for (var index = 0, n = passArray.length; index < numChar; index++) {
            result += passArray.charAt(Math.floor(Math.random() * n));
        }
        return result;
    } else {
        alert("At least one character type needs to be selected");
    }
}

function numchar() {
    var flag = false;
    var result;
    
    while (!flag) {
        result = prompt("Enter number of characters (between 8 and 128): ");
        if (isNaN(result)) {
            alert(result + " is not a number. Enter a number between 8 and 128")
        } else if (result < 8 || result > 128) { 
            alert("Enter a number between 8 and 128");
        } else {
            flag = true;
        }
    }

    return Number(result);
}

function lowcase() {  
    var flag = false;
    var result;
    
    while (!flag) {
        var result = prompt("Use lower case (enter y or n): ");
        if (result === "y") {
            flag = true;
            return true;
        } else if (result === "n"){
            flag = true;
            return false;
        } else {
            flag = false;
            alert("Use lower case (enter y or n):");
        }
    }
}

function upcase() {  
    var flag = false;
    var result;
    
    while (!flag) {
        var result = prompt("Use upper case (enter y or n): ");
        if (result === "y") {
            flag = true;
            return true;
        } else if (result === "n"){
            flag = true;
            return false;
        } else {
            flag = false;
            alert("Use upper case (enter y or n):");
        }
    }
}

function numdigit() {  
    var flag = false;
    var result;
    
    while (!flag) {
        var result = prompt("Use numbers (enter y or n): ");
        if (result === "y") {
            flag = true;
            return true;
        } else if (result === "n"){
            flag = true;
            return false;
        } else {
            flag = false;
            alert("Use numbers (enter y or n): ");
        }
    }
}

function specialchar() {  
    var flag = false;
    var result;
    
    while (!flag) {
        var result = prompt("Use special characters (enter y or n): ");
        if (result === "y") {
            flag = true;
            return true;
        } else if (result === "n"){
            flag = true;
            return false;
        } else {
            flag = false;
            alert("Use special characters (enter y or n): ");
        }
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

