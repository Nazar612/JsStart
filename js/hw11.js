//Завдання 1
// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Використайте cofirm() щоб поповнити рахунок або отримати готівку та prompt() щоб дізнатися сумму. Після проведення операції виводити повідомлення про залишок на рахунку. 

// const bankAccount = {
//     ownerName: "Cris",
//     accountNumber: 3333,
//     balance: 0,
//     deposit(){
//         const depositToBalance = Number(prompt("Введіть сумму на яку хочете поповнити свій рахунок"));
//         this.balance += depositToBalance;
//         return `Сумма на вашому рахунку дорівнює ${this.balance}$`
//     },

//     withdraw(){
//         const withdrawFromBalance = Number(prompt("Введіть сумму яку бажаєте зняти"));
//         this.balance -= withdrawFromBalance;
//         const confirmation = confirm("Бажаєте поповнити рахунок?")
//         if(confirmation) {
//             const depositToBalance = Number(prompt("Введіть сумму на яку хочете поповнити свій рахунок"));
//             this.balance += depositToBalance
//         }
//         return `Сумма на вашому рахунку дорівнює ${this.balance}$`
//     }
// }

// console.log(bankAccount.withdraw());
// console.log(bankAccount.deposit());


// Завдання 2

// Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з prompt(). Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки

// const temperatureChtotoTam = Number(prompt("Введіть температуру в цельсіях"))
// const weather = {
//     temperature: temperatureChtotoTam,
//     humidity:10,
//     windSpeed: 12.4,
//     celsiumMetr() {
//         if(this.temperature < 0) {
//             console.log("температура нижче 0 градусів Цельсія")
//             return true
//         }else if(this.temperature >= 0){
//             return false
//         }
//     }
// }
// console.log(weather.celsiumMetr());

//Завдання 3

// Створіть об’єкт "user", який буде мати властивості "name", "email", "password". Додайте метод "login", який буде перевіряти правильність введеного email та password. 
// const name = prompt("Введіть свій нік");
// const gmail = prompt("Введіть свій емейл");
// const password = prompt("Введіть свій пароль");

// const symbolMassive = ["!","@","#","$","%","^","&","*","(", ")", "_", "-"]

// const user = {
//     name: name,
//     gmail: "",
//     password: "",
//     login() {
//         const saveGm = gmail.toLowerCase();  
//         const savePs = password.toLowerCase();

//         if(saveGm.endsWith(".com") && saveGm.length < 50) {
//            return this.gmail += gmail;
//         }else{
//             return "wrong gmail"
//         }

//                for(let i = 0; i < symbolMassive.length; i++) {
//             if(savePs.length > 8 && savePs.includes(symbolMassive[i])) {
//                this.password += password;
//                return this.password
//             }else{
//                 return "wrong password"
//             }
// }
//     }
// }

// console.log(user.login())

//Завдання 4

// Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. Вивести значення властивостей в консоль. 
const directorName = prompt("Введіть ім'я директора");
const whichYear = prompt("Введіть рік виходу фільма");
const whichRating = Number(prompt("Введіть рейтинг фільму"));
const movie = {
    director: directorName,
    year: whichYear,
    rating: whichRating,
    goodMovieDetector() {
        if(this.rating <= 8){
            return false
        }else{
            return true
        }
    }
}

console.log(movie.goodMovieDetector())