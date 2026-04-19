const chest = {
    goldСoins: 100,
    itemSword: {
        name: "Срібний меч",
        quality: "Норм",
    },

    criticalLuck(){
        this.goldСoins *= 2;  
        this.itemSword.quality = "Супер мега дупер айфон макс про";
        this.itemSword.name = "Вбивця драконів 3000";
        delete this.goldСoins
        return `Вам критично повезло і ви отримали ${this.itemSword.name} якістю ${this.itemSword.quality}`
    }
}
console.log(chest.criticalLuck());

function add(object, key, value) {
    object[key] = value;
    return object
}
const unluck = "Unluck"
add(chest, unluck, "Не повезло");
console.log(chest)