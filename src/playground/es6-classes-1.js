// Car
// make
// model
// vin number
// getDescription

class Person {
    constructor(name = "test", age = 0){
        // this.name = name || "test"
        this.name = name
        this.age = age
    }

    getGreeting(){
        return `Hey I am ${this.name}` //template strings with back ticks
    }

    getDescription(){
        return `${this.name} is ${this.age}.`
    }
}

const me = new Person("Rei", 24);

console.log(me.getDescription())