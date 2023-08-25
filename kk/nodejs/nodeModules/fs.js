// const fs = require('fs');

// fs.writeFileSync("krish.txt", "this is samplefile");
// let view = fs.readFileSync("krish.txt")

// console.log(view.toString());

// fs.unlinkSync("krish.txt");

// Just try

const fs = require('fs')

fs.writeFileSync("Demo.txt", "onnum illa ");
let show = fs.readFileSync("Demo.txt")

console.log(show.toString());

fs.unlinkSync("Demo.txt")