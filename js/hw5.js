//Завдання 1
//Створіть змінну, що симулює вибір варіанта зі списку. Виводьте повідомлення залежно від обраного варіанта: "Кава", "Чай" або "Сік". Використайте switch

const choise = prompt("Оберіть що ви будете пити(Чай, Кава, Сік)");
const standartChoise = choise.toLowerCase();

switch (standartChoise) {
    case "чай":
        console.log("Вам надано напій Чай")
        break;

        case "кава":
        console.log("Вам надано напій Кава")
        break;

        case "сік":
        console.log("Вам надано напій Сік")
        break;

    default:
        console.log("Такого напою немає")
        break;
}


//Завдання 2
//Створіть змінну для зберігання введеного рядка, який може бути днем тижня. Якщо це робочий день — виведіть повідомлення про робочий день, якщо вихідний — про вихідний.

const weekVerifier = prompt("Введіть день неділі");
const standartWeekVerifier = weekVerifier.toLowerCase();

switch (standartWeekVerifier) {
    case "понеділок": case "вівторок": case "середа": case "четверг": case "п'ятниця":
        console.log("Це робочій день")
        break;

        case "суббота": case "неділя":
            console.log("Це вихідний день")
        break;
    default:
        console.log("Такого дня тижня не існує")
        break;
}


//Завдання 3
//Створіть змінну для зберігання номера місяця. За номером місяця визначайте пору року і виводьте відповідне повідомлення.

const monthNumber = Number(prompt("Введіть номер місяця"));
switch (monthNumber) {
    case 9:case 10: case 11: {
        const season = "Осінь";
        console.log(season); 
    } 
        break;

case 12:case 1: case 2: {
        const season = "Зима";
        console.log(season); 
    } 
        break;

        case 3:case 4: case 5: {
        const season = "Весна";
        console.log(season); 
    } 
        break;

        case 6:case 7: case 8: {
        const season = "Літо";
        console.log(season); 
    } 
        break;

    default:
        console.log("Спробуйте знову")
        break;
}


//Завдання 4
//Створіть змінну для зберігання назви кольору. Виводьте повідомлення відповідно до вибраного кольору: якщо "червоний" — "стоп", "зелений" — "йти", "жовтий" — "чекати".

const trafficLightColor = prompt("Напишіть один з кольорів світлофора")
const standarttrafficLightColor = trafficLightColor.toLowerCase();

switch (standarttrafficLightColor) {
    case "червоний":
        console.log("Стоп!")
        break;

    case "жовтий":
        console.log("Приготуйся!")
        break;

    case "зелений":
        console.log("Рушай!")
        break;

    default:
        console.log("Спробуйте знову")
        break;
}

//Завдання 5
//Створіть змінні для зберігання двох чисел та оператора (як у списку select). Виконайте відповідну операцію та виведіть результат. У випадку ділення на нуль — виведіть попередження.

const firstNumber = Number(prompt("Напишіть перше чісло"));
const operator = prompt("Напишіть оператор");
const secondNumber = Number(prompt("Напишіть перше чісло"));

switch (operator) {
    case "/":
        console.log(firstNumber / secondNumber)
        break;

    case "*":
        console.log(firstNumber * secondNumber)
        break;
    
    case "-":
        console.log(firstNumber - secondNumber)
        break;

    case "+":
        console.log(firstNumber + secondNumber)
        break;
    default:
        console.log("Такого оператора не існує")
        break;
}