// Завдання 1
// Вивести в консоль всі числа від 1 до 10 за допомогою циклу while.

let counter = 0;
while ( counter < 10) {
    counter = counter + 1;
    console.log(counter);
}

console.log(" Завдання 1 завершено")


// Завдання 2
// Вивести в консоль всі парні числа від 2 до 20 за допомогою циклу for. Якщо число парне, пропустити його за допомогою continue.

for(let i = 2; i <= 20; i+= 1) {
    if (i % 2 != 0) {
        continue
    }
    console.log(i)
}

console.log(" Завдання 2 завершено")


// Завдання 3
// Вивести в консоль таблицю множення числа 7 за допомогою циклу for.

for(let i = 1; i <= 10; i += 1) {
    const startNum = 7;
    let process = startNum * i;
    console.log(process);
}

console.log(" Завдання 3 завершено")

//Завдання 4
// Створити скрипт, який виводить в консоль всі числа , які менші за n. Якщо зустрічається число, що більше або дорівнює n, цикл повинен бути закінчений за допомогою break.

// const n = Number(prompt("Введіть число"));

// for(let i = 1; i < n; i += 1) {
//     if(n > 100) {
//         console.log("Введіть число по меньше ато компухтеру буде бобо");
//         break;
//     }
//     console.log(i);
// }

const n1 = 5;
const answer = 0;
let result = 0;

while(n1 > answer) {
    result += 1;
    if(result >= n1) {
        break;
    }
    console.log(result)
}

console.log("Завдання 4 виконано");


//Завдання 5
//За допомогою циклу while вивести в консоль всі числа від 1 до 20, крім чисел, кратних 3. Якщо зустрінете число, кратне 3, цикл повинен продовжити виконання за допомогою оператора continue.

for(let i = 1; i <= 20; i+= 1) {
    if (i % 3 === 0) {
        continue
    }
    console.log(i)
}

console.log("Завдання 5 виконано");