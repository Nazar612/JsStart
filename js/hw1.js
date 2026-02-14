const age = 16;

const name = "Nazar";

const isStudent  = true;
console.log(isStudent);
console.log(typeof isStudent);

const myString = "Сім раз відріж, один раз відмірь";
console.log(myString);

const myNumber = 20 + 10;
console.log(myNumber);

const myNull = null;
console.log(typeof myNull);

const userName = prompt("Введіть своє ім'я")
if (userName.length > 0) {
    alert("Дякую, ці дані будуть передані куди требa");
} else {
    alert("Схоже виникла невідома помилка :( Перезапустіть сторінку та спробуйте знову");
}
console.log(userName);
console.log(typeof userName);

const userAnswer = confirm("Вы дійсно хочете покинути сторінку?");
console.log(userAnswer);
console.log(typeof userAnswer);
if (userAnswer == true) {
    alert("Ну все, за тобой виїхали");
} else {
    alert("Ладно, живи пока");
}

const alertA = alert("Увага! Дія може бути небезпечною.");
if (alertA == true) {
    confirm("Ви впевнені, що хочете продовжити?");
} else {
    console.log("Пк успішно взломано");
}

