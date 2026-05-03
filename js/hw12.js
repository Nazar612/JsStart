//Завдання 1

// Напиши скрипт, який, для об'єкта user, послідовно:
// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of
const user = {
    hobby: "",
    premium: true,
}
// const userCopy = {...user, mood:"happy"};
user.hobby = "SkyDiving";
user.premium = false;
user.mood = "happy";
console.log(user)


const userKeys = Object.keys(user);
console.log(userKeys);

for (const element of userKeys) {
    console.log(element, user[element] )
}

console.log(" ")
// Завдання 2

// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.

const object = {
    form: "square",
    color: "green",
    sizeM: 1,
    weigthM: 1,
}

function countProps(obj) {
    const objKeys = Object.keys(obj);
    let count = 0;
    for (const key in obj) {
        count += 1
    }
    console.log(count + " це кількість властивостей в цьому об'єкті")
}

countProps(object)
console.log(" ")

//Завдання 3

//Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".

const employers = {
    Maxim: 90,
    Atrem: 112,
    Vika: 123,
    Kiril: 321,
    Mark: 124,
};

function findBestEmployee(employees) {
    let maxExMade = "0";
    let nameOfBestEmployees = "";

    const employeesEntries = Object.entries(employees);
    for (const [key, value] of employeesEntries) {
        if(maxExMade < value) {
            maxExMade = value;
            nameOfBestEmployees = key;
        };
    };
     console.log(nameOfBestEmployees, maxExMade);
};

findBestEmployee(employers);
console.log(" ")

//Завдання 4

// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".

const employersSalary = {
    Maxim: 1600,
    Atrem: 1600,
    Vika: 1600,
    Kiril: 1600,
    Mark: 1600,
};

function countTotalSalary(employees) {
    let total = 0;

    const employeesEntries = Object.entries(employees);
    for (const [key, value] of employeesEntries) {
        console.log(key, value)
        total += value
    }
    // return total Не працює, тому використав console.log()
    console.log(`Загальна зарплата всіх працівників дорівнює ${total}$`)
}

countTotalSalary(employersSalary);


//Завдання 5

// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень певної властивості prop з кожного об'єкта в масиві.

// function getAllPropValues(arr, prop) {
// }
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроїд', price: 400, quantity: 7 },
  { name: 'Захоплення', price: 1200, quantity: 2 },
];

function getAllPropValues(arr, prop) {
    const result = [];

    for (const element of arr) {
        if (typeof element[prop] !== "undefined") {
            result.push(element[prop]);
        }
    }
    return result

}


console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []


//Завдання 6

//Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).

// Викличи функції для перевірки працездатності твоєї реалізації.

function calculateTotalPrice(allProdcuts, productsName, price, quantity) {
    let total = 0;
    for (const element of allProdcuts) {
        if(element[productsName]) {
            console.log(total = element[price] * element[quantity]);
        }
    }
}

calculateTotalPrice(products, "name", "price", "quantity")
