function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.showData = () => {
        console.log(name, age, sex)
    }
}

const person = new Person("Adrian", 15, "M");
person.showData()