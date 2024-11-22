class Person {
  constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
  }

  greeting() {
      console.log(`Hello ${this.name}`);
  }

  howOld() {
      console.log(this.name, 'is', this.age, 'years old');
  }

  howOldPlusDays(days) {
      const newAge = this.age + Number(days/365);
      console.log(this.name, 'is', newAge, 'years old in ',days,'daysP');
  }

}

const a = new Person("Dave", 53, "Male");
const b = new Person("Aland",19,"They");
const c = new Person("Ollie",17,"Male");
console.log(a, b ,c)