const elements = {
    form: document.querySelector(".form"),
    name_input: document.querySelector("#name-input"),
    name_output: document.querySelector("#name-output"),
    square: document.querySelector(".square")
}

function change(e) {
console.log(e.target.defaultValue);
if(e.target.defaultValue === "white") {
    document.body.style.backgroundColor = "white"
};

if(e.target.defaultValue === "red") {
    document.body.style.backgroundColor = "red"
};

if(e.target.defaultValue === "green") {
    document.body.style.backgroundColor = "green"
}
};
elements.form.addEventListener("change", change);

elements.name_input.addEventListener("blur", (e) => {
    const eventTargetValue = e.target.value
     elements.name_output.textContent = eventTargetValue; 
    if(eventTargetValue.length === 0) {
        elements.name_output.textContent = "незнайомець"
    }
    console.log(e.target.value);
})
//Домашнє

function randomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`
};

elements.square.addEventListener("contextmenu", (e)=> {
    e.preventDefault();
    console.log(e);
    elements.square.style.backgroundColor = randomColor()
});
let counter = 0;
elements.square.addEventListener("dblclick", (e)=> {
    console.log(e);
    elements.square.style.transform = "scale(1.5)";
    counter += 1
    if(counter == 2) {
         elements.square.style.transform = "scale(1.0)";
         counter = 0;
    }
    
})