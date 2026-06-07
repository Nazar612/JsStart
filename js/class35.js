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

const elements = {
    moviesList: document.querySelector(".class35_list"),
    list: document.querySelector(".class35_InnerList"),
}

function createLi() {
    movies.map((movie) => {
        const movieLi = document.createElement("li");
        const title = document.createElement("h2");
        const year = document.createElement("p");

        title.textContent = movie.title;
        year.textContent = movie.year;
        movieLi.append(title, year);
        elements.moviesList.append(movieLi)
        })   
};
const posts = [
  { id: 1, title: "Привіт світ" },
  { id: 2, title: "JS" },
  { id: 3, title: "рендер через JS" },
  { id: 4, title: "два шляхи" },
  { id: 5, title: "innerHTML" },
  { id: 6, title: "insertAdjacentHtml" },
];

createLi()
const markup = posts.map(({id, title}) => {
    return `<li class="li" id="${id}">
        <h2 class="${title}" id="post"></h2>
    </li>`;
}).join(" ");
// innerHTML видаляє вміст елементу повністю на якому ви його викликаєте та рендерить туди все що ви пишете пiсля =
// document.body.innerHTML = "";

const users = [
  {
    id: 1,
    name: "Jack",
    age: 41,
    role: "Student",
  },
  {
    id: 2,
    name: "Anna",
    age: 15,
    role: "FE",
  },
  {
    id: 3,
    name: "Max",
    age: 16,
    role: "Student",
  },
  {
    id: 4,
    name: "Kate",
    age: 14,
    role: "Student",
  },
  {
    id: 5,
    name: "John",
    age: 25,
    role: "Backend",
  },
];

const espace = users.map(({id, name, age, role}) => {
    return `<li class="class35_newInnerList_li" id="${id}">
        <p class="li_text">name: ${name}</p>
        <p class="li_text">age: ${age}</p>
        <p class="li_text">role: ${role}</p>
    </li>`
}).join(" ");

elements.list.innerHTML = espace;
console.log(espace);

const names = movies.map(({title, year, id}) => {
    return `<li class="movieLi" id="${id}">
    <p class="thing">title: ${title}</p>
    </li>`
}).join(" ")
console.log(names);
elements.moviesList.innerHTML = moviesNames
