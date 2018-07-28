// var let const
var a = 'a';
let b = 'b';
const c = 'c';

// ------------------------------------------- //
// classes
// es5
function OldStudent(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}
Student.prototype.greet = function() {
    return 'Hi ' + this.firstName + ' ' + this.lastName;
}
var me = new OldStudent('Nabil', 'Naffar', 30);

// es2015
class NewStudent {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    greet() {
        // string templates
        return `Hi ${this.firstName} ${this.lastName}`
    }
}
const otherMe = new NewStudent('Nabil', 'Naffar', 30);


// ------------------------------------------- //
// extends



// ------------------------------------------- //

// arrow functions
// turn this
function greet(props){
    return { value: 'Hello ' + props.name + ' !' };
}

// into this
// const shorterGreet = ({name}) => ({value: `Hello ${name}!`});

// ------------------------------------------- //
const greetAsync = () => {
    setTimeout(function(){
        console.log(`Hi ${this.firstName} ${this.lastName}`);
    });
}

// default params
// greetAsync(after = 1000) {
//      const before = window.performance.now();
//     setTimeout(function(){
//          console.log(window.performance.now() - before);
//         console.log(`Hi ${this.firstName} ${this.lastName}`);
//     }, after);
// }


// spread objects / arrays
// greetAsync(options) {
//      const before = window.performance.now();
//     setTimeout(function(){
//          console.log(window.performance.now() - before);
//         console.log(`Hi ${this.firstName} ${this.lastName}`);
//     }, options.after);
// }

// ------------------------------------------- //

// ...rest
const object = {
    firstName: 'Nabil',
    lastName: 'Naffar',
    age: 30
}

// src: https://lodash.com/docs/4.17.10#pick
var object = { 'a': 1, 'b': '2', 'c': 3 };
var rest = _.omit(object, ['a', 'c']); // => { 'b': '2' } 
var picked = _.pick(object, ['a', 'c']); // => { 'a': 1, 'c': 3 }

const {a, c, ...rest} = object;

// ------------------------------------------- //

// async / await
function asyncJob(something) {
    return new Promise((resolve) => {
        setTimeout(() => { resolve(something) }, 1000)
    })
}

(function start() {
    asyncJob('regular promise api').then((res) => {
        console.log(res);
    });
})()

(async function start() {
    const res = await asyncJob('using Async/Await');
    console.log(res);
})()
 
// ------------------------------------------- //
// bind



