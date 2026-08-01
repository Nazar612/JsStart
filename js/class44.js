let scrollCounter = 0;
//257

// function onscroll() {
//     scrollCounter += 1;
//     console.log(scrollCounter);
// }
// document.addEventListener("mousemove", _.throttle(onscroll, 300))

// const niceInp = document.querySelector("#veryNiceInp");

// function inputFunc(e) {
//     console.log(e.target.value);
// }
// niceInp.addEventListener("input", _.debounce(inputFunc, 500, {
//     // leading: true,
// }));

// Потрібно забезпечити виклик функції при завершенні переміщення мишкою. Використовуйте метод debounce з бібліотеки lodash. Встановіть час затримки в мілісекундах, наприклад 100мс, і передайте функцію, яку потрібно викликати при завершенні переміщення мишкою.
const box = document.querySelector("#box");

function mousemoveDeb(e) {
console.log(e);
    let x = e.offsetX
    let y = e.offsetY

    box.style.left = x - 150 + "px"
    box.style.top = y - 150 + "px"
};

document.addEventListener("mousemove", _.debounce(mousemoveDeb, 300))
