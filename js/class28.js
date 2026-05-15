const students = [
  { id: 1, name: "Ivan", age: 14, score: 78, isOnline: true },
  { id: 2, name: "Anna", age: 15, score: 92, isOnline: false },
  { id: 3, name: "Mark", age: 14, score: 60, isOnline: true },
  { id: 4, name: "Sofia", age: 16, score: 88, isOnline: true },
  { id: 5, name: "Oleg", age: 15, score: 45, isOnline: false },
];

const namesSt = students.map((student) => student.name)
console.log(namesSt);

const onlineStudents = students.filter((student) => student.isOnline);
console.log(onlineStudents);

const studentsOnlineNames = students.filter((student) => student.isOnline).map((student) => student.name);
console.log(studentsOnlineNames);



const users = [
    {id:1, name:"name", age:20, friend: true,},
    {id:2, name:"name1", age:23, friend: false,},
    {id:3, name:"name2", age:27, friend: true,},
    {id:4, name:"name3", age:30, friend: false,},
];
// Знаходить перше співпадіння за умовою. Тобто повертає тільки один об'єкт
const friend = users.find((user) => user.friend);
console.log(friend);

const bestOfClass = students.find((best) => best.score > 90);
console.log(bestOfClass);

const statusAdd = students.map((student) => {
    return {...student, testResult: student.score > 50?"okay":"false" }
});

console.log(statusAdd);


//Тернарний оператор ? ставиться в кінці:
//? = if
//: = else
//Записується condition ? --- : ---

const isOnline = users[0].friend ? "Ця людина друг" : "Ця людина не друг"


//Повертає boolean. Перевіряє чи УСІ елементи масиву відповідають умові
const checkUserAge = users.every((user) => user.age >= 23);
console.log(checkUserAge);

//some - Повертає boolean. Перевіряє чи ХОЧА Б ОДИН елемент масиву відповідає умові. 
//Використовують для перевірок на унікальність, якщо повертає true значить у масиві вже є такий елемент
const uniqueUser = users.some((user) => user.age >= 23);
console.log(uniqueUser);

const vacances = students.every((student) => student.score >= 50);
console.log(vacances);

const studentLess50points = students.find((student) => student.score < 50);
console.log(studentLess50points);