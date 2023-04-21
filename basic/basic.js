class Person {
  // first thing that will run when you the class
  constructor(name, age) {
    // use this to declare a field
    this.name = name;
    this.age = age;
  }

  getName = () => {
    return this.name;
  };

  getAge = () => {
    return this.age;
  };
}

// constructor
// const person1 = new Person("kenneth", "22");
// don't do this
// console.log(person1.name);
// console.log(person1.getName());
// console.log(person1.getAge());

// const person2 = new Person("jose", "12");
// console.log(person2.getName());
// console.log(person2.getAge());

class House {
  // first thing that will run when you the class
  constructor(address, price, residents) {
    // use this to declare a field
    this.address = address;
    this.price = price;
    this.residents = residents;
  }

  // getter
  getAddress = () => {
    return this.address;
  };

  getPrice = () => {
    return this.price;
  };

  getResidents = () => {
    return this.residents;
  };

  // action
  addResidents = (resident) => {
    this.residents.push(resident);
  };
}

const kenneth = new Person("kenneth", "22");
const jose = new Person("jose", "19");

const house = new House("foo", "100000", [kenneth, jose]);
console.log(house.getResidents());

const angel = new Person("angel", "10000");
house.addResidents(angel);
console.log(house.getResidents());

// tutorial
// https://www.youtube.com/watch?v=GEuS0tfLfEY
