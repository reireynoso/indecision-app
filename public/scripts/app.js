"use strict";

//arguments object - no longer bound with arrow functions


var add = function add(a, b) {
    // console.log(arguments)
    return a + b;
};
console.log(add(55, 1));

// const addArrow = (a,b) => {
//     console.log(arguments)
//     return a + b
// }
// console.log(addArrow(55,1))


//this keyword - no longer bound with arrow functions

var user = {
    name: "Rei",
    cities: ["Jersey", "NY"],
    // printPlacesLived: function(){
    //     // console.log(this.name)
    //     // console.log(this.cities)
    //     this.cities.forEach(function(city){
    //         console.log(city)
    //     })
    // }
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        //method definition es6
        // console.log(this.name)
        // console.log(this.cities)
        return this.cities.map(function (city) {
            return _this.name + " has lived in " + city;
        });
        // this.cities.forEach((city) => {
        //     console.log(this.name, city)
        // })
    }
};

console.log(user.printPlacesLived());

// When we use a regular function defined on an object property, the this keyword is bound to the object

var multiplier = {
    numbers: [1, 2, 3, 4, 5, 6],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (num) {
            return num * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
