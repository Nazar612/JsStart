const inventory = [
  {
    id: "i1",
    name: "Plasma Sword",
    category: "weapon",
    price: 1200,
    weight: 4.5,
    rarity: "epic",
    inStock: true,
    damage: 75,
  },
  {
    id: "i2",
    name: "Nano Armor",
    category: "armor",
    price: 2000,
    weight: 12,
    rarity: "legendary",
    inStock: false,
    defense: 120,
  },
  {
    id: "i3",
    name: "Health Potion",
    category: "consumable",
    price: 50,
    weight: 0.5,
    rarity: "common",
    inStock: true,
    effect: "heal",
  },
  {
    id: "i4",
    name: "Energy Shield",
    category: "armor",
    price: 800,
    weight: 6,
    rarity: "rare",
    inStock: true,
    defense: 60,
  },
  {
    id: "i5",
    name: "Quantum Dagger",
    category: "weapon",
    price: 950,
    weight: 2,
    rarity: "rare",
    inStock: true,
    damage: 55,
  },
  {
    id: "i6",
    name: "Mana Elixir",
    category: "consumable",
    price: 120,
    weight: 0.3,
    rarity: "common",
    inStock: false,
    effect: "mana",
  },
  {
    id: "i7",
    name: "Dragon Helm",
    category: "armor",
    price: 1500,
    weight: 8,
    rarity: "epic",
    inStock: true,
    defense: 90,
  },
  {
    id: "i8",
    name: "Photon Blaster",
    category: "weapon",
    price: 2500,
    weight: 5,
    rarity: "legendary",
    inStock: true,
    damage: 110,
  },
  {
    id: "i9",
    name: "Teleport Scroll",
    category: "consumable",
    price: 300,
    weight: 0.1,
    rarity: "rare",
    inStock: true,
    effect: "teleport",
  },
  {
    id: "i10",
    name: "Ancient Relic",
    category: "artifact",
    price: 5000,
    weight: 3,
    rarity: "legendary",
    inStock: false,
  },
  {
    id: "i11",
    name: "Shadow Cloak",
    category: "armor",
    price: 1100,
    weight: 3,
    rarity: "epic",
    inStock: true,
    defense: 70,
  },
  {
    id: "i12",
    name: "Toxic Grenade",
    category: "weapon",
    price: 400,
    weight: 1.2,
    rarity: "common",
    inStock: true,
    damage: 35,
  },
];

const bestRarityItem = inventory.find((item) => {
    return item.rarity === 'legendary'
});
console.log(`${bestRarityItem.name} - ${bestRarityItem.rarity}`);

inventory.forEach((element) => {
    console.log(`${element.name} - ${element.price}`);
});


const totalInventoryPrice = inventory.reduce((acc, item, index, array,) => {
    return acc + item.price;
},0);
console.log(totalInventoryPrice);

const armor = inventory.filter((item) => {
    return item.category === 'armor'
}).sort((a, b) => {
    return b.defense - a.defense
}).forEach((item) => {
    console.log(`${item.name} - ${item.price} - ${item.rarity}` );
});



//Шокуюча новина!!!!! .SORT() використовується за замовчуванням в браузерах
const strings = ["b","a","e","i","y"];

console.log(
    inventory.map((item) => {
        return item.name;
    })
    .sort(),
);


const copyObjectMassive = [...inventory].sort((a, b) => {
    return a.name.localeCompare(b.name);
});
console.log(copyObjectMassive); 