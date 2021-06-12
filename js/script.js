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
    var numeric;
    var speChar;

    numChar = numchar();
    lowCase = lowcase();
    console.log(lowCase);
 
    result = numChar;
    return result;
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

    return result;
}

function lowcase() {  
    var flag = false;
    var result;
    
    while (!flag) {
        var result = prompt("Use lower case (enter y or n): ");
        if (result === "y") {
            flag = true;
            return true;
            console.log(result);
        } else if (result === "n"){
            flag = true;
            return false;
        } else {
            flag = false;
            alert("Enter y or n");
        }
    }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

