const string = "sdfasd";
const string1 = "sdfasd2";

const nickname = prompt("Введіть нікнейм");

// Конкатенація = (використання знаку + для поєднання рядків)
// =
//Інтерполяція = ``
console.log("Привіт, " + nickname);

console.log(`Привіт, ${nickname}`);



const nickname2 = prompt("напишіть своє ім'я");
const age = prompt("Введіть свій вік");
alert(`Моє ім'я ${nickname2}, і мені ${age}`);

const product = "М'ясо";
const price = "160грн";
console.log(product + " коштує " + price);

console.log(nickname.length);

console.log(nickname[0]);

const nickname3 = "Asfsf";

console.log(nickname3.includes("S"));


const badword = "banan"
const message = prompt("Оціни нашу сторінку");

if (message.includes(badword)) {
    alert("ayaya");
} else {
    alert("thanks");
}

//startsWith, endsWidth

const file = "DZ.zip";
console.log(file.endsWith(".zip"));

const gmail = prompt("Введіть email");
console.log(gmail.endsWith(".com") ,gmail.includes("@"))