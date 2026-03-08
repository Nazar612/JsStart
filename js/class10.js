//Калькулятор знижок: Створіть змінну totalSum. Через switch перевірте тип клієнта ("student", "pensioner"). У кожному кейсі в окремому блоці {} оголосіть константу discount та виведіть фінальну суму.

const totalSum = "100";
const human = "pensioner"

switch (human) {
    case "student":{
        const discount = 0.2;
        const finalDiscount = totalSum * discount
        console.log(finalDiscount);}
        break;

        case "pensioner":{
        const discount = 0.4;
        const finalDiscount = totalSum * discount
        console.log(finalDiscount);}
        break;

    default:
        console.log(totalSum)
        break;
}

//Детектор сезонів: Напишіть switch, який приймає номер місяця. Для весняних місяців у блоці {} оголосіть змінну season = "Spring", для літніх — season = "Summer". Виведіть назву сезону в консоль всередині блоку.

const monthNumber = Number(prompt("Введіть номер місяця"));
switch (monthNumber) {
    case 9:case 10: case 11: {
        const season = "Осінь";
        console.log(season); 
    } 
        break;

case 12:case 1: case 2: {
        const season = "Зима";
        console.log(season); 
    } 
        break;

        case 3:case 4: case 5: {
        const season = "Весна";
        console.log(season); 
    } 
        break;

        case 6:case 7: case 8: {
        const season = "Літо";
        console.log(season); 
    } 
        break;

    default:
        console.log("Спробуйте знову")
        break;
}


//Перекладач кольорів: Створіть switch, що приймає назву кольору англійською ("red", "blue"). У кожному кейсі оголосіть локальну константу ukrName і виведіть переклад.

const colorTranslate = prompt("Введіть червоний або синій англійською мовою");
const normalizeColorTranslate = colorTranslate.toLowerCase();

switch (normalizeColorTranslate) {
    case "red":
        {const ukrName = "Червоний";
            console.log(ukrName);
        }
        break;

    case "blue":
        {const ukrName = "Синій";
            console.log(ukrName);
        }
        break;

    default:
        console.log("Введіть колір або синій, або червоний!!!")
        break;
}


//Тип файлу: Напишіть switch(extension). Якщо розширення "jpg" або "png", створіть блок і в ньому оголосіть const type = "image". Якщо "mp3", то type = "audio".

const file = "png";

switch (file) {
    case "jpg": case "png":
        {const type = "image"
            console.log(type);
        }
        break;

        case "mp3":
            {const type = "audio"
            console.log(type);
        }
        break;

    default:
        console.log("Невідомий файл")
        break;
}


//Конвертер одиниць: Напишіть switch для перетворення метрів у кілометри або сантиметри. В кожному кейсі використовуйте локальну змінну convertedValue для розрахунку.
const convert = Number(prompt("Введіть дистанцію"));

const unit = prompt("Введіть одиницю вимірювання");

switch (unit) {
    case "m":
        {const convertedValue = convert * 100
            console.log(convertedValue + "cm");
        }
        break;

        case "km":
        {const convertedValue = convert * 1000
            console.log(convertedValue + "m");
        }
        break;

    default:
        break;
}