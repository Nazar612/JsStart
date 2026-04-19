//Параметри це данні без яких функція не буде працювати
//Аргументи це данні які ми передаємо при викликі фунції замість параметрів

//CallBack це фунція це функція яку ми передаємо аргументом
//Повтор матеріалу
function greetings (name, activity) {
    console.log(name , activity())
}

function greetingsWithFriend() {
    return "Привіт";
}


function greetingsWithDirector() {
    return "Добрий день";
}

greetings("Artem", greetingsWithDirector);
greetings("Kiril", greetingsWithFriend);

//Новий матеріал Об'єкти

const book = {
    title: "English is not easy",
    countOfPages: 400,
    author: "Author",
};
console.log(book.title);
// [] застосовуються там де є розрахунки або денамічний розрахунок значення, підстановка ключів або коли ви не можете поставити крапку з певних причин
book[10 - 5] = 5;


book.author = "Good Author"

console.log(book)

const chaska = {
    color: "Orange",
    sizeMl: 500,
    origin:"France",
    material:"Keramika",
    getInfo(){
        return `У нас є чашка з ${chaska.material} вона ${chaska.color} кольору, та має вмістивість ${chaska.sizeMl} Ml`
    }
}
console.log(chaska.getInfo());

