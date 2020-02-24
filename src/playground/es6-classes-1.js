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

class Student extends Person {
    constructor(name, age, major){
        super(name, age)
        this.major = major
    }

    hasMajor(){
        return !!this.major
    }

    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description += ` Their major is ${this.major}`
        }
        return description
    }
}

// Traveler -> Person
// Add support for homeLocation

class Traveler extends Person{
    constructor(name, age, homeLocation){
        super(name, age)
        this.homeLocation = homeLocation
    }

    getGreeting(){
        let greeting = super.getGreeting()
        if(this.homeLocation){
            greeting += `. I am visiting from Brooklyn`
        }
        return greeting
    }
}

const me = new Traveler("Rei", 24, "Math");

console.log(me.getGreeting())