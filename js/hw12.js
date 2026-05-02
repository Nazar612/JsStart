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
const userCopy = {...user, mood:"happy"};
userCopy.hobby = "SkyDiving";
userCopy.premium = false;

const userCopyEntries = Object.entries(userCopy);

for(const [keys, entries] of userCopyEntries) {
 console.log(keys, ":", entries);
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

