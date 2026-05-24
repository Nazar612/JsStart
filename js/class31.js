//blueprint - шаблон
//Завод з виробництва

class StandartPirats {
    constructor(name, weapon, inventory = [] ) {
        this.name = name;
        this.inventory = inventory;
        this.weapon = weapon;

    }

    voleur(item) {
        this.inventory.push(item)
    }
};

const pirat = new StandartPirats("Robert","gun");


// class StandartStudent{
//     constructor(hisClass, age, grades = 0,) {
//         this.hisClass = hisClass;
//         this.age = age;
//         this.grades = grades;
//     }

//     write() {
//         console.log("Студент пише");
//     }

//     doHomework() {
//         console.log(`${this.name}copleted his hw`);
//     }
// } 

// const student = new StandartStudent("B", 15, [15,20,14,11,12,14], );
// student.doHomework();
// console.log(student);

class CapitanPirate extends StandartPirats {
    constructor(name,weapon,inventory = ['map'], pet) {
        super(name,weapon,inventory);
        this.pet = pet;
    }

    readMap() {
        console.log(this.inventory[0]);
    }
};

const Jeck = new CapitanPirate("Jeck", "gun",['map'], "parrot");
Jeck.voleur("money");
Jeck.readMap();
console.log(Jeck);


class Student {
  constructor(name, lastname, age, money, grade) {
    this.name = name
    this.lastname = lastname
    this.age = age
    this.money = money
    this.grade - grade
  }

  studentWrite(paper, pen) {
    console.log('Студент пише')
  }
  doHomework() {
    console.log(`${this.name} ${this.lastname} зробив домашнє завдання`)
  }
}

const Petro = new Student('petro', 'petrov', 18, '100000$ 18₴', '1a')
Petro.doHomework()
console.log(Petro);

class RichStudentWhithLamborgini extends Student {
    constructor(name, lastname, age, money, grade, car, house, phone = "Iphone") {
        super(name, lastname, age, money, grade);
        this.car = car;
        this.house = house;
        this.phone = phone; 
    }

    doHomework() {
        console.log(`${this.name} ${this.lastname} Зробив домашнє завдання по спеціальному`);
    }
}

const vasily = new RichStudentWhithLamborgini("Vasily", "SemkyEst?", 190, "11290371927834$", "10293012984/1", "Lamborgini", "SpiderManHouse", "IphonePocoMaxPro" );
console.log(vasily);
Petro.doHomework();
vasily.doHomework();
