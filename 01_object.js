// singleton:object made through constructor
//object.create using

// object literals
const mySymbol=Symbol("id");

const User={
    id:1,
    name:"imtiyaz ansari",
    "roll-no":2,
    email:"imtiyaz@gmail.com",
    age:19,
    ["mySymbol"]:"key1",

}
// ascessing
// console.log(User.id);//or
// console.log(User["name"]);//js treat the key as string so we can use bracket notation
// console.log(User.mySymbol);
//freeze method
User.email="mdimtiyaz@gmail"
console.log(User.email);
// Object.freeze(User);//reeze the object so that we can't change the value of the object
// User.email="abrar@gmail.com"
// console.log(User.email);
//passing funtion in object
User.greet=function(){
  console.log("in the greet");
    
}
// console.log(User.greet());

User.dets=function(){
    console.log(`my name is ${this.name}`);
    
}
User.greet();
User.dets()






