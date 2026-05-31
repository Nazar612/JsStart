const image600x400 = document.querySelector(".class34_img");
console.log(image600x400);

image600x400.src = "https://tse2.mm.bing.net/th/id/OIP.qg3PJatZnJyesC-_CJDjJQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"

const elements = {
    ul: document.querySelector(".class34_list"),
    input: document.querySelector(".class34_input"),
    input2: document.querySelector(".class34_input2"),
    p: document.querySelector(".class34_text")
};

const firstLi = elements.ul.firstElementChild;
const secondLi = firstLi.nextElementSibling;
console.log(secondLi);

console.log(elements.input.getAttribute("data-max"));
console.log(elements.input.dataset.max);

const inputId = elements.input2.id
console.log(inputId);

elements.p.textContent = inputId;



const charactersData = [
  {
    id: 1,
    name: "Uther",
    role: "Paladin",
    level: 80,
    faction: "Alliance",
    isOnline: true
  },
  {
    id: 2,
    name: "Geralt",
    role: "Witcher",
    level: 100,
    faction: "Neutral",
    isOnline: false
  },
  {
    id: 3,
    name: "Valeera",
    role: "Rogue",
    level: 80,
    faction: "Horde",
    isOnline: true
  },
  {
    id: 4,
    name: "Rimuru",
    role: "Lord",
    level: 99,
    faction: "Jura Tempest",
    isOnline: true
  }
];

const gerald = charactersData.find((character) => character.id === 2);
console.log(gerald);

function gerald2(data) {
    const h1 = document.createElement("h1");
    h1.textContent = data.name;
    console.log(h1);
    h1.classList.add("class34_heroName");
    document.body.append(h1)

    const p = document.createElement("p");
    p.textContent = "level: " + data.level;
    console.log(p);
    p.classList.add("class34_heroLevel");
    p.style.color = 'red'
    document.body.append(p)
};
gerald2(gerald)
