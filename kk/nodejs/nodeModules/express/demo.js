const express = require('express');
const link = express();

link.get('/', (req, res) => {
    
    res.send('<button><a href="/view">view</a></button><br><br><button><a href="/click">click</a></button><br><br><button><a href="/submit">submit</a></button><br><br><button><a href="/login">login</a></button>')
});


link.get('/view', (req, res) => {
    res.send("this is view page")
});
link.get('/click', (req, res) => {
    res.send("this is click page")
});
link.get('/submit', (req, res) => {
    res.send("this is submit page")
});
link.get('/login', (req, res) => {
    res.send("this is login page")
})
link.listen(1234, console.log("finaly working"));

// let http = require('http');

// http.createServer((req, res) => {
//     res.write('<button><a href="https://www.freeonlinetest.in/exam-start/programming-skill/react-js-mcq/1">1st link</a></button><button><a href="https://www.w3schools.com/nodejs/">2st link</a></button><button><a href="https://www.w3schools.com/nodejs/nodejs_modules.asp">3st link</a></button><button><a href="https://www.w3schools.com/angular/">4st link</a></button>');
   
//     res.end();
// })
// .listen(2001, () => console.log('server running'));