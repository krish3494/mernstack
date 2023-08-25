const express = require('express');

const find = express();
find.set('view engine', 'ejs');



find.get('/', (req, res) => {
    
    // res.send('hai');
    res.render('home')
});



find.listen(34, console.log('loading'));

