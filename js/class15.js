//split - розділяє рядок на массив
//join - склеює массив у рядок

const message = "reclam reclam";

const costPerWord = 10;

const messageLength =  message.split(" ").length;
// console.log("спліт без нічого", message.split(""));
const finalCost = costPerWord * messageLength;
console.log("Ціна", finalCost);
console.log(message + " вартує" + " " + finalCost)

//Завдання
const badMessage = "привіт, ти ***";
const goodMessage = " хороша людина";

let newMessage = ""; 

const massiveBadMessage = badMessage.split(" ");
const verification = badMessage.includes("*");

if (verification) {
    for ( let i = 0; i < massiveBadMessage.length; i++) {
        let counter = massiveBadMessage[i];
        console.log(counter);
        if(counter.includes("*")) {
            newMessage += goodMessage;
        } else {
            newMessage += counter; 
        }
    }
}

console.log(newMessage);


//shift - Видаляє елемент з массиву з початку

//unshift - Додає елементи до массиву з початку і повертає результатом роботи довжину нового массиву після додавання цих елементів

//push - Додає елемент до массиву до кінця

//pop -Видаляє елемент з массиву с кінця

const numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers.shift);
console.log(numbers);
console.log(numbers.unshift(1,2,3,4,5,6,7,8,9));
console.log(numbers);
console.log(numbers.push(1,2,3,4,5,6))
console.log(numbers);
console.log(numbers.pop());
console.log(numbers);
