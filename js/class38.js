const elements = {
    class38_form: document.querySelector(".class38_form"),
    form_number: document.querySelector(".form_number"),
    form_gmail: document.querySelector(".form_gmail"),
    isolated: document.querySelector(".isolated"), 
    texxxxxxt: document.querySelector(".texxxxxxt"),
    veryNiceCursor: document.querySelector(".veryNiceCursor"),
};

elements.class38_form.addEventListener("submit", (e)=> {
    console.log(e);
    e.preventDefault();
    // console.log(elements.class38_form.elements.gmail.value);
    // console.log(elements.class38_form.elements.phone.value);

    console.log(elements.form_gmail.value);
    console.log(elements.form_number.value);
});

elements.isolated.addEventListener("blur", (e) => {
    let counter = 0;
    const detecter = e.target.value;
    const letters = "бдрнгв"
    for (const element of detecter) {
        if(letters.includes(element)) {
            counter += 1;
        };
    };

    if(counter < 6) {
        elements.texxxxxxt.textContent = "слово коротке";
        elements.texxxxxxt.style.color = "red";
    }else{
        elements.texxxxxxt.textContent = "слово велике";
        elements.texxxxxxt.style.color = "green";
    }
});






document.addEventListener("mousemove", (e)=> {
    elements.veryNiceCursor.style.left = e.clientX + "px";
    elements.veryNiceCursor.style.top = e.clientY +"px";
})