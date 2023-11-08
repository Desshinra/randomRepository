let games = ['Zelda', 'Mario', 'Metroid'];
console.log('largo:', games.length);

let first = games[0];
let last = games[ games.length - 1];

console.log({first, last});

games.forEach( (element, index, arr) => {
    console.log({element, index, arr});
});

games.push( 'fifa'   );