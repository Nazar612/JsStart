const emptyMassive = [];
for(let i = 0; i < 100; i++) {
    emptyMassive.push(i);
}
console.log(emptyMassive);


const sliceMassive = [1,2,3,4,5,6,7,8,9,10];
const indexOfTen = sliceMassive.indexOf(1);
if(indexOfTen !== -1) {
    const copyArr = sliceMassive.slice(indexOfTen, indexOfTen + 1);
    console.log(copyArr);
}

// indexOf працює так:

// let elementNumber = 0;
// for(let i = 0; i < sliceMassive.length; i++) {
//     if(number[i] === 10) {
//         elementNumber = i;
//     }
// }
// console.log(elementNumber);



const namesMassive = ["Nazar", "Vika", "Taras"];
const deleteElement = namesMassive.indexOf("Vika");
console.log(deleteElement);
if (deleteElement != -1) {
    console.log(namesMassive.slice(deleteElement, deleteElement + 1));
}

const nazar = namesMassive.splice(0, 1, "Artem");
console.log(namesMassive);
console.log(nazar);






// .splice() дозволяє відрізати значення

console.log(sliceMassive.splice(indexOfTen, 5, "a","b","c","d","e"));
console.log(sliceMassive);



