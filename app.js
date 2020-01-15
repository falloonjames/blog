const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('<h1>Page is under construction...');
});

app.get('*', (req, res)=>{
    res.send('Da fuck is ' + req.params[0]);
});

app.listen(9000, ()=>{
    console.log('Running on port 9000...');
});