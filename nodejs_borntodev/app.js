const express = require('express');
const app = express();
const port = 3000;

const debug = require('debug')('app');
//debug app /\/\
app.get("/", (req,res)=>{
    res.send('hello');
});

app.listen(port,()=>{
    debug("hi on port "+port);
});