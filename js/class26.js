const user = {
    name: "Nazar",
    age: 40,
    knowledge: ["Math", "French", "English"],
    location: {
        x:140,
        y:20,
        z:54,
    },
}

const book = {
    title: "meow",
    autor: "Cat",
}

const { age, location: { x:xLocation }, } = user;
// or
const { x } = location;
console.log(xLocation)



//Можна присвоєти значення за замовчуванням до доданого ключа або до вже існубчих в об'єкті
const { isOk = false, autor, ...rest } = book;
//Зберігає не вказані ключі об'кту в собі
const book1 = {...book,
    isOk: true,
    //Spread - розпилення
}

console.log(isOk);


//Диструктуризування массиву
const names = ["Artem", "Petro", "Abetka"];

const [name1, name2, name3] = names;

console.log(name1, name2, name3)
const bookEntries = Object.entries(book);

console.log(bookEntries);

for (const [key, value] of bookEntries) {
    console.log(key, value);
}



function sum ({artem, vika, kiril, ...rest}) {
    console.log(artem, vika, kiril);
    console.log(rest);
    // const {Artem, Vika, Kiril} = names;
    // console.log(Artem, Vika, Kiril);

    return artem + vika + kiril
}

console.log(sum({artem: 10, vika: 14, kiril: 20,Petro: 10,}, ))