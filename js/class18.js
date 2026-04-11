//Завдання
const userPassword = prompt("Введіть пароль");
const userGmail = prompt("Введіть емейл").toLowerCase();
if(userGmail.includes("@") && userGmail.endsWith(".com")) {
    console.log("Все добре");
}else{
    console.log("сбробуйте знову");
}
function hasBigLetter(password) {
    let result = false;
    for(let i = 0; i < password.length; i++) {
        if(password[i] === password[i].toLowerCase()) {
            result = true;
        }else{
            return true;
        }
    }
            return false;
}


function hasSpecialSymbol(password) {
    const specialSymbols = "_!@#$%^&*()";
    for(let i = 0; i < specialSymbols.length; i++) {
        if(password.includes(specialSymbols[i])) {
            console.log(specialSymbols[i]);
            return true;
        }
    }
    
            return false;
}

console.log(hasSpecialSymbol(userPassword));
console.log(hasBigLetter(userPassword));
if(userPassword.length === 12 && hasBigLetter(userPassword) && hasSpecialSymbol(userPassword)){
    console.log("Password good");
}
//Кінець


function isEven(number = 0) {
    // if ( number=== undefined) return "введіть число";
    if ( typeof number !== "number") return "введіть число"
    if(number % 2 === 0) {
        return number;
    }
    return "Всі числа не парні"
}

const evenNumber = isEven();
const notEvenNumver = isEven();

console.log(evenNumber);
console.log(notEvenNumver);