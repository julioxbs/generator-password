const passwordInput = document.querySelector("#numberInput");
const lowercaseInput = document.querySelector("#lowercase");
const uppercaseInput = document.querySelector("#uppercase");
const symbol = document.querySelector("#symbol");
const number = document.querySelector("#number");
const form = document.querySelector("form");
const password = document.querySelector("#numberInput");


const alphabet = "abcdefghijklmnopqrstuvwxyz";
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const symbols = ["!", "@", "#", "&"];
const lowercase = []; lowercase.push(...alphabet.toLowerCase());
const uppercase = []; uppercase.push(...alphabet.toUpperCase());

// Recives inputs values
let returnedPassword = [];
let passwordLength;

function generatorPassword() {
    let selectedCharacterTypes = [];
    passwordLength = Number(password.value);

    if (passwordInput.value >= 8 && passwordInput.value <= 128) {
        if (lowercaseInput.checked) {
            selectedCharacterTypes = selectedCharacterTypes.concat(lowercase);
        } if (uppercaseInput.checked) {
            selectedCharacterTypes = selectedCharacterTypes.concat(uppercase);
        } if (symbol.checked) {
            selectedCharacterTypes = selectedCharacterTypes.concat(symbols);
        } if (number.checked) {
            selectedCharacterTypes = selectedCharacterTypes.concat(numbers);
        }
    }

    
    for (let i = 0; i < passwordLength; i++) {
        let randomChar = selectedCharacterTypes[Math.floor(Math.random() * selectedCharacterTypes.length)];

        returnedPassword.push(randomChar)
    }

    return returnedPassword = returnedPassword.join("")
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    generatorPassword();

    document.querySelector("#textarea").innerHTML = "";
    document.querySelector("#textarea").innerHTML = returnedPassword;

    
    passwordInput.value = "";
    lowercaseInput.checked = false;
    uppercaseInput.checked = false;
    number.checked = false;
    symbol.checked = false;
    returnedPassword = [];
})