const book = {
    title:"Meow",
    subtitle:"mew",
    autor:"Cat",
    year:1722,
}

for(const key in book) {
    delete book[key]
}
console.log(book)

const corworker = {
    Artem: -9999,
    Viktoria: 5,
    Kiril: 10, 
}
let max = 0;
let bestCorworker = "";
for(const key in corworker) {
    console.log(key)
    const name = key;
    console.log(corworker[key])
    if(corworker[key] > max) {
        max = corworker[key];
        bestCorworker = name
    }
}

console.log(max, bestCorworker)