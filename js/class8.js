const suma = 500 
let deliveryCost = 0 
if (suma >= 1000) {
    deliveryCost = 0 }
else if (suma >= 500) {
    deliveryCost = 100 }
else {
    deliveryCost = 200 }
console.log(deliveryCost);

//Тернарний оператор
//умова ? значення якщо true : значення якщо false

const randomNumber = Math.floor(Math.random() * 100);

if (randomNumber % 2 === 0) {
    console.log("Парне")
} else {
    console.log("Непарне")
}
console.log(randomNumber)
const evenNumber = randomNumber % 2 === 0 ? console.log("Парне") : console.log("Непарне")


const score = 93;
//Так робити не треба!
const grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : score >= 50 ? score <= 49 : "На перездачу";
console.log(grade);



const online = true;

const class1 = online == true ? console.log("Користувач в мережі") : console.log("Користувач офлайн")


const speed = 90;
const speedLimit = 80
if (speed > 60) {
    console.log("штраф 1000 грн")
} else if (speed > 120 && speed > speedLimit) {
    console.log("умри")
} else {
    console.log("тюрьма")
}