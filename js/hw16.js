// 1. // Створити розмітку з кнопкою та текстовим полем. За допомогою JavaScript отримати доступ до кнопки та текстового поля за їх ідентифікаторами та змінити текст на кнопці на значення текстового поля.

const elements = {
    firstButton: document.querySelector(".hw16_FirstButton"),

    firstButtonText: document.querySelector(".hw16_FirstButton_text"),

    notRicroll: document.querySelector(".hw16_img"),

    site: document.querySelector(".veryUsefulSite"),

    dayList: document.querySelector(".planiNaDen"),
};

elements.firstButton.textContent = "Hi"


// 2. // Створити розмітку з заголовком та зображенням. За допомогою JavaScript отримати доступ до зображення та змінити значення атрибута "src" на шлях до іншого зображення.

elements.notRicroll.src = "https://tse3.mm.bing.net/th/id/OIP.B-ThD-qylzynfJkRGB0aVQHaGW?rs=1&pid=ImgDetMain&o=7&rm=3";

// 3. // Створити розмітку з посиланням та зображенням. За допомогою JavaScript отримати доступ до посилання та змінити значення атрибута "href" на нову URL-адресу. Також отримати доступ до зображення та додати новий атрибут "alt" з описом зображення.
elements.site.style.display = "block";
elements.site.href = "https://blik.ua/health/3551-yak-pravilno-kakati-poradi-likariv-shodo-pokhodu-v-tualet-po-velikomu-yaki-ryatuyut-vid-gemoroyu-i-zakrepiv-shodnya";

// 4. // Створити розмітку зі списком елементів. За допомогою JavaScript отримати доступ до першого елемента списку та змінити його вміст на новий текст.

elements.dayList.firstElementChild.textContent = "Зробити домашку";