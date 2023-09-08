const dogs = [
    { name: 'Snickers', age: 2 },
    { name: 'hugo', age: 8 },
];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// clearing
console.clear();

// Regular
console.log('Hello world');

// Interpolated
console.log('%s comes from %s', 'string');

// Styled
console.log('%c I have style with %c', 'font-size:20px ; color: red');

// warning!
console.warn('Something is wrong');

// Error :|
console.error('Something is wrong');

// Info
console.info('info:  Corodiles eat 3-4 peopleper year ');

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('bom'), 'That is wrong ');

// Viewing DOM Elements
console.log(p);
console.dir(p);
// Grouping together
dogs.forEach(dog => {
    console.group(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age}`);
    console.groupEnd(`${dog.name}`);
});
// counting
console.count('First counter');
console.count('First counter');
console.count('Sec counter');
console.count('Sec counter');
console.count('Sec counter');
console.count('First counter');
console.count('First counter');
console.count('Sec counter');
console.count('Sec counter');
console.count('First counter');
console.count('First counter');
console.count('Sec counter');

//table
console.table(dogs);

// timing
console.time('fetching data');
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });
