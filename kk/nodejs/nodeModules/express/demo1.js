const express = require('express');
const step = express();

step.get('/', (req, res) => {

    res.send('<button onclick="my"><a href=">next</a><  /button>')
});



step.listen(1234, console.log('running'));

const my = (event) => {
    event.preventDefault();
    step.get('/view', (req, res) => {
        res.send('<button><a href=">view</a></button>')
    });
   
}