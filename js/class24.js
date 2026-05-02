const door = {
    material: "wood",
    size: 600,
    color: "white",
}

const keys = Object.keys(door);

for (const element of keys) {
    console.log(door[element]);
}

const values = Object.values(door)
console.log(values)

const entries = Object.entries(door)
for (const [key, keyValue] of entries) {
    console.log(key, keyValue);
}






const book1 = {...door, material: "Iron"}
console.log(book1)
// key value = Властивість

//Завбання

const phone = {
    brand: "xiaomi",
    color: "silver",
    screeSize: 480,
    battery: 27,
}

const phoneKeys = Object.keys(phone).length;
console.log(phoneKeys);


const products = {
    iceCream: 10,
    juice: 5,
};

const productsValuse = Object.values(products);
console.log(productsValuse);

let summa = 0; 

for (const element of productsValuse) {
    summa += element;
}

console.log(summa)






const corworker = {
    Artem: -9999,
    Viktoria: 5,
    Kiril: 10, 
}
let max = 0;
let bestCorworker = "";

const corworkerEntries = Object.entries(corworker);
console.log(corworkerEntries);

for (const [key1, value1] of corworkerEntries) {
    if(value1 > max) {
        max = value1;
        bestCorworker = key1;
    }
}

console.log(max, bestCorworker)