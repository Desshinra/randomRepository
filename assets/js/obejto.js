let characters = {
    
    name: 'Chic',
    codeName: 'Csd',
    age: 25,
    city: 'New York',
    vivo: false,
    country: 'USA',
    coords: {
        lat: 35.065,
        lng: -589.258
    },
    trajes: ['A', 'B'],
    direction: {
    zip: '10880, 90225',
    ubication: 'Malibu, California'
    },
    lastMovie: 'Infinity-War'
};

// console.log(characters);
// console.log('name', characters.name);
// console.log('name', characters.name);
// console.log('name', characters['name']);

// console.log('Age:', characters.age);

// console.log('Lat', characters.coords.lat);

// console.log('Number', characters.trajes.length);
// console.log('Number', characters.trajes[characters.trajes.length - 1]);

// const x = 'vivo';
// console.log('Vivo', characters[x] );

// console.log('Última película', characters.lastMovie);

/////////////////////////////////////// More details

delete characters.age;
console.log(characters);

characters.married = true;

const entriesPares = Object.entries( characters );
console.log( entriesPares );

Object.freeze( characters )//object const??

const propertiess = Object.getOwnPropertyNames( characters );
const valuess = Object.values( characters )
console.log(object);
console.log(propertiess);