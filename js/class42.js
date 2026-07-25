const elements = {
    click_button: document.querySelectorAll(".click_button"),
    proMaxDiv: document.querySelector(".proMaxDiv"),
}

// elements.click_button.forEach(element => {
//     element.addEventListener("click", (e)=> {
//         console.log("Hello World!");
//     })
// });

elements.proMaxDiv.addEventListener("click", (e)=> {
    if(!e.target.classList.contains("click_button")) {
        throw new Error("You clicked on proMaxDiv)))))")
    }
    console.log(e.target);
}, {
    capture: false,
})

