// const Employee = {
//     post: function () {
//         return "A softaware developer";
//     },
//     changeName: function (name) {
//         this.name = name;
//     }
// }

/* let E1 = Object.create(Employee);
E1.name = "Luiz";
E1.role = "Developer";
E1.changeName("Luiz Fernando")
console.log(E1);

let E2 = Object.create(Employee, {
    name: { value: "Luiz Vidal", writable: true },//sem o writable não é possível faze a modificação da linha 20
    role: { value: "FullStack Developer" }
})
E2.changeName("Luiz Fernando Vidal")
console.log(E2); */

function Employee(name, id, salary) {
    this.name = name;
    this.id = id;
    this.salary = salary;
};

Employee.prototype.post = function () {
    return `${this.name} is a content creator`
};

let Luiz = new Employee("Luiz", 1, 10000);

console.log(Luiz)

function Programmer(name, id, salary, language) {
    Employee.call(this, name, id, salary);
    this.language = language;
}
Programmer.prototype = Object.create(Employee.prototype);
Programmer.prototype.constructor = Programmer;
const person = new Programmer("Luiz Vidal", 2, 1000000, "Angular");

console.log(person);