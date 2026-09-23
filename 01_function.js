//function a is shareable package of code. it is used to executes reusable code for some specific task.
// we can call a function as a procedure as we can perform some calcuations, some task based on some value.
// function defenition
function hello(){
    //code
    console.log("hello i am a function");
    
}
// console.log(hello());//calling also
// let result=hello();
// console.log(result);//undefined

// passing arguement and accepting as parameter
function addNumber(num1,num2){
   return num1+num2;
//    console.log("result");//not executable
   
}

// let result1=addNumber(2,3);
// console.log(result1);

// default parameter
function logedIn(username="imtiyaz"){
return`${username} just logged in`
}
// console.log(logedIn("imtiyaz"));
// let result2=logedIn("");
// let result3=logedIn(null)// null
let result4=logedIn()//undefined. so to prevent this use default param or conditions
console.log(result4);









