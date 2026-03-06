class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getInfo() {
    return `${this.year} ${this.make} ${this.model}`;
  }

  startEngine() {
    return `${this.model}-ის ძრავა გაეშვა! 🔑`;
  }
}

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `გამარჯობა, ჩემი სახელია ${this.name}!`;
  }

  haveBirthday() {
    this.age++;
    return `${this.name}-ს დაბადების დღე! ახლა ${this.age} წლისაა 🎂`;
  }
}

const person = new Person("გიორგი", 16);
console.log(person.haveBirthday());
console.log(person.haveBirthday());
console.log(person.greet());

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getInfo() {
    return `${this.name}: ${this.price}₾`;
  }

  applyDiscount(percent) {
    this.price = this.price * (1 - percent / 100);
    return `${this.name}-ზე ${percent}% ფასდაკლება! ახალი ფასი: ${this.price}₾`;
  }
}

const laptop = new Product("ლეპტოპი", 2500);
console.log(laptop.getInfo());
console.log(laptop.applyDiscount(20));
console.log(laptop.getInfo());

class Vehicle {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  describe() {
    return `${this.brand} მოძრაობს ${this.speed} კმ/სთ სიჩქარით`;
  }
}

class ElectricCar extends Vehicle {
  constructor(brand, speed, range) {
    super(brand, speed);
    this.range = range;
  }

  describe() {
    return `⚡ ${this.brand} (ელექტრო) — ${this.speed} კმ/სთ, დამუხტვამდე ${this.range} კმ`;
  }

  charge() {
    return `${this.brand} იტენება... `;
  }
}

const car1 = new Vehicle("BMW", 200);
const car2 = new ElectricCar("Tesla", 250, 500);

console.log(car1.describe());
console.log(car2.describe());
console.log(car2.charge());

class Shape {
  constructor(color) {
    this.color = color;
  }

  getColor() {
    return `ფიგურის ფერი: ${this.color}`;
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  getArea() {
    const area = Math.PI * this.radius ** 2;
    return `წრის ფართობი: ${area.toFixed(2)}`;
  }
}

class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }

  getArea() {
    return `მართკუთხედის ფართობი: ${this.width * this.height}`;
  }
}

const c = new Circle("წითელი", 5);
const r = new Rectangle("ლურჯი", 4, 6);

console.log(c.getColor());
console.log(c.getArea());
console.log(r.getColor());
console.log(r.getArea());

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getDetails() {
    return `სახელი: ${this.name}, ხელფასი: ${this.salary}₾`;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  getDetails() {
    return super.getDetails() + `, განყოფილება: ${this.department}`;
  }

  giveRaise(amount) {
    this.salary += amount;
    return `${this.name}-ს ხელფასი გაიზარდა ${amount}₾-ით! ახალი ხელფასი: ${this.salary}₾`;
  }
}

const emp = new Employee("გიო", 2000);
const mgr = new Manager("მარიამი", 4000, "IT");

console.log(emp.getDetails());
console.log(mgr.getDetails());
console.log(mgr.giveRaise(500));
console.log(mgr.getDetails());
