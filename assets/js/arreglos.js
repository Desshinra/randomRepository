// const arr = new Array(10); //Way of create arrays(is not popular)
// console.log(arr);

let videoGames = [ 'Mario 3', 'Megaman', 'Chrono Trigger']
console.log({videoGames});

console.log(videoGames[0]);

let anyArray = [
    true,
    1223,
    'ola',
    2 * 2,
    function a(){},
    () => {},
    {a : 1},
    ['X', 'Megaman', 'zero', ['woodman']]
]

// console.log({anyArray});
console.log(anyArray[0]);
console.log(anyArray[7][3][0]);