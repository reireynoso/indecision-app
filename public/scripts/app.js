"use strict";

var nameVar = "Andrew";
var nameVar = "Mike";

console.log('nameVar', nameVar);

var nameLet = "Jen";
nameLet = "Yo";
console.log("nameLet", nameLet);

var nameConst = "Frank";
console.log('nameConst', nameConst);

// Block scoping 

var fullName = "Rei R";

if (fullName) {
    var _firstName = fullName.split(' ')[0];
    console.log(_firstName); // Rei
}

console.log(firstName);
