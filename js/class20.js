//hoisting = всплиття
// badCalculator();
// function badCalculator(a = 0, b = 0){
//     return a + b;
// }

const hasSpecialSymbol = (password) => {
    const specialSymbols = "_!@#$%^&*()";
    for(let i = 0; i < specialSymbols.length; i++) {
        if(password.includes(specialSymbols[i])) {
            console.log(specialSymbols[i]);
            return true;
        }
    }
    
            return false;
}

const badCalculator = (a = 0, b = 0) => a + b;
console.log(badCalculator(5, 5));

const massiveElements = [1, 2 , 3 , 4 , 5,];
const callBackAction = (element) => {
    let massiveVide = [];
    for(let i = 0; i < element.length; i++) {
      let count = element[i]
      const asd = count * 10;
      massiveVide.push(asd);
    }
    return massiveVide;
}; 
const processRace = (array, action) => action(array);

console.log(processRace(massiveElements, callBackAction));