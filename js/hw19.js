const elements = {
    gallery: document.querySelector(".gallery"),
    image: document.querySelector(".image"),
    controls:document.querySelector("#controls"),
    controls_input:document.querySelector(".controls_input"),
    boxes: document.querySelector("#boxes"),
    delete: document.querySelector("[data-action='destroy']"),
    add: document.querySelector("[data-action='render']")
}

let scroll = 0;
let page = 1;
let score = document.createElement("p");
score.textContent = `${page}/${elements.gallery.children.length}`
document.body.prepend(score);
document.body.style.textAlign = "center";
document.addEventListener("keydown", (e)=> {
    if(e.code === "KeyD") {
        score.textContent = `${page -= 1}/${elements.gallery.children.length}`
        scroll += 320;
        for(let i = 0; i < elements.gallery.children.length; i++) {
    elements.gallery.children[i].style.transform = `translate(${scroll}px)`;
};
        // elements.gallery.style.transform = `translate(${scroll}px)`
    };
    if(e.code === "KeyA") {
        scroll -= 320;
        score.textContent = `${page += 1}/${elements.gallery.children.length}`
        for(let i = 0; i < elements.gallery.children.length; i++) {
    elements.gallery.children[i].style.transform = `translate(${scroll}px)`;
};
    };

    if(scroll <= -1920) {
        scroll = 320
        score.textContent = `${page = 0}/${elements.gallery.children.length}`
    }else if (scroll >= 320){
        scroll = -320
        score.textContent = `${page = 0}/${elements.gallery.children.length}`
    }
});


//Завдання 2
// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. При натисканні на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає 1 параметр amount — число. Функція створює стільки div, скільки вказано в amount і додає їх в div#boxes.

// Кожен створений div:

// Має випадковий rgb колір фону
// Розміри найпершого div — 30px на 30px
// Кожен наступний div після першого, повинен бути ширше і вище попереднього на 10px

// Створи функцію destroyBoxes(), яка очищає div#boxes.

function randomColor() {
            const r = Math.floor(Math.random() * 255);
            const g = Math.floor(Math.random() * 255);
            const b = Math.floor(Math.random() * 255);

            return `rgb(${r}, ${g}, ${b})`
        }

// function createBoxes(amount) {
    
//     };
let sizeIncrease = 0;
    elements.add.addEventListener("click", (e)=>{
        const object = [];
        const amount = elements.controls_input.value
        for(let i = 0; i < amount; i++ ) {
            let div = document.createElement("div")
            object.push({
                id: i,
                name: `div ${i}`,
                create: div, 
                backgroundColor: div.style.backgroundColor = randomColor(),
                height: div.style.height = 30 + sizeIncrease  + "px",
                width: div.style.width = 30 + sizeIncrease + "px",
            });

            sizeIncrease += 10
        };
        console.log(object);
        for (const element of object) {
                elements.boxes.append(element.create);
                console.log(element.create);
    }
    elements.controls_input.value = "   "
});

elements.delete.addEventListener("click", (e)=> {
    elements.boxes.innerHTML = "";
    sizeIncrease = 0;
})





