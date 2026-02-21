const celsius = Number(prompt("Введіть температуру за цельсієм в вашому місті"));
console.log(celsius + "C")

const fahrenheit = Number(prompt("Введіть температуру за форенгейтом в вашому місті"));
console.log(fahrenheit + "F");

const celsiusAnswer = (celsius * 9/5) + 32;
alert("Конвертірока пройшла успішно: " + celsiusAnswer + " Градуса за форенгейтом");
console.log(celsiusAnswer + "F");


const daysInMonth = Number(prompt("Введіть кількість днів в місяці"));

const hoursInMonth = daysInMonth * 24;
alert("Годин в місяці: " + hoursInMonth);
console.log(hoursInMonth + " hours");

const minutsInMonth = hoursInMonth * 60;
alert("Хвилин в місяці: " + minutsInMonth);
console.log(minutsInMonth + " minuts");


const health = 100;
console.log(health + " hp");

const energy = 100;
console.log(energy + " En");

const damage = health - Number(prompt("Введіть кількість урона"));
console.log(damage + " hp");

const fatigue = energy - Number(prompt("Введіть дистанцію"));
console.log(fatigue + " En");


const totalPrice = Number(prompt("Введіть ціну"));

const discountedPrice = totalPrice * 0.10;
console.log(discountedPrice + " Dollars");


const floatNumber = 12.78;
const roundedDown = Math.floor(floatNumber);
console.log(roundedDown);


const floatString = "45.67";
const parsedFloat = parseFloat(floatString);
console.log(parsedFloat);


const intString = "123";
const parsedInt = parseInt(intString);
console.log(parsedInt);


const number = 16;
const sqrtNumber = Math.sqrt(number); 
console.log(sqrtNumber);


const integer = 42;
const convertedInt = toString(integer)
console.log(convertedInt);

const stringNumber = "256";
const convertedString = parseInt(stringNumber)
console.log(convertedString);

