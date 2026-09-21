const Hero1=new Array("alam","arman","ram","shyam");
// console.log(Hero1);
const Hero2=["batman","captain","ironman","superman"];
// console.log(Hero2);
// Hero1.push(Hero2);
// console.log(Hero1);
// we use concat here
// const NewHero=Hero1.concat(Hero2);
// console.log(NewHero);
// spread operator
const NewHero=[...Hero1,...Hero2];
// console.log(NewHero);
// <--flat method-->
// const arr1=[1,2,3,[4,5,6],7,8,[9]];
// const arr2=arr1.flat(Infinity);
// console.log(arr2);//return new array 
// console.log(Array.isArray("national"));//returns boolean value .check it is array or not

console.log(Array.from("national"));//makes new array
let marks1=50;
let marks2=30;
let marks3=60;
console.log(Array.of(marks1,marks2,marks3));//makes array of the following set of variables




