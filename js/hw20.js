// Завдання 1

// Створіть слайдер на сторінці, який показує зображення. При переміщенні слайдера виконуйте деякі дії, наприклад, змінюйте розмір зображення. Використайте debounce для того, щоб ці дії виконувалися не занадто часто при швидкому переміщенні слайдера.


const elements = {
    slider_increase: document.querySelector("#slider_increase"),
    imageOnIncrease: document.querySelector("#imageOnIncrease"),
    
    box: document.querySelector("#box"),
};
function increaseImg(e) {
    let value = e.target.value;
    elements.imageOnIncrease.style.width = value + "%";
}
elements.slider_increase.addEventListener("input", _.debounce(increaseImg, 100));


// Завдання 2

// Потрібно забезпечити плавне переміщення об'єкту при русі мишкою. Рішення: використовуйте метод debounce з бібліотеки lodash. Встановіть час затримки в мілісекундах, наприклад 100мс, і передайте функцію, яка буде виконуватися при переміщенні мишкою.

let x;
let y;

function onMove(e) {
    x = e.pageX;
    y = e.pageY;
    elements.box.style.left = x + "px";
    elements.box.style.top = y + "px";
    console.log(e);
}
document.addEventListener("mousemove", _.debounce(onMove, 100));


