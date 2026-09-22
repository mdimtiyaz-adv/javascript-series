//singleon object:new Object()
const data={
    name:"imtiyaz ansari",
    email:"imtiyaz@gmail",
    job:{
        developer:"software",
        Age:"18",
        hobbies:{
            playing:"football",
            writing:"articles",
        }
    }
}
// console.log(data.job.hobbies.playing);
// console.log(data.jobs?.hobbies.playing);//undefined
//spread operator
const obj1={a:3,b:5,c:1}
const obj2={c:3,d:5,e:2}
// console.log(obj1,obj2);
// const obj3=Object.assign(obj1,obj2);
// console.log(obj3);
// const obj4={...obj1,...obj2}
// console.log(obj4);

//array of object
const arrOfObj=[
    {
        id:1,
        name:"imtiyaz"
    },
    {
        id:2,
        name:"Arman"
    },
    {
        id:3,
        name:"Arbaz"
    }
]
// console.log(arrOfObj[0].id);
// keys
// console.log(Object.keys(data));
// console.log(Object.values(data));
// console.log(Object.entries(data));
// console.log(data.hasOwnProperty('hobbies'));
// console.log(data.toString());
console.log(  delete data.name);
console.log(data.hasOwnProperty(name));//error











