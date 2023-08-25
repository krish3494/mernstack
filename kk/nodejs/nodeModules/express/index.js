const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("hello this is express")
});

app.get('/view', (req, res) => {
    res.send("this is view page")
})

app.listen(2001, console.log("Express running"));