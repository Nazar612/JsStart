const number1 = Number(prompt("введіть число"));
const number2 = Number(prompt("введіть наступне число"));
alert(number1 + number2);

console.log(Math.floor(Math.random() * 100 + 1));

console.log(Math.random() * 100 + 1)

const price = 25.123125676542;
console.log(price.toFixed(2)) // метод округлення який завжди залишає дві цифри(в цьому прикладі) після коми (Він перетворює number в string)

Math.ceil()// Заокруглити в більшу сторону
Math.floor()// Заокруглити в меньшу сторону
Math.round()// Заокруглити за правилами математики









const randomNum = (Math.floor(Math.random() * 10 + 1));

if (randomNum >= 5) {
    alert("Все добре")
} else {
    alert("Все погано")
}
console.log(randomNum);


// parseFloat();
// parseInt();

console.log(parseInt("10 a"));//Відрізає всі зайві елементи
console.log(parseInt("10.99 aasdsdw"))
console.log(parseInt("a10.99 aasdsdw"))
 //Якщо перший введений елемент не число, видасть NaN

console.log(parseFloat("10.99dasdwas"))//Робе теж заме що і parceInt тільки з дробами

console.log(Math.min(1 , 5 , 10));
console.log(Math.max(1 , 5 , 10));

const radius = 5;
console.log(Math.PI * radius ** 2);