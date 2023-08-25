const express = require('express');
const app = express();
const port =900

const k = 'surya'
app.set('view engine','ejs')
app.get('/', (req, res) => {
        // res.send('hello krishna')
    
    res.render('a',{b:k});
})



app.listen(port,()=>console.log('running'))