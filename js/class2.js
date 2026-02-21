const gmail = prompt("Чи бажаєте ви підключити підписку? Впишіть gmail")
console.log(gmail)
if (gmail.length > 0) {
    alert("Безкоштовний місяць активовано")
} else {
    alert("Ну все, жди бан")
}


let message;
console.log(typeof message);
const result = prompt("Яке повідомлення ви хочете відправити");

message = result;


let a = 10;

let b = a;

a = 20;

console.log (b, a);