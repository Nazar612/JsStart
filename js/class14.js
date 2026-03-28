//max
//min
//middle

// const sales = [300,1000,700,2000,500];
// console.log(Math.max(...sales));
// sales[0] = 300
// let max = sales[0]

// for(let i = 1; i < sales.length; i++) {
//     const element = sales[i];
//     console.log(element)
//     if (element > max) {
//         max = element;
//     }
// }

const oooo = [250, 750, 500, 20, 400 , 1000, 890];
let max = oooo[0];
let middle = oooo[1];

for (let i = 1; i < oooo.length; i++) {
    const element = oooo[i];
    if (element > max) {
        middle = max;
        max = element; 
    } else if (element != max && element > middle) {
        middle = element;
    }
}

console.log(max);
console.log(middle);
