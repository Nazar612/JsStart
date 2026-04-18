const alphabet = "abcdefghijklmnopqrstuvwxyz";
const verifPangramma = "The quick brown fox jumps over the lazy dog.".toLowerCase();
let result = false;
for (let i = 0; i < alphabet.length; i++) {
    const element = alphabet[i];
    // console.log(element);
    if(verifPangramma.includes(element)) {
       result = true;
    }else{
        result = false;
        break;
    }
}
console.log(result);

const verifPangramma2 = "The cat sits on the sofa.".toLowerCase();
let result2 = false;
for (let i = 0; i < alphabet.length; i++) {
    const element = alphabet[i];
    // console.log(element);
    if(verifPangramma2.includes(element)) {
       result2 = true;
    }else{
        result2 = false;
        break;
    }
}
console.log(result2);

const verifPangramma3 = "Sphinx of black quartz, judge my vow.".toLowerCase();
let result3 = false;
for (let i = 0; i < alphabet.length; i++) {
    const element = alphabet[i];
    // console.log(element);
    if(verifPangramma3.includes(element)) {
       result3 = true;
    }else{
        result3 = false;
        break;
    }
}
console.log(result3);

//Функції

function isPangram(test) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result4 = "";
    for (let i = 0; i < alphabet.length; i++) {
        let ch = alphabet[i];
        if(test.toLowerCase().includes(ch)) {
            result4 = true;
        }else{
            result4 = false;
            break;
        }
    }
    console.log(result4)
}


// const userMessage = prompt("Введіть речення");
isPangram("The quick brown fox jumps over the lazy dog.")
isPangram("The cat sits on the sofa.")
isPangram("Sphinx of black quartz, judge my vow.")
isPangram("Simple sentences are easy.")
isPangram("Pack my box with five dozen liquor jugs.")

//Аргументи - те що ви маєте передати у функцію
//Параметри - те що записуєте у круглі дужки (Те чого ви очикуєте для роботи)


function calculator(number1, signe, number2) {
    console.log(number1, signe, number2)
    switch( signe ) {
        case "/": 
        return number1 / number2;

        case "*":
        return number1 * number2;

        case "+":
        return number1 + number2;

        case "-":
        return number1 - number2;

        default: 
        return alert("Спробуйте знову");
    } 
}

const division = calculator(5, "/", 5);
const userNumber1 = Number(prompt("Введіть перше число"));
const signe1 = prompt("Введіть оператор");
const userNumber2 = Number(prompt("Введіть друге число"));
const userResult = calculator(userNumber1, signe1, userNumber2);
console.log(userResult);
// console.log(division);