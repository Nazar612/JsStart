const elements = {
    form: document.querySelector(".form"),
    name_input: document.querySelector("#name-input"),
    name_output: document.querySelector("#name-output"),
    validation_input: document.querySelector("#validation-input"),
    font_size_control: document.querySelector("#font-size-control"),
    text: document.querySelector("#text"),
};

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
//change працює з чекбоксами та радіо кнопками
elements.name_input.addEventListener("blur", (e) => {
    const eventTargetValue = e.target.value
     elements.name_output.textContent = eventTargetValue; 
    if(eventTargetValue.length === 0) {
        elements.name_output.textContent = "незнайомець"
    }
    console.log(e.target.value);
})

elements.validation_input.addEventListener("blur", (e)=> {
    if(e.target.value.length < 6) {
        elements.validation_input.style.borderColor = "#f44336"
    }else{
        elements.validation_input.style.borderColor = "#4caf50"
    }
});

elements.font_size_control.addEventListener("input", (e)=> {
    elements.text.style.fontSize = e.target.value + "px"
})