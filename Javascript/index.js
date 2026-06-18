// const user ={
//     name:"Prshant Singh",
//     age: 22,
//     city: "Delhi",
//     profession: "Software Engineer",
//     hobbies: ["Coding", "Traveling", "Cooking"],
//     greet: function() {
//         console.log(`Hello, my name is ${this.name} and I am a ${this.profession}.`);
//     }
// };


// console.log(user.name); // Output: Prshant
// // delete user.hobbies;
// console.log(user.hobbies); // Output: undefined



// const func=(function(a){
//     delete a;
//     return a;
// },(5))

// console.log(func)



// const user ={
//     name:"Prshant Singh",
//     age: 22,
//     city: "Delhi",
//     "like to eat": "Pizza"
// };

// // console.log(user["like to eat"]); // Output: Pizza
// for(key in user){
//     console.log(user[key]); // Output: name, age, city, like to eat
// }
// console.log(Object.keys(user)); // Output: [ 'name', 'age', 'city', 'like to eat' ]
// console.log(Object.values(user)); // Output: [ 'Prshant Singh', 22, 'Delhi', 'Pizza' ]


// console.log(user["name"]) // Output: Prshant Singh
// console.log(user[name]) // Output: error




// const property="first name";
// const name="Prshant";

// const user1={
//     [property]:name
// }
// console.log(user1); // Output: Prshant




// Question 1: What will be the output of the following code snippet?

const obj={
    a:"Hello",
    b:"World",
    a:"Prshant"
}
console.log(obj); // Output: { a: 'Prshant', b: 'World' }


// Question 2: Create a function multiplyByTwo(obj) that multiplies all numeric values in the given object by 2 and returns the modified object.

let numObj = {
    a: 1,
    b: 2,
    c: "Hello",
    d: 3
};

function multiplyByTwo(obj){
    for(key in obj){
        if(typeof obj[key] === "number"){
            obj[key] *= 2;
        }

    }
}
multiplyByTwo(numObj);
console.log(numObj); // Output: { a: 2, b: 4, c: 'Hello', d: 6 }


// Question 3: Whtat will be the output of the following code snippet?

const a={};
const b={key:"b"};
const c={key:"c"};

a[b]=123;
// a["[object Object]"]=123
a[c]=456;

console.log(a[b]); 


// Question 4:What is Json.stringify() and Json.parse() in JavaScript?


// JSON.stringify() is a method in JavaScript that converts a JavaScript object or value to a JSON string.
//  It is used to serialize data so that it can be sent over a network or stored in a file.

const obj1 = { name: "Prshant", age: 22, city: "Delhi" };
console.log(obj1); // Output: { name: 'Prshant', age: 22, city: 'Delhi' }
const jsonString = JSON.stringify(obj1);
console.log(jsonString); // Output: {"name":"Prshant","age":22,"city":"Delhi"}

// JSON.parse() is a method in JavaScript that parses a JSON string and converts it into a JavaScript object.
//  It is used to deserialize data that has been received from a network or read from a file.





// function curr(a){. //a =1
//     return function (b){. // 2
//         return function (c){. //3
//             return a+b+c. 
//         }
//     }
    
// }
// let res=curr(1)(2)(3)
// console.log(res)


// function memoization(){
//     let cache={}
//     return (value)=>{
//         if(value in cache){
//             return cache[value]
//         }
//         else{
//           let res=value+20;
//           cache[value]=res
//           return res
//         }
//     }
// }

// const result=memoization()
// console.log(result(2))