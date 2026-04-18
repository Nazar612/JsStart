//Завдання 1
// Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].

// Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.

const massiveNames = ['Mango', 'Poly', 'Ajax'];
let count = 0;
function logItems(array) {
    for(let i = 0; i < array.length; i++) {
        count += 1;
        console.log(count + " " + "-" + " " + array[i]);
    }
}
logItems(massiveNames);

//Завдання 2
// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.

const engravingText = prompt("Введіть які слова ми хочете вигравіювати");

const massiveEngravingText =  engravingText.split(" ");
function calculateEngravingPrice(message, pricePerWord) {
        const totalPrice = message.length * pricePerWord;
        console.log("Ціна за гравіювання для речення " + engravingText + " = "+ totalPrice + " грн");
}

calculateEngravingPrice(massiveEngravingText, 10)

//Завдання 3
// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.

const biography = "Лоран Годе, французький писатель і драматург народився 6 липня 1972 року в Парижі Франція"
const massiveBiography = biography.split(" ");

function findLongestWord(string) {
    let maxLength = string[0];

    for(let i = 0; i < string.length; i++) {
        const element = string[i];
        if(element.length > maxLength.length) {
            maxLength = element;
        }
    }
    console.log(maxLength);
}

findLongestWord(massiveBiography);

//Завдання 4
// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.

// Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
// Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.

const text40Symbols = "Лоран Годе, французький писатель і драма";
const textMoreThen40Symbols = "Лоран Годе, французький писатель і драматург народився 6 липня 1972 року в Парижі Франція";

function formatString(string) {
    if(string.length <= 40) {
        return string;
    }else{
        const stringMassive = string.split("");
        const stringMassiveRemplace = stringMassive.splice(40, string.length, "...");
        const joinAll = stringMassive.join("");
        console.log(joinAll);
        console.log(stringMassive)
        console.log(stringMassiveRemplace)
    }
}

formatString(textMoreThen40Symbols)


//Завдання 5
// Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.

const messageWithSpam = "LoremLorem Lore Lorem Lo Loremm Spam Sale".toLowerCase();
const messageWithoutSpam = "LoremLorem Lore Lorem Lo Loremm".toLowerCase();
const massiveSpamWords = ["spam", "sale"];

function checkForSpam(message){
    for(let i = 0; i < massiveSpamWords.length; i++) {
        if(message.includes(massiveSpamWords[i])) {
            console.log('yes')
            return true
        }

        }
        console.log("no")
    return false
}

checkForSpam(messageWithoutSpam);
checkForSpam(messageWithSpam);

//Завдання 6
// Напиши скрипт з наступним функціоналом:

// При завантаженні сторінки користувачеві пропонується в prompt ввести число. Введення зберігається в змінну input і додається в масив чисел numbers.
// Операція введення числа користувачем і збереження в масив триває до тих пор, пір, поки користувач не натисне Cancel в prompt.
// Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній, необхідно порахувати суму всіх елементів масиву і записати її в змінну total. Використовуй цикл for або for...of. Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.


// 🔔 Робити перевірку того, що користувач ввів саме число, а не довільний набір символів, не обов'язково. Якщо хочеш, в разі некоректного введення, показуй alert з текстом 'Було введено не число, попробуйте ще раз', при цьому результат promptзаписувати в масив чисел не потрібно, після чого знову користувачеві пропонується ввести число в prompt.

const numbers = [];

for(let i = 0; i > -1; i++) {
    const input = Number(prompt("Введіть число"));
    if(input === 0 || isNaN(input)) {
        break;
    }else{
        numbers.push(input);
    }
}
let sum = 0;
if (numbers.length != 0) {
    for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}
}
console.log(sum);
//значення isNaN() я спросив у чата гпт, бо я не знав вже як його зробить

