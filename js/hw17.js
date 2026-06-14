const elements = {
    categories: document.querySelector("#categories"),
    ingredientsList: document.querySelector("#ingredients"),
    gallery: document.querySelector("#gallery"),
    decrement: document.querySelector(".decrement"),
    increment: document.querySelector(".increment"),
    value: document.querySelector("#value")
};


//Завдання1
console.log(`У списку ${elements.categories.childElementCount} категорії`);

for(let i = 0; i < elements.categories.children.length; i++) {
    console.log(`Категорія: ${elements.categories.children[i].className}`);
    console.log(`Кількість елементів = ${elements.categories.children[i].childElementCount}`);
};

//Завдання2
const ingredientsMassive = [
 'Картопля',
 'Гриби',
 'Часник',
 'Помідори',
 'Зелень',
 'Приправи',
];

for(let i = 0; i < ingredientsMassive.length; i++) {
    const newLi = document.createElement("li");
    newLi.textContent = ingredientsMassive[i];
    elements.ingredientsList.append(newLi)
};

//Завдання3
const images = [
 {
  url:
   'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'White and Black Long Fur Cat',
 },
 {
  url:
   'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
 },
 {
  url:
   'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'Group of Horses Running',
 },
];

const galleryContent = images.map(({url, alt}) => {
    return `<li class="hw17_li"><img src="${url}" alt="${alt}" class="hw17_li_img"></li>`
}).join(" ");

elements.gallery.insertAdjacentHTML("beforeend", galleryContent);

//Завдання4
let counter = 0;
const buttonDecrementEvents = elements.decrement.addEventListener("click", (e) => {
    if(e.isTrusted === true) {
        counter -= 1;
        elements.value.textContent = counter;
    }
});

const buttonIncrementEvents = elements.increment.addEventListener("click", (e) => {
    if(e.isTrusted === true) {
        counter += 1;
        elements.value.textContent = counter;
    }
})