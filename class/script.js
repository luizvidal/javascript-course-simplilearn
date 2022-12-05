class Student {
    constructor(name, age, roll) {
        this.name = name;
        this.age = age;
        this.roll = roll;
    }

    Org() {
        return `My name is ${this.name}`
    }

    dob() {
        return `The year of birth of ${this.name} is ${2022 - this.age}`
    }

    static add(a, b) {
        return a + b;
    }

} 

class Student2 extends Student {
    constructor(name, age, roll, language, section) {
        super(name, age, roll);
        this.language = language;
        this.section = section;
    }
}

let Luiz = new Student2("Luiz", 20, 52, "JavaScript", "B");
console.log(Student2.add(1,2));