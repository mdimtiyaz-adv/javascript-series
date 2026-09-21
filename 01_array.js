// array is the set of multiple items. it contains both same and different datatypes.it passes shallow copy. we can ascess array by passing index number.
const arr1=[1,2,3,4,5];//declaration
// console.log(arr1[0]);//ascessing
// arr1[2]=9;//updating
// console.log(arr1);

// <--methods in array-->

// arr1.push(9);
// console.log(arr1);
// arr1.pop();
// console.log(arr1);
// arr1.unshift(8);
// console.log(arr1);
// arr1.shift();
// console.log(arr1);
// console.log(arr1.includes(9));
// console.log(arr1.indexOf(8));
// <-- splice and slice-->
// splice:returns the range part of the array and change the original array
// slice :only return the range part 
// const arr2=arr1.slice(0,3);
// console.log(arr2);
// console.log(arr1);
const arr3=arr1.splice(1,4);
console.log(arr3);
console.log(arr1);//changed the original value












