//Завдання 1
// Напиши скрипт, який об'єднує всі елементи массива в один рядок. Елементів може бути довільна кількість. Нехай елементи массива в рядку будут розділені комою.
// 👉 Спочатку через for
// 👉 Потім через join()

// const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
// let string = "";
// for( let i = 0; i < friends.length; i++) {
//     const counter = friends[i];
// }
// console.log()
//Я не знаю як це через for зробити 

const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
let string = friends.join()
console.log(string);

//Завдання 2
// Працюємо з колекцією карток в trello. Метод splice() (можна використати інші методи)

const cards = [
    "Карточка-1",
    "Карточка-2",
    "Карточка-3",
    "Карточка-4",
    "Карточка-5",
];
//Видалення
const cardToRemove = cards.indexOf("Карточка-3");
const removeCart = cards.splice(cardToRemove, cardToRemove -1)
console.log(cards)

//Додавання
cards.push("Карточка-6");
console.log(cards);

//Оновлення
const cardToUpdate = cards.indexOf("Карточка-4");
const cardUpdate = cards.splice(cardToUpdate, cardToUpdate -1, "Оновлена Карточка-4");
console.log(cards)