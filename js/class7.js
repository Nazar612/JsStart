//&&- Я піду гуляти якщо я помив посуд і зробив домашню роботу

//Я помив посуд
//зробив домашню роботу

//true, false - false
//false, true - false
//false, false - false
//true, true - true

// || - Я піду гуляти якщо я помив посуд або зробив домашню роботу

//true, false - true
//false, true - true
//true, true - true
//false, false - false

// ! - (робе все навпаки)
console.log(!true);
console.log(!false);

console.log("Hi" && "" && 20);
//0, none, undefined, NaN, '' i "" приводяться до false
//якзо значення false, зупиняеться
console.log(("Hi" && 20) || "") //
console.log("Hi" && "") //
console.log("Hi" || "") //
//Якщо є хоть 1 true, виконується далі

const user = "Artem";

if (user) {
    console.log(user)
}

const login = prompt('введіть ваш логін')
const logintrue = '123'
const password = prompt('введіть ваш пароль')
const passwordtrue = '321'
if (logintrue == login && passwordtrue == password) {
  console.log('вхід дозволено')
} else {
    console.log("Вхід не дозволено")
}


const money = 200;

if (money === 0) {
    console.log("Ви використовуєте безскоштовну версію фу");
} else if (money >= 100){
     console.log("Ви використовуєте ...");
}
else if (money >= 200){
     console.log("Ви використовуєте підписку норм");
}
else if (money >= 300){
     console.log("Ви використовуєте підписку круту");
} else {
    console.log("Такої підписки не існує")
}

const age = Number(prompt("Введіть ваш вік"))
if (age < 12) {
    alert("Доступ заборонено")
} else if(age >= 12 && age <= 15) {
    alert("доступ тільки з тренером.");
}
else if(age >= 16 && age <= 59) {
    alert("повний доступ.");
} else {
    alert("пільговий доступ.")
}