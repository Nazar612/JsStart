const result = 5 + 5 + "5";
console.log(result);
console.log(typeof result);

const email = "nazarstovba300@gmail.com";
const emailVerif = email.length; email.endsWith(".com");

if (email.includes('@')) {
    alert("Це gmail");
}
console.log(emailVerif);

const my = "my";
const name = "name";
const is = "is";
const viktor = "Viktor";
const fullName = `${my} ${name} ${is} ${viktor}`;
console.log(fullName);

const userName = prompt("Введіть ім'я");
const payment = 300;
alert(`Дякуємо, ${userName} До сплати ${payment} гривень`)