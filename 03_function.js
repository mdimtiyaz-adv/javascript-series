//IIFE
(function code(){
    // named iife
    console.log("i am iife");
    
})();
// we use iife to not to get affected by global pollution. like if we want to perform some specific task in specific function and not to get affected by other .
//semicolon is used to terminate the function.
( ()=>{
    console.log("hello i am also iife");
    
})();

