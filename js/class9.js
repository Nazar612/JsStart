// Розгалудження = розділення коду на декілька частин

const rating = Number(prompt("Оцініть фільм"));
if (rating < 5) {
    console.log("Кіно погане")
} else if ( rating < 7) {
    console.log("Ну типу на один раз");
} else if ( rating < 9) {
    console.log("Можна дивитись");
} else {
    console.log("Шедевр");
}


const water = prompt("напій?");

// key - зміна - це те що ми обрали(те що будемо порівнювати)
// case - випадок
switch (water) {
    case "cola":
        console.log("Видати колу");
        break;

    case "sprite":
        console.log("видати спрайт")
        break;

        case "pepsi":
        console.log("Видати пепсі")
        break;

    default:
        console.log("Ви зробили щось не зрозуміле, просто тицьніть під напоєм")
        break;
}


const expirience = Number(prompt("Скільки в вас досвіду?"));
let level = "";

if (expirience <= 100) {
    level = "Новачок";
} else if (expirience > 100 && expirience < 500) {
    level ="Мисливець";
} else {
    level ="Майстер";
}

switch (level) {
    case "Новачок":
        console.log("Вам надано зілля здоров'я")
        break;

        case "Мисливець":
        console.log("Вам надано сталевий меч")
        break;

        case "Майстер":
        console.log("Вам надано дракона")
        break;
    default:
        console.log("Надано гілка дерева")
        break;
}

//Глобальне бачення
const age = 18;
//Блокова область бачення {}
// {} коробка
if (age >= 18) {
    let level = "Новачок"
    console.log("Все ок тобі " + age + " років");
}

if (age > 30) {
    level = "Мисливець"
}