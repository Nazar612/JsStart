//Завдання 1. Лічильник подій 🔢

const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ['кіт', 'собака', 'миша', 'папуга', 'хомяк'];

// Функція countItems тут
function countItems(array, condition){ 
    let count = 0;
    for(let i = 0; i < array.length; i++) {
        element = array[i];
        condition(element)
        if(condition(element)) {
            count += 1
        }
    }
    return count
}
// Умови для перевірки:
const isEven = num => num % 2 === 0;
const isLarge = num => num > 10;
const isShort = word => word.length <= 3;

// Тестування
console.log('Парних чисел:', countItems(numbers, isEven));
console.log('Чисел більше 10:', countItems(numbers, isLarge));
console.log('Коротких слів:', countItems(words, isShort));