let os = require('os');
const { sum } = require('./local');

console.log(os.homedir());

console.log(os.version());

console.log(os.hostname());

console.log(os.platform());

console.log(os.uptime());

// setTimeout(() => {
//     function krish(a, b) {
//         return a + b;

//     }


//     console.log(krish(1, 5));
// }, 2500);


const global = require('./local');
sum()
console.log(__filename);
console.log("__dirname:    ", __dirname);
