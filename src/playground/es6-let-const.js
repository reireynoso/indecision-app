var nameVar = "Andrew"
var nameVar = "Mike"

console.log('nameVar', nameVar)

let nameLet = "Jen"
nameLet = "Yo"
console.log("nameLet", nameLet)

const nameConst = "Frank"
console.log('nameConst', nameConst)

// Block scoping 

let fullName = "Rei R"
    
if(fullName){
    let firstName = fullName.split(' ')[0]
    console.log(firstName) // Rei
}

console.log(firstName)