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


const onlyWeapon = (massive) => {
    return massive.filter((item) => item.category === "weapon").map((item) => item.price * 2);
};
console.log(onlyWeapon(inventory));


const users = [
    {id:1, name:"Artem", age:20, friend: true,},
    {id:2, name:"Petro", age:23, friend: false,},
    {id:3, name:"Alex", age:27, friend: true,},
    {id:4, name:"Harry", age:30, friend: false,},
];


//reduce()-працював як Калькулятором
const middleAge = users.reduce((acc, user, index, array) => {
    console.log(acc, user, index, array);
    console.log(acc);
    return acc + user.age
}, 0);
console.log(middleAge / users.length);

const totalWeight = inventory.reduce((acc, item, index, array) => {
    return acc + item.weight
},0)
console.log(totalWeight);

// sort - змінює початкові данні

const sortedUsers = [...users].sort((a,b) => {
    return a.name.localeCompare(b.name);
});

console.log(sortedUsers);