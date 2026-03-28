const user = "Artem";
// const user1 = "Nazar";
// const user2 = "Arsen";

const users = ["Artem","Nazar","Arsen"];

console.log(user[0]);
console.log(users.length);
console.log(users[1]);
users[users.length] = "Petro";

console.log(users);


const grades = [];

while (grades.length < 30) {
    grades.push(Math.floor(Math.random() * 20));
}
let summe = 0;
for(let i = 0; i < grades.length; i++) {
    summe += grades[i];
} 
console.log(summe);
// console.log(grades);

const moyenne = Math.round(summe / grades.length);
console.log(moyenne);

