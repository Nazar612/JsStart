class Student {
  constructor(name, lastname, age, money, grade, backpack = []) {
    this.name = name
    this.lastname = lastname
    this.age = age
    this.money = money
    this.grade = grade
    this._backpack = backpack
  }

  get backpack() {
    return this._backpack
  };

//   set backpack(thing) {
//     if(!this._backpack.includes(thing)) {
//         this._backpack.push(thing)
//     }
//   }
  studentWrite(paper, pen) {
    console.log('Студент пише')
  };
  doHomework() {
    console.log(`${this.name} ${this.lastname} зробив домашнє завдання`)
  };
  backpackAdd(thing) {
    this._backpack.push(thing);
  }
  backpackRemove(thing) {
    // if(this._backpack.includes(thing)) {
        const founded = this._backpack.indexOf(thing);
        if(founded != -1) {
        this._backpack.splice(founded, 1);    
        }
        console.log(this._backpack)
  }
};

const Vasya = new Student("Vasiliy", "Proper", 32, "32грн", [2,2,2,2,4])
Vasya.backpackAdd("pen")
console.log(Vasya.backpack);
Vasya.backpackRemove("pen")
console.log(Vasya.backpack)
