const book = {
    title: "Meow",
    CountOfPages: 240,
    autor: "Cat",
}



const { title } = book;
console.log(book);
console.log(title);


const user = {
    name: "Artem",
    age: 99,
    hobby:"basketball",
    location:{
        x: 121241.1234,
        y: 312231.23,
        name:"Paris",
    }
}
const { name:userName, age, hobby, location:{x, y, name} } = user;
console.log(`Користувач ${userName} любе грати в ${hobby} в ${age} років`);
console.log(x, y, name)
