//EX.1--OBJECT LITERALS--//

// const user = {
//     name: 'Jesus Christ',
//     age: 30,
//     email: 'crystal@SpeechGrammarList.com',
//     location: 'berlin',
//     blogs: ['why mac cheese rules', '10 things to make with marmite'],
//     login: function() {
//         console.log('the user logged in');
//     },
//     logout: function() {
//         console.log('the user logged out');
//     },

//--CALL BACK FUNCTION USING THIS TO CALL KEY OBJECT IN THE OBJECT ARRAY VALUES--//
// logBlogs: function() {
//     //console.log(this.blogs) //<-- context object(this) referred to the user key object
//     console.log('this user has written the following blogs:');
//     this.blogs.forEach(blog => {
//         console.log(blog);
//     });

// }

//--CREATE ARROW FUNCTION => CALL BACK FUNCTION USING THIS TO CALL KEY OBJECT--//
//     logBlogs() {
//         //console.log(this.blogs) //<-- context object(this) referred to the user key object
//         console.log('this user has written the following blogs:');
//         this.blogs.forEach(blog => {
//             console.log(blog);
//         });


//     }

// };

// console.log(this); //<---show window object in the console
// user.logBlogs();

//user.login();
//user.logout();



// console.log(user);
// console.log(user.name); //dot notation


// user.age = 35;
// //console.log(user.age);
// console.log(user['name']); //<--squared notation
// user['name'] = 'chun-li';
// console.log(user['name']);



// console.log(user['location']);

// console.log(typeof user); //<---see the type of object



//EX.2--OBJECTS INSIDE AN ARRAY--//



// let user = {
//     name: 'Jesus Christ',
//     age: 30,
//     email: 'crystal@SpeechGrammarList.com',
//     location: 'berlin',
//     blogs: [
//         { title: 'why mac & cheese rules', likes: 30 }, //<---this is an object inside an array with property of 'likes: 30';
//         { title: '10 things to make with marmite', likes: 50 }
//     ],
//     login: function() {
//         console.log('the user logged in');
//     },
//     logout: function() {
//         console.log('the user logged out');
//     },






//     logBlogs() {
//         //console.log(this.blogs) //<-- context object(this) referred to the user key object
//         console.log('this user has written the following blogs:');
//         this.blogs.forEach(blog => {
//             console.log(blog.title, blog.likes);
//         });


//     }

// };

// console.log(this); //<---show window object in the console
// user.logBlogs();


//--MATH OBJECT--//

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);


// const area = 7.7;

// console.log(Math.round(area)); //<--round method is going close up number 8
// console.log(Math.floor(area)); //<--floor method is going close down number 7
// console.log(Math.ceil(area)); //<--ceil method is going up towards number 8
// console.log(Math.trunc(area)); //<--trunc method remove the decimal from the number and leaves the integer.


// const random = Math.random(); //<-- getting random number

// console.log(random);
// console.log(Math.round(random * 100)); //<--getting random number between 1 and 100.



//--Primitive & Reference Types--//


//Primitive Types:           Reference Types:

// -numbers                  -all types of objects       
// -strings                  -object literals
// -Boolean                  -arrays
// -null                     -functions
// -undefined                -dates
// -symbols                  -all other objects


//--EX.3--PRIMITIVE VALUES--//

// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// scoreOne = 100; //<--declare variable for a new value of scoreOne
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`); //<--scoreOne is changed


//--EX.4--REFERENCE VALUES--//


const userOne = { name: 'ryu', age: 30 };
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.age = 40; //<--change age of the two objects
console.log(userOne, userTwo); //<--print in the console the two new keys of the objects

userOne.name = 'chun-li'; //<--change age of the two objects
console.log(userOne, userTwo); //<--print in the console the two new keys of the objects