// let http = require('http');

// http.createServer((req, res) => {
//     res.write('<h1>hello</h1>');
//     res.end();
// }).listen(1999, () => console.log("server running"));


let http = require('http');

http.createServer((req, res) => {
    res.write('<button><a href="https://www.freeonlinetest.in/exam-start/programming-skill/react-js-mcq/1">Click</a></button>');
    res.end();
}).listen(2001, () => console.log('server running'));