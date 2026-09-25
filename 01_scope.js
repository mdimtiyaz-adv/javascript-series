// global scope :defined globally and can be used everywhere
// blocked scope:defined in scope and used only in defined scope
// var is global scoped . it doesnt respect block and is functionally scoped. let is blocked scoped .and also const is blocked scoped.
//  function add(){
//     const Username="imtiyaz ansari  ";
//     function addTwo(){
//         const num=2
//         console.log(Username + num);
//     }
//     // console.log(num);//error we cannot use this variable 
//     addTwo();
//  }
// add()
//same as this if else also executes.  this concept of using the variable of outer function is called closure.
//<--hoisting-->
sub(5);
function sub(num){
    return num
}
console.log(sub2(3))
//hoisted but not in tdz :cannot ascess before initaialization
 const sub2=   function (val){
    return val*2
}
