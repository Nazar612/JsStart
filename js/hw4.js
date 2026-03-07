// Завдання 1
const strokeText1 = prompt("Введіть щось");
const strokeText2 = prompt("Введіть ще щось");

if (strokeText1.length > 0 && strokeText2.length > 0) {
    alert("Обидва поля заповнені")
} else {
    alert("Не всі поля заповнені")
}

//Завдання 2
const numberTaker1 = Number(prompt("Введіть число"));
const numberTaker2 = Number(prompt("Введіть ще одне число"));
const numberAddition = numberTaker1 + numberTaker2;

if(numberAddition >= 10) {
    alert("Сума більша за 10")
} else {
    alert("Сума меньша або дорівнює 10")
}

//Завдання 3
const textTaker = prompt("Напишіть хороше слово");
const goodWords = "javascript";
const StandartTextTaker = textTaker.toLowerCase();
if (StandartTextTaker.includes(goodWords)) {
    alert("А ти шариш")
} else {
    alert("Вийди атсюда розбійник")
}

// Завдання 4
const numberSave = Number(prompt("Введіть число"));

if (numberSave >= 10 && numberSave <= 20) {
    alert("Число входить в діапазон від 10 до 20")
} else {
        alert("Число не входить в діапазон від 10 до 20")
}

//Завдання 5
const name1 = prompt("Введіть ім'я");
const gmail = prompt("Введіть гмаіл");
const password = prompt("Введіть пароль");

if (name1.length > 3 && gmail.endsWith(".com") && gmail.includes("@") && gmail.length > 4 && password.length >= 6) {
    alert("Перенаправлення на іншу сторінку")
} else {
    alert("Помилка: неправильне заповнення")
}