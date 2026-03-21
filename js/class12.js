// У грі є рівні.
// Користувач вводить:

// Скільки рівнів пройти?
// Програма повинна:
// Вивести номер кожного рівня
// Якщо рівень 5 — показати бонус

// const levelAsk = Number(prompt("Скільки рівнів ви хочете пройти?"));

// let coins = 0;
// let difficulty = "easy";

// for (let i = 1; i <= levelAsk; i += 1) {
//     coins += 5;
//     console.log(coins);
//     if(i % 5 == 0) {
//         console.log("Bonus level");
//         difficulty = "hard";
//         continue;
//     }
//     coins += 10;
// }



// let code;
// do {
//     code = prompt("Введи PIN");
//     if (code != "1111") {
//         alert("НЕПРАВИЛЬНО");
//         }
// } while (code != "1111");

// alert("Ви розблокували телефон, радійте");



// const trueLogin = "artem";
// const truePassword = 1234;
 
// let login;
// let password;
// do {
//     login = prompt("Введіть логін").toLowerCase();
//     password = prompt("Введіть пароль").toLowerCase();
//     if(login != trueLogin && password != truePassword){
//         console.log("Не правильно")
//     }
// } while (login != trueLogin && password != truePassword);

// alert("Все правильно, ти увійшов")




//Вивести в консоль всі парні числа від 2 до 20 за допомогою циклу for. Якщо число парне, пропустити його за допомогою continue.

for(let i = 2; i <= 20; i+=1 ) {
    if(i % 2 != 0) {
        continue;
    }

    console.log(i);
}
