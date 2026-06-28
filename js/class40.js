const elements = {
    class40_input: document.querySelector("#class40_input"),
};

let step

elements.class40_input.addEventListener("wheel", (e)=>{
    const number = Number(e.target.value);
    console.log(number);
    if(e.deltaY < 0) {
        step = 1;
    }else{
        step = -1;
    };
    elements.class40_input.value = number + step
    console.log(number);
});

document.addEventListener("keydown", keydown);
function keydown(e) {
     const number = Number(e.target.value);
    console.log(e.code);
    console.log(e.key);

    if(e.code === "ArrowRight") {
        step = 5;
        elements.class40_input.value = number + step
    };
    if(e.code === "ArrowLeft") {
        step = -5;
        elements.class40_input.value = number + step
    };
};

document.addEventListener("mousemove", (e)=> {
    elements.class40_input.style.position = "absolute"
    elements.class40_input.style.left = e.clientX + "px"
    elements.class40_input.style.top = e.clientY + "px"
    elements.class40_input.style.transform = "translate(-50%, -50%)"
});

document.addEventListener("dblclick", (e)=> {
    console.log(e);
    elements.class40_input.style.position = "absolute"
    elements.class40_input.style.left = e.clientX + "px"
    elements.class40_input.style.top = e.clientY + "px"
    
    document.removeEventListener("mousemove", (e)=> {
    elements.class40_input.style.position = "absolute"
    elements.class40_input.style.left = e.clientX + "px"
    elements.class40_input.style.top = e.clientY + "px"
    elements.class40_input.style.transform = "translate(-50%, -50%)"})
})