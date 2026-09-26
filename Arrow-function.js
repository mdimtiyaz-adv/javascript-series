// this keyword
const User={
    name:"imtiyaz",
    grade:12,
    // greet:function(){
    //   let  Username="Arman";
        // console.log(`${Username} good morning`);
        // console.log(`${this.name} good mirning`);
    // }
    arrow:()=>{
        let username="imtiyaz";
        console.log(this.username);//undefned
        
    }
}

// User.greet();
// User.arrow()

// this in function
// function greet(){
//     let Name="imtiyaz";
//     console.log(this.Name);
//     //refer global object
// }
// greet()
// let Name1="imtiyaz"
// const greet1=function(){
//     let Name1="imtiyaz";
//     console.log(this.Name1);//undefnined
//     //refer global object

// }
// greet1()
// outside function
// console.log(this);//empty object
//arrow function
// const Add=()=>{
//     console.log("hey i am called");
    
// }
// Add();
// const AddTwo=(n1,n2)=>{
// return n1+n1;

// }
// console.log(AddTwo(2,3)) explicit call reuire return keyword


const AddTwo=(n1,n2)=> n1+n1

console.log(AddTwo(4,5));//implicit call
