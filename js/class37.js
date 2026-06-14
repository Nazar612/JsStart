//ПОДІЇ
//click, scroll, submit, focus,keydown, input
//.removeEventListener()- видаляє слухача подій
//.addEventListener()- додає слухача подій

    document.addEventListener('scroll', ()=>{
        console.log("Я скролю")
    })

    const elements = {
        mainInput: document.querySelector(".mainInput"),
    };

    //eventObject = e

    elements.mainInput.addEventListener("input", (eventObject)=> {
        // console.log("я ввів текст");
        // const attribute = elements.mainInput.getAttribute("value");
        // console.log(attribute);
        // console.log(elements.mainInput.value)

        console.log(eventObject.target.value);
        
    });

    document.addEventListener("keydown", (e)=> {
        console.log(e);
        console.log(e.code);
        if((e.ctrlKey || e.metaKey) && e.code === "KeyC"){
            console.log('ctrl + c pressed');
            e.preventDefault();

            document.body.style.backgroundColor = "black"
        };
    });