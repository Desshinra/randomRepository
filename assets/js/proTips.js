const createPerson = ( name, lastName ) => ({name,lastName});
const jaq = createPerson( 'Solas', 'Esustasio' )

console.log( createPerson( 'Hola', 'bb' ) );

function imprimeArgumentosPuta() {
    console.log( arguments );
}

imprimeArgumentosPuta('hola','mundo', true, false);

const imprimeArgumentosPuta2 = (... aargs) => {
    return aargs;
};

const [ aaas, asd ] = imprimeArgumentosPuta2('asdfasfd', 'asdkjvvhoaiifhasohfasoñidhfaosñihf');

console.log({aaas, asd});

const {lastName} = createPerson('yya', 'yaya');
console.log({ lastName });