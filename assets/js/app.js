let a = 110,
    b = 20,
    c = 'Hola ',
    e = 'Phineas',
    x = a + b + c + e;

const saludo = c + e;

console.log('%c Mis variables y Hola mundo', 'color: aqua; font-weight: bold');
console.log('%c Hola Mundo', 'color: aqua')
console.warn( {x} )    
console.error( {x} );

console.table({a, b, c, e})