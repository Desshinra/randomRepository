
function meeting( name ) {
    console.log('Hello' + name);
    return 1;
}; //Mala practica para aasignar variables 

// const ABCD = function( name ) {
//     console.log('Hello' + name);
// };

// const A = () => {
//     console.log('Hola fle');
// };

// const A2 = ( name ) => {
//     console.log('Hola' + name);
// };

const retornoDeSaludar = meeting('Joaquín', 40, true); //1
console.log(retornoDeSaludar);

// ABCD('Koala');
// A();

function sumarr( a, b ) {
    return a + b;
}

console.log( sumarr(1,5) );


// const sumarr2 = (a,b) => {
//     return a+b;
// }

const sumarr2 = (a,b) => a+b;

function getRandom() {
    return Math.random();
} 

//En funcion de flecha que no tenga llaves

const exer = () => Math.random();
console.log( exer() );

console.log( getRandom() );
console.log(sumarr2(5,6));

