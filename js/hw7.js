//Завдання 1
// Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.

const numMassive = [2,15,5];
console.log(numMassive);
numMassive[1] = 10;
console.log(numMassive);

//Завдання 2
//Створити масив із трьох рядків. Додати до масиву ще одну рядків.

const strMassive = ["Atrem", "Alex", "Anton"];
strMassive[strMassive.length] = "Maxim";
console.log(strMassive);

//Завдання 3
//Створити скрипт який поверне суму всіх чисел в масиві.

const massive3 = [35, 25, 10];
let summe = 0;
for(i = 0; i < massive3.length; i++) {
    summe += massive3[i];
}
console.log(summe);

//Завдання 4
//Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.

const massive4 = [];
while (massive4.length < 4) {
    massive4.push(Math.round(Math.random() * 50));
}
for(i = 0; i < massive4.length; i++) {
    console.log(massive4[i]);
}

//Завдання 5
//Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.

const massive5 = ["ooooooo", "aaa", "iiiiii", "bbbbb", "c"];
for (i = 0; i < massive5.length; i++) {
    const counter = massive5[i];
    if (counter.length < 5) {
        continue;
    }
    console.log(counter)
    
}

//Завдання 6
//Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.

const massive6 = [];
while (massive6.length < 10) {
    massive6.push(Math.round(Math.random() * 1000));
}
console.log(massive6);
max = massive6[1];

for(i = 0; i < massive6.length; i++){
    const element = massive6[i];
    if (element > max) {
        max = element;
    }
 }
 console.log(max);

 //Завдання 7 
 //Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.

 const massive7 = [];
while (massive7.length < 10) {
    massive7.push(Math.round(Math.random() * 100));
}

for (i = 0; i < massive7.length; i++) {
    const counter = massive7[i];
    if (counter % 2 != 0) {
        continue;
    }
    console.log(counter);
}

