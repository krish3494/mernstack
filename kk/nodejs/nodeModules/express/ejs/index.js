const express = require('express');
const app = express();
app.set('view engine', 'ejs');
let a=['krishnan',true,false,"siva"]

app.get('/', (req, res) => {
    // res.send('<h1>hai</h1>')
    res.render('index',{a:a});
});

app.listen(1995,console.log('server running'))