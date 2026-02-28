const url = "http:nebezpeka.com";
console.log(url.startsWith("https"));


const spam = "sale";
const message = "Big SaLLe";

const standartMessage = message.toLowerCase();
//Aбо
const standartMessage2 = message.toUpperCase();

if (message.includes(spam)) {
    console.log("У спам");
}



let name = prompt("Введіть ім'я");


console.log(name.slice(0, 2));

const nickname = prompt("Введіть ім'я");
console.log(nickname.slice(0, 1).toUpperCase() + nickname.slice(1, nickname.length).toLowerCase());

//.trim()
//.replace()

const message5 = "Привіт, поганеСлово, Допобачення";

const standartMessage5 = message5.toLowerCase();

const newMessage = console.log(standartMessage5.replace("поганеслово", "***"));


const cardNumber = prompt("Введіть номер своєї картки");
if (cardNumber.length === 16) {
    alert("все добре");
} 
else {
    alert("Спробуйте ще раз");
}


const firstCardNumbers = cardNumber.slice(0, 12)

const finalCardNumbers = cardNumber.replace(firstCardNumbers, "**** **** **** ");
console.log(finalCardNumbers);