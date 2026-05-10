//Імперарпв6ий код
const numbers = [1, 2, 3, 4, 5]
const numbersXX = [];

for (const element of numbers) {
    const xxNumbers = element * 2;
    numbersXX.push(xxNumbers);
}
console.log(numbersXX);



//Декларативний код

//map це Метод массиву: Приймаж першим параметром колбек, який приймаж 3 параметра. Перебирає повнистю масив, повертає НОВИЙ масив тієї ж довжини але 

const doubledNumbers = numbers.map((value, index, array) => {
    console.log("value ", value);
    console.log("index ", index);
    console.log("array ", array);
});

const doubledNumbers = numbers.map(value => value * 2);

console.log(doubledNumbers);

//Закріплення

const randomNumbers = [10, 213, 23, 15, 50];
const numbersMoreThan30 = randomNumbers.filter((number) => number > 30);

const users = [
    {name: "Vika", age: 15},
    {name: "Oleg", age: 25},
    {name: "Sasha", age: 35},
]

const usersOver25 = users.filter((user) => user.age > 25)
console.log(usersOver25)

//forEach - замінник циклу for
const newArr = []
console.log(
    numbers.forEach((value, ind, arr) => {
    if(value > 1) {
        newArr.push(value)
    }
}),
);