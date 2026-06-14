const tenderScreenItems = [
  { 
    id: 1, 
    title: "LED Панель P3.91 (500x500mm)", 
    quantity: 40, 
    unitPrice: 15000, 
    required: true 
  },
  { 
    id: 2, 
    title: "Відеопроцесор NovaStar", 
    quantity: 1, 
    unitPrice: 45000, 
    required: true 
  },
  { 
    id: 3, 
    title: "Комплект комутації (Power/Data)", 
    quantity: 1, 
    unitPrice: 8000, 
    required: false 
  }
];

const tankModels = [ { id: 1, name: "Maus", tier: 10, type: "heavy", nation: "germany" }, { id: 2, name: "T-34", tier: 5, type: "medium", nation: "ussr" }, { id: 3, name: "Leopard 1", tier: 10, type: "medium", nation: "germany" }, { id: 4, name: "IS-7", tier: 10, type: "heavy", nation: "ussr" }, { id: 5, name: "AMX 50 B", tier: 10, type: "heavy", nation: "france" } ];


const movies = [
  {
    id: 1,
    title: "Interstellar",
    year: 2014,
  },
  {
    id: 2,
    title: "Inception",
    year: 2010,
  },
  {
    id: 3,
    title: "Avatar",
    year: 2009,
  },
  {
    id: 4,
    title: "Dune",
    year: 2021,
  },
];

const posts = [
  { id: 1, title: "Привіт світ" },
  { id: 2, title: "JS" },
  { id: 3, title: "рендер через JS" },
  { id: 4, title: "два шляхи" },
  { id: 5, title: "innerHTML" },
  { id: 6, title: "insertAdjacentHtml" },
];

const elements = {
    tvList: document.querySelector(".class36_list"),
    tanksList: document.querySelector(".tanchiki"),
    class1: document.querySelector(".class"),
};

const generateData = tenderScreenItems.map(({id, title, quantity, unitPrice, required}) => {
    return `<li class="class36_list_li" id="${id}">
        <p class="li_text">Title: ${title}</p>
        <p class="li_text">Quantity: ${quantity}</p>
        <p class="li_text">UnitPrice: ${unitPrice}</p>
        <p class="li_text">Required: ${required}</p>
    </li>`
}).join(" ");

elements.tvList.innerHTML = generateData;
elements.tvList.style.marginBottom = "30px"
console.log(generateData);

const generateTanksData = tankModels.map(({name, tier, type, nation, id}) => {
    return `<li class="tanchiki_li" id="${id}">
        <p class="tanchiki_text">Name: ${name}</p>
        <p class="tanchiki_text">Tier: ${tier}</p>
        <p class="tanchiki_text">Type: ${type}</p>
        <p class="tanchiki_text">Nation: ${nation}</p>
    </li>`
}).join(" ");

elements.tanksList.innerHTML = generateTanksData;
console.log(generateTanksData);

//Новий матеріал

const markup = posts.map(({id, title}) => {
    return `<li class="li" id="${id}">
        <h2 class="(" id="post">${title}</h2>
    </li>`;
}).join(" ");

console.log(markup);

elements.tvList.insertAdjacentHTML("beforeend", markup);

const ticketsInfo = [ { id: 1, from: "Paris", to: "Warsaw", date: "2026-06-08T08:30:00Z", price: 120, currency: "EUR", type: "flight" }, { id: 2, from: "Lyon", to: "Krakow", date: "2026-06-08T14:15:00Z", price: 85, currency: "EUR", type: "bus" }, { id: 3, from: "Nice", to: "Warsaw", date: "2026-06-09T09:00:00Z", price: 150, currency: "EUR", type: "flight" }, { id: 4, from: "Paris", to: "Wroclaw", date: "2026-06-09T18:45:00Z", price: 65, currency: "EUR", type: "bus" }, { id: 5, from: "Marseille", to: "Gdansk", date: "2026-06-10T11:20:00Z", price: 110, currency: "EUR", type: "flight" }, { id: 6, from: "Paris", to: "Krakow", date: "2026-06-10T22:00:00Z", price: 90, currency: "EUR", type: "bus" }, { id: 7, from: "Toulouse", to: "Warsaw", date: "2026-06-11T07:40:00Z", price: 135, currency: "EUR", type: "flight" }, { id: 8, from: "Lille", to: "Poznan", date: "2026-06-11T16:30:00Z", price: 55, currency: "EUR", type: "bus" }, { id: 9, from: "Paris", to: "Lodz", date: "2026-06-12T09:10:00Z", price: 105, currency: "EUR", type: "train" }, { id: 10, from: "Bordeaux", to: "Warsaw", date: "2026-06-12T13:50:00Z", price: 140, currency: "EUR", type: "flight" } ];

const insertInside = ticketsInfo.map(({id, from, to, date, type}) => {
    return `<li class="variation" id="${id}">
    <p class="ticket">From: ${from}</p>
    <p class="ticket">To: ${to}</p>
    <p class="ticket">Date: ${date}</p>
    <p class="ticket">Type: ${type}</p>
</li>`
}).join(" ");

elements.tanksList.insertAdjacentHTML("afterbegin", insertInside)