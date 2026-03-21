//while - виконується поки умова true


const choice = Number(prompt("До якого числа бажаєте порахувати?"));

let counter = 0;

while (counter <= choice) {
    console.log(counter)
    // counter = counter + 1;
    //counter += 1;
    counter++;
    //Можна записувати по різному. Є 3 варіанти, вони знаходятся вище
}


let moneyAsk = Number(prompt("Скільки в вас грошей?"));
while( moneyAsk > 0) {
   const product = prompt("Оберіть що хочете придбати(Молоко/ сік/ сухарики)");
   if (product === null) {
        console.log("Вийди атсюда розбійник");
        break;
    }
   const standartProduct = product.toLowerCase();
   switch (standartProduct) {
    case "сік":
        moneyAsk -= 50;
        console.log(`ви купили сік, в вас залишилось ${moneyAsk} грн`);
        break;

    case "молоко":
        moneyAsk -= 75;
        console.log(`ви купили молоко, в вас залишилось ${moneyAsk} грн`);
        break;

    case "сухарики":
        moneyAsk -= 100;
        console.log(`ви купили сухарики, в вас залишилось ${moneyAsk} грн`);
        break;

    default:
        console.log("Такого товару немає")
        break;
}
}
// з чого складається for

//for
// let i = 5 - лічильник
// i <= 50 - умова викононня
// i++ - крок - на скільки має збільшитись ваш лічильник після кожного виконання
for (let i = 5; i <= 50; i+= 5) {
    console.log(i);
}


const numberOfStudents = 10;
let totatGrade = 0;

for(let i = 1; i < numberOfStudents; i++ ) {
    const grade = parseFloat(prompt("Введіть оцінку студенту під номером " + i));
    totatGrade += grade;
    console.log(totatGrade);
}