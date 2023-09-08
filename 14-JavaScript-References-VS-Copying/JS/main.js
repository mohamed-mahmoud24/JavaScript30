// start with strings, numbers and booleans
// let age = 20;
// let age2 = 25;
// console.log(age, age2);
// age2 = 30;
// console.log(age, age2);

// let name1 = 'Wes Bos';
// let name2 = 'Wesly';
// console.log(name1, name2);
// name2 = 'Sarah';
// console.log(name1, name2);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
// const team = players;
// console.log(team, players);

// team[3] = 'lux';
// console.log(team, players);

// You might think we can just do something like this:

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice();
// one way

// or create a new array and concat the old one in
const team3 = [].concat(players);

// or use the new ES6 Spread
const team4 = [...players];

const team5 = Array.from(players);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Wes Bos',
    age: 80,
};

// and think we make a copy:
// const captin = person;
// captin.number = 99;
// console.log(person);

// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 99 });
cap2.name = 'Wesly';
console.log(cap2);
console.log(person);

// We will hopefully soon see the object ...spread
const cap3 = { ...person };
console.log(cap3);
// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const wes = {
    name: 'Wes',
    age: 100,
    social: {
        twitter: '@wesbos',
        instagram: 'wes_bos',
        facebook: 'wesbos.developer',
    },
};

console.clear();

const dev = Object.assign({}, wes);

const dev2 = JSON.parse(JSON.stringify(wes));
